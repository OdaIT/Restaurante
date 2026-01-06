// ===== SELETORES =====
const categoryCheckboxes = document.querySelectorAll('#categoryFilters input');
const preferenceCheckboxes = document.querySelectorAll('#preferenceFilters input');
const menuItems = document.querySelectorAll('.menu-item');
const activeFiltersBar = document.getElementById('activeFiltersBar');

// ===== ESTADO =====
let filters = {
  categories: [],
  preferences: []
};

// ===== FUNÇÕES =====

// Atualiza o estado dos filtros
function updateFilters() {
  filters.categories = [];
  filters.preferences = [];

  categoryCheckboxes.forEach(cb => {
    if (cb.checked) filters.categories.push(cb.value);
  });

  preferenceCheckboxes.forEach(cb => {
    if (cb.checked) filters.preferences.push(cb.value);
  });
}

// Aplica os filtros às cards
function applyFilters() {
  menuItems.forEach(item => {
    const category = item.dataset.category;
    const tags = item.dataset.tags ? item.dataset.tags.split(',') : [];

    let showItem = true;

    // Filtro de categoria (OR)
    if (filters.categories.length > 0) {
      if (!filters.categories.includes(category)) {
        showItem = false;
      }
    }

    // Filtro de preferências (AND)
    if (filters.preferences.length > 0) {
      const hasAllPreferences = filters.preferences.every(pref => tags.includes(pref));
      if (!hasAllPreferences) {
        showItem = false;
      }
    }

    // Mostrar ou esconder
    item.classList.toggle('hidden', !showItem);
  });
}

// Mostra filtros ativos
function showActiveFilters() {
  const labels = {
    'entradas': 'Entrada',
    'principais': 'Prato Principal',
    'sobremesas': 'Sobremesa',
    'bebidas': 'Bebida',
    'vegetariano': 'Vegetariano',
    'gluten': 'Sem Glúten',
    'lactose': 'Sem Lactose'
  };

  const allFilters = [...filters.categories, ...filters.preferences];

  if (allFilters.length === 0) {
    activeFiltersBar.innerHTML = '';
    return;
  }

  const tagsHTML = allFilters.map(f => 
    `<span class="active-filter-tag">${labels[f] || f}</span>`
  ).join('');

  activeFiltersBar.innerHTML = `
    ${tagsHTML}
    <button class="clear-filters-btn" onclick="clearFilters()">
      🗑️ Limpar (${allFilters.length})
    </button>
  `;
}

// Limpa todos os filtros
function clearFilters() {
  categoryCheckboxes.forEach(cb => cb.checked = false);
  preferenceCheckboxes.forEach(cb => cb.checked = false);
  
  filters.categories = [];
  filters.preferences = [];
  
  applyFilters();
  showActiveFilters();
}

// Handler para mudança de checkbox
function onFilterChange() {
  updateFilters();
  applyFilters();
  showActiveFilters();
}

// ===== EVENT LISTENERS =====
categoryCheckboxes.forEach(cb => {
  cb.addEventListener('change', onFilterChange);
});

preferenceCheckboxes.forEach(cb => {
  cb.addEventListener('change', onFilterChange);
});