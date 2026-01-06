 // ===== DADOS DO MENU =====
        const menuData = [
            {
                id: 1,
                name: "Salada Mediterrânea",
                description: "Mix de folhas, tomate cherry, azeitonas, queijo feta e molho balsâmico",
                price: 8.50,
                category: "entradas",
                tags: ["vegetariano", "sem-gluten"],
                ingredients: ["folhas", "tomate", "azeitonas", "queijo feta"],
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400"
            },
            {
                id: 2,
                name: "Bruschetta Tradicional",
                description: "Pão torrado com tomate fresco, manjericão e azeite extra virgem",
                price: 6.90,
                category: "entradas",
                tags: ["vegetariano", "vegano"],
                ingredients: ["pão", "tomate", "manjericão", "azeite"],
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400"
            },
            {
                id: 3,
                name: "Sopa do Dia",
                description: "Sopa caseira preparada diariamente com ingredientes frescos",
                price: 5.50,
                category: "entradas",
                tags: ["vegetariano"],
                ingredients: ["legumes", "caldo"],
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
            },
            {
                id: 4,
                name: "Risotto de Cogumelos",
                description: "Arroz arbóreo cremoso com mix de cogumelos selvagens e parmesão",
                price: 16.90,
                category: "principais",
                tags: ["vegetariano"],
                ingredients: ["arroz", "cogumelos", "parmesão", "manteiga"],
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400"
            },
            {
                id: 5,
                name: "Frango Grelhado",
                description: "Peito de frango grelhado com ervas, acompanhado de legumes salteados",
                price: 14.50,
                category: "principais",
                tags: ["sem-gluten", "popular"],
                ingredients: ["frango", "ervas", "legumes"],
                image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400"
            },
            {
                id: 6,
                name: "Pasta Arrabiata",
                description: "Penne al dente com molho de tomate picante e manjericão fresco",
                price: 12.90,
                category: "principais",
                tags: ["vegetariano", "vegano", "picante"],
                ingredients: ["massa", "tomate", "malagueta", "manjericão"],
                image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400"
            },
            {
                id: 7,
                name: "Salmão ao Forno",
                description: "Filé de salmão assado com crosta de ervas e purê de batata",
                price: 22.90,
                category: "principais",
                tags: ["sem-gluten", "popular"],
                ingredients: ["salmão", "ervas", "batata"],
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
            },
            {
                id: 8,
                name: "Curry de Legumes",
                description: "Legumes variados em molho curry cremoso, servido com arroz basmati",
                price: 13.90,
                category: "principais",
                tags: ["vegetariano", "vegano", "picante", "sem-gluten"],
                ingredients: ["legumes", "curry", "leite de coco", "arroz"],
                image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400"
            },
            {
                id: 9,
                name: "Tiramisu",
                description: "Clássico italiano com camadas de mascarpone, café e cacau",
                price: 7.50,
                category: "sobremesas",
                tags: ["vegetariano", "popular"],
                ingredients: ["mascarpone", "café", "cacau", "biscoitos"],
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400"
            },
            {
                id: 10,
                name: "Brownie com Gelado",
                description: "Brownie de chocolate quente com gelado de baunilha",
                price: 8.90,
                category: "sobremesas",
                tags: ["vegetariano"],
                ingredients: ["chocolate", "gelado", "baunilha"],
                image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400"
            },
            {
                id: 11,
                name: "Fruta da Época",
                description: "Seleção de frutas frescas da estação",
                price: 5.90,
                category: "sobremesas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                ingredients: ["frutas"],
                image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400"
            },
            {
                id: 12,
                name: "Sumo Natural de Laranja",
                description: "Sumo de laranja espremido na hora",
                price: 3.90,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                ingredients: ["laranja"],
                image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400"
            },
            {
                id: 13,
                name: "Smoothie Verde",
                description: "Espinafres, maçã, gengibre e hortelã",
                price: 5.50,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                ingredients: ["espinafres", "maçã", "gengibre", "hortelã"],
                image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400"
            },
            {
                id: 14,
                name: "Limonada Fresca",
                description: "Limonada caseira com hortelã",
                price: 3.50,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                ingredients: ["limão", "hortelã"],
                image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400"
            },
            {
                id: 15,
                name: "Café Espresso",
                description: "Café italiano premium",
                price: 1.80,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                ingredients: ["café"],
                image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400"
            }
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

        // ===== GERAR CHECKBOXES DE INGREDIENTES =====
        function generateIngredientCheckboxes() {
            const ingredientSet = new Set();
            menuData.forEach(item => {
                item.ingredients.forEach(ing => ingredientSet.add(ing));
            });

            const sortedIngredients = Array.from(ingredientSet).sort();
            
            ingredientFiltersContainer.innerHTML = sortedIngredients.map(ing => `
                <div class="checkbox-item ingredient">
                    <input type="checkbox" id="ing-${ing}" value="${ing}">
                    <label class="checkbox-label" for="ing-${ing}">${capitalize(ing)}</label>
                </div>
            `).join('');

            // Adicionar event listeners
            ingredientFiltersContainer.querySelectorAll('input').forEach(checkbox => {
                checkbox.addEventListener('change', handleFilterChange);
            });
        }

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

            // Ingredientes
            filters.ingredients = Array.from(
                document.querySelectorAll('#ingredientFilters input:checked')
            ).map(cb => cb.value);
        }

        function applyFilters() {
            const items = document.querySelectorAll('.menu-item');
            let visibleCount = 0;

            items.forEach(item => {
                const category = item.dataset.category;
                const tags = item.dataset.tags.split(',').filter(t => t);
                const ingredients = item.dataset.ingredients.split(',').filter(i => i);

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

                // Filtro de ingredientes (OR - qualquer ingrediente selecionado)
                if (filters.ingredients.length > 0) {
                    const hasAnyIngredient = filters.ingredients.some(ing => ingredients.includes(ing));
                    if (!hasAnyIngredient) {
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
                ...filters.preferences.map(f => ({ type: 'preference', value: f, label: getPreferenceLabel(f) })),
                ...filters.ingredients.map(f => ({ type: 'ingredient', value: f, label: capitalize(f) }))
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
                'entradas': '🥗 Entradas',
                'principais': '🍝 Principais',
                'sobremesas': '🍰 Sobremesas',
                'bebidas': '🍹 Bebidas'
            };
            return labels[value] || value;
        }

        function getPreferenceLabel(value) {
            const labels = {
                'vegetariano': '🥬 Vegetariano',
                'vegano': '🌱 Vegano',
                'sem-gluten': '🌾 Sem Glúten',
                'picante': '🌶️ Picante',
                'popular': '⭐ Popular'
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
                    'vegetariano': '🥬 Vegetariano',
                    'vegano': '🌱 Vegano',
                    'picante': '🌶️ Picante',
                    'sem-gluten': '🌾 Sem Glúten',
                    'popular': '⭐ Popular'
                };
                return `<span class="item-tag tag-${tag}">${tagLabels[tag] || tag}</span>`;
            }).join('');

            return `
                <article class="menu-item" 
                    data-category="${item.category}" 
                    data-tags="${item.tags.join(',')}"
                    data-ingredients="${item.ingredients.join(',')}">
                    <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
                    <div class="item-content">
                        <div class="item-header">
                            <h3 class="item-name">${item.name}</h3>
                            <span class="item-price">€${item.price.toFixed(2)}</span>
                        </div>
                        <p class="item-description">${item.description}</p>
                        <div class="item-tags">${tagsHTML}</div>
                        <div class="item-ingredients">
                            <span>Ingredientes:</span> ${item.ingredients.map(capitalize).join(', ')}
                        </div>
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

        // ===== INICIALIZAÇÃO =====
        generateIngredientCheckboxes();
        renderMenu();