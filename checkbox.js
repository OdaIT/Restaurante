 // ===== DADOS DO MENU =====
        const menuData = [
            {
                id: 1,
                name: "Pão caseiro que acompanha com manteiga e azeite",
                description: "Couvert de pão, manteiga e azeite, artigos separados",
                price: 3.5,
                category: "entradas",
                tags: ["vegetariano", "gluten"],
                image: "Images\couvert.png"
            },
            {
                id: 2,
                name: "Azeitonas",
                description: "Taça de azeitonas temperadas",
                price: 3.0,
                category: "entradas",
                tags: ["vegetariano", "gluten"],
                image: "Images\azeitonas.png"
            },
            {
                id: 3,
                name: "Tábua de Enchidos",
                description: "Tábua com presunto, chouriço, salame, e alheira, que acompanha com pão e torras",
                price: 12.5,
                category: "entradas",
                tags: ["gluten"],
                image: "Images\enchidos.png"
            },
            {
                id: 4,
                name: "Cozido à portuguesa",
                description: "Prato típico português composto por uma variedade de carnes e legumes.",
                price: 22.0,
                category: "principais",
                tags: ["gluten","lactose"],
                image: "Images\cozido.png"
            },
            {
                id: 5,
                name: "Bacalhau à Brás",
                description: "Prato típico português feito com bacalhau e batata",
                price: 20.0,
                category: "principais",
                tags: ["gluten","lactose"],
                image: "Images\bacalhau.png"
            },
                        {
                id: 6,
                name: "Risotto de Cogumelos",
                description: "Arroz arbóreo cremoso com mix de cogumelos selvagens e parmesão",
                price: 23.0,
                category: "principais",
                tags: ["vegetariano","gluten"],
                image: "Images\risotto.png"
            },
            {
                id: 7,
                name: "Mousse de chocolate",
                description: "Sobremesa caseira feita à base de chocolate",
                price: 7.0,
                category: "sobremesas",
                tags: ["sem-gluten", "vegetariano", "lactose"],
                image: "Images\mousse.png"
            },
            {
                id: 8,
                name: "Pão de ló",
                description: "Doce típico português à base de ovos e farinha",
                price: 5.5,
                category: "principais",
                tags: ["vegetariano"],
                image: "Images\paodelo.png"
            },
            {
                id: 9,
                name: "Salada de fruta",
                description: "Taça de salada de fruta",
                price: 5.0,
                category: "sobremesas",
                tags: ["vegetariano", "gluten", "lactose"],
                image: "Images\salada.png"
            },
            {
                id: 10,
                name: "Água",
                description: "Jarro de água fresca da nascente",
                price: 5.0,
                category: "bebidas",
                tags: ["vegetariano", "gluten", "lactose"],
                image: "Images\agua.png"
            },
            {
                id: 11,
                name: "Sumo",
                description: "Sumo fresco",
                price: 6.0,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "Images\sumo.png"
            },
            {
                id: 12,
                name: "Copo de vinho",
                description: "Sumo de uva fermetado nas melhores barricas",
                price: 8.0,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "Images\vinhocheio.jpeg"
            },
        ];

        // ===== ESTADO DA APLICAÇÃO =====
        let filters = {
            categories: [],
            preferences: [],
            ingredients: []
        };

        // ===== ELEMENTOS DO DOM =====
        const menuGrid = document.getElementById('menuGrid');
        const resultsCount = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResults');
        const activeFiltersBar = document.getElementById('activeFiltersBar');
        const ingredientFiltersContainer = document.getElementById('ingredientFilters');

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // ===== FUNÇÕES DE FILTRAGEM =====
        function handleFilterChange() {
            updateFiltersState();
            applyFilters();
            renderActiveFilters();
        }

        function updateFiltersState() {
            // Categorias
            filters.categories = Array.from(
                document.querySelectorAll('#categoryFilters input:checked')
            ).map(cb => cb.value);

            // Preferências
            filters.preferences = Array.from(
                document.querySelectorAll('#preferenceFilters input:checked')
            ).map(cb => cb.value);
        }

        function applyFilters() {
            const items = document.querySelectorAll('.menu-item');
            let visibleCount = 0;

            items.forEach(item => {
                const category = item.dataset.category;
                const tags = item.dataset.tags.split(',').filter(t => t);

                let isVisible = true;

                // Filtro de categorias (OR - qualquer categoria selecionada)
                if (filters.categories.length > 0) {
                    if (!filters.categories.includes(category)) {
                        isVisible = false;
                    }
                }

                // Filtro de preferências (AND - deve ter todas as preferências)
                if (filters.preferences.length > 0) {
                    const hasAllPreferences = filters.preferences.every(pref => tags.includes(pref));
                    if (!hasAllPreferences) {
                        isVisible = false;
                    }
                }

                // Aplicar visibilidade
                if (isVisible) {
                    item.classList.remove('hidden');
                    visibleCount++;
                } else {
                    item.classList.add('hidden');
                }
            });

            resultsCount.textContent = visibleCount;
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        function renderActiveFilters() {
            const allFilters = [
                ...filters.categories.map(f => ({ type: 'category', value: f, label: getCategoryLabel(f) })),
                ...filters.preferences.map(f => ({ type: 'preference', value: f, label: getPreferenceLabel(f) }))
            ];

            if (allFilters.length === 0) {
                activeFiltersBar.innerHTML = '';
                return;
            }

            const tagsHTML = allFilters.map(f => `
                <span class="active-filter-tag">${f.label}</span>
            `).join('');

            activeFiltersBar.innerHTML = `
                ${tagsHTML}
                <button class="clear-filters-btn" onclick="clearAllFilters()">
                    🗑️ Limpar (${allFilters.length})
                </button>
            `;
        }

        function getCategoryLabel(value) {
            const labels = {
                'entradas': 'Entrada',
                'principais': 'Prato Principal',
                'sobremesas': 'Sobremesa',
                'bebidas': 'Bebida'
            };
            return labels[value] || value;
        }

        function getPreferenceLabel(value) {
            const labels = {
                    'vegetariano': 'Vegetariano',
                    'gluten': 'Sem gluten',
                    'lactose': 'Sem Lactose'
            };
            return labels[value] || value;
        }

        function clearAllFilters() {
            document.querySelectorAll('.filters-section input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            filters = { categories: [], preferences: [], ingredients: [] };
            applyFilters();
            renderActiveFilters();
        }

        // ===== RENDERIZAR MENU =====
        function createMenuItemHTML(item) {
            const tagsHTML = item.tags.map(tag => {
                const tagLabels = {
                    'vegetariano': 'Vegetariano',
                    'gluten': 'Sem gluten',
                    'lactose': 'Sem Lactose'
                };
                return `<span class="item-tag tag-${tag}">${tagLabels[tag] || tag}</span>`;
            }).join('');

            return `
                <article class="menu-item" 
                    data-category="${item.category}" 
                    data-tags="${item.tags.join(',')}"
                    <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
                    <div class="item-content">
                        <div class="item-header">
                            <h3 class="item-name">${item.name}</h3>
                            <span class="item-price">€${item.price.toFixed(2)}</span>
                        </div>
                        <p class="item-description">${item.description}</p>
                        <div class="item-tags">${tagsHTML}</div>
                    </div>
                </article>
            `;
        }

        function renderMenu() {
            menuGrid.innerHTML = menuData.map(createMenuItemHTML).join('');
            applyFilters();
        }

        // ===== EVENT LISTENERS =====
        document.querySelectorAll('#categoryFilters input, #preferenceFilters input').forEach(checkbox => {
            checkbox.addEventListener('change', handleFilterChange);
        });

        renderMenu();