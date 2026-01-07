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
const closedWeekdays = [1]; // 0=Domingo ... 6=Sábado

const closedFixedDates = [
  '01-01', // Ano Novo
  '12-25'  // Natal
];

const openingHours = {
  start: '12:00',
  end: '22:00'
};
/*****************************************************************/

const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');
const timeSelect = document.getElementById('time');
const confirmationMessage = document.getElementById('confirmationMessage');

let currentDate = new Date();
let selectedDay = null;

function renderCalendar() {
  calendar.querySelectorAll('.day, .empty').forEach(e => e.remove());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  monthYear.textContent = `${months[month]} de ${year}`;

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    calendar.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const weekday = date.getDay();
    const mmdd = `${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = d;

    if (closedWeekdays.includes(weekday) || closedFixedDates.includes(mmdd)) {
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

document.getElementById('prev').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById('next').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

document.getElementById('submit').onclick = () => {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const time = timeSelect.value;

  if (!selectedDay || !time || !name || !phone) {
    alert('Preencha todos os campos e selecione data e hora.');
    return;
  }

  confirmationMessage.textContent = `Reserva confirmada para ${selectedDay}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} às ${time}. Obrigado, ${name}!`;
  confirmationMessage.classList.remove('hidden');
};

generateTimes();
renderCalendar();