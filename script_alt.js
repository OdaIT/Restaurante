document.addEventListener('DOMContentLoaded', () => {
      const checkboxes = document.querySelectorAll('.filtros input');
      const items = document.querySelectorAll('.item');

      function filtrar() {
        const ativos = Array.from(checkboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.id);

        items.forEach(item => {
          if (ativos.length === 0) {
            item.style.display = 'block';
            return;
          }

          const mostrar = ativos.every(filtro =>
            item.hasAttribute(`data-${filtro}`)
          );

          item.style.display = mostrar ? 'block' : 'none';
        });
      }

      checkboxes.forEach(cb => cb.addEventListener('change', filtrar));
      filtrar();
    });


/**************** CONFIGURAÇÃO DO ESTABELECIMENTO ****************/
// 0 = Domingo ... 6 = Sábado
const closedWeekdays = [1]; // ex: segunda-feira fechada

// Datas fixas encerradas todos os anos (MM-DD)
const closedFixedDates = [
  '01-01', // Ano Novo
  '12-25'  // Natal
];

// Horário de funcionamento
const openingHours = {
  start: '12:00',
  end: '22:00'
};

// Máximo de reservas por dia
const maxReservationsPerDay = 5;
/*****************************************************************/

const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');
const timeSelect = document.getElementById('time');
const confirmationMessage = document.getElementById('confirmationMessage');

let currentDate = new Date(); // mês atual
let selectedDay = null;

/**************** RESERVAS (localStorage) ****************/
function getReservationsByDate(dateKey) {
  const data = localStorage.getItem('reservations');
  const reservations = data ? JSON.parse(data) : {};
  return reservations[dateKey] || [];
}

function saveReservation(dateKey, reservation) {
  const data = localStorage.getItem('reservations');
  const reservations = data ? JSON.parse(data) : {};

  if (!reservations[dateKey]) {
    reservations[dateKey] = [];
  }

  reservations[dateKey].push(reservation);
  localStorage.setItem('reservations', JSON.stringify(reservations));
}
/**********************************************************/

function renderCalendar() {
  calendar.querySelectorAll('.day, .empty').forEach(e => e.remove());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const months = [
    'janeiro','fevereiro','março','abril','maio','junho',
    'julho','agosto','setembro','outubro','novembro','dezembro'
  ];

  monthYear.textContent = `${months[month]} de ${year}`;

  const today = new Date();
  today.setHours(0,0,0,0);

  // Espaços antes do dia 1
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    calendar.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const weekday = date.getDay();
    const mmdd = `${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dateKey = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

    const reservationsCount = getReservationsByDate(dateKey).length;

    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = d;

    // BLOQUEIOS
    if (
      date < today ||
      closedWeekdays.includes(weekday) ||
      closedFixedDates.includes(mmdd) ||
      reservationsCount >= maxReservationsPerDay
    ) {
      day.classList.add('disabled');
    } else {
      day.onclick = () => {
        document.querySelectorAll('.day').forEach(x => x.classList.remove('selected'));
        day.classList.add('selected');
        selectedDay = d;
      };
    }

    calendar.appendChild(day);
  }
}

function generateTimes() {
  timeSelect.innerHTML = '<option value="">Selecione uma hora</option>';

  const [sh, sm] = openingHours.start.split(':').map(Number);
  const [eh, em] = openingHours.end.split(':').map(Number);

  const current = new Date();
  current.setHours(sh, sm, 0, 0);

  const end = new Date();
  end.setHours(eh, em, 0, 0);

  while (current <= end) {
    const hh = current.getHours().toString().padStart(2,'0');
    const mm = current.getMinutes().toString().padStart(2,'0');

    const opt = document.createElement('option');
    opt.value = `${hh}:${mm}`;
    opt.textContent = `${hh}:${mm}`;
    timeSelect.appendChild(opt);

    current.setMinutes(current.getMinutes() + 15);
  }
}

// Navegação meses
document.getElementById('prev').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById('next').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

// Submeter reserva
document.getElementById('submit').onclick = () => {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const time = timeSelect.value;

  if (!selectedDay || !time || !name || !phone) {
    alert('Preencha todos os campos e selecione data e hora.');
    return;
  }

  const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,'0')}-${String(selectedDay).padStart(2,'0')}`;
  const reservationsToday = getReservationsByDate(dateKey);

  if (reservationsToday.length >= maxReservationsPerDay) {
    alert('Este dia já atingiu o número máximo de reservas.');
    return;
  }

  saveReservation(dateKey, { name, phone, time });

  confirmationMessage.textContent =
    `Reserva confirmada para ${selectedDay}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} às ${time}. Obrigado, ${name}!`;

  confirmationMessage.classList.remove('hidden');

  renderCalendar(); // atualiza o calendário após reservar
};

// Inicialização
generateTimes();
renderCalendar();