 // ===== DADOS DO MENU =====
        const menuData = [
            {
                id: 1,
                name: "Salada Mediterrânea",
                description: "Mix de folhas, tomate cherry, azeitonas, queijo feta e molho balsâmico",
                price: 8.50,
                category: "entradas",
                tags: ["vegetariano", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400"
            },
            {
                id: 2,
                name: "Bruschetta Tradicional",
                description: "Pão torrado com tomate fresco, manjericão e azeite extra virgem",
                price: 6.90,
                category: "entradas",
                tags: ["vegetariano", "vegano"],
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400"
            },
            {
                id: 3,
                name: "Sopa do Dia",
                description: "Sopa caseira preparada diariamente com ingredientes frescos",
                price: 5.50,
                category: "entradas",
                tags: ["vegetariano"],
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
            },
            {
                id: 4,
                name: "Risotto de Cogumelos",
                description: "Arroz arbóreo cremoso com mix de cogumelos selvagens e parmesão",
                price: 16.90,
                category: "principais",
                tags: ["vegetariano"],
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400"
            },
            {
                id: 5,
                name: "Frango Grelhado",
                description: "Peito de frango grelhado com ervas, acompanhado de legumes salteados",
                price: 14.50,
                category: "principais",
                tags: ["sem-gluten", "popular"],
                image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400"
            },
            {
                id: 6,
                name: "Pasta Arrabiata",
                description: "Penne al dente com molho de tomate picante e manjericão fresco",
                price: 12.90,
                category: "principais",
                tags: ["vegetariano", "vegano", "picante"],
                image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400"
            },
            {
                id: 7,
                name: "Salmão ao Forno",
                description: "Filé de salmão assado com crosta de ervas e purê de batata",
                price: 22.90,
                category: "principais",
                tags: ["sem-gluten", "popular"],
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
            },
            {
                id: 8,
                name: "Curry de Legumes",
                description: "Legumes variados em molho curry cremoso, servido com arroz basmati",
                price: 13.90,
                category: "principais",
                tags: ["vegetariano", "vegano", "picante", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400"
            },
            {
                id: 9,
                name: "Tiramisu",
                description: "Clássico italiano com camadas de mascarpone, café e cacau",
                price: 7.50,
                category: "sobremesas",
                tags: ["vegetariano", "popular"],
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400"
            },
            {
                id: 10,
                name: "Brownie com Gelado",
                description: "Brownie de chocolate quente com gelado de baunilha",
                price: 8.90,
                category: "sobremesas",
                tags: ["vegetariano"],
                image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400"
            },
            {
                id: 11,
                name: "Fruta da Época",
                description: "Seleção de frutas frescas da estação",
                price: 5.90,
                category: "sobremesas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400"
            },
            {
                id: 12,
                name: "Sumo Natural de Laranja",
                description: "Sumo de laranja espremido na hora",
                price: 3.90,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400"
            },
            {
                id: 13,
                name: "Smoothie Verde",
                description: "Espinafres, maçã, gengibre e hortelã",
                price: 5.50,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400"
            },
            {
                id: 14,
                name: "Limonada Fresca",
                description: "Limonada caseira com hortelã",
                price: 3.50,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400"
            },
            {
                id: 15,
                name: "Café Espresso",
                description: "Café italiano premium",
                price: 1.80,
                category: "bebidas",
                tags: ["vegetariano", "vegano", "sem-gluten"],
                image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400"
            }
        ];

        // ===== ESTADO DA APLICAÇÃO =====
        let currentFilters = {
            category: 'todos',
            tags: [],
            maxPrice: 50,
            search: ''
        };

        // ===== ELEMENTOS DO DOM =====
        const menuGrid = document.getElementById('menuGrid');
        const categoryButtons = document.querySelectorAll('.filter-btn');
        const tagButtons = document.querySelectorAll('.tag-filter');
        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');
        const searchInput = document.getElementById('searchInput');
        const resultsCount = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResults');

        // ===== FUNÇÕES =====

        // Criar HTML de um item
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
                <article class="menu-item" data-category="${item.category}" data-tags="${item.tags.join(',')}" data-price="${item.price}">
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

        // Renderizar todos os items
        function renderMenu() {
            menuGrid.innerHTML = menuData.map(createMenuItemHTML).join('');
            applyFilters();
        }

        // Aplicar filtros
        function applyFilters() {
            const items = document.querySelectorAll('.menu-item');
            let visibleCount = 0;

            items.forEach(item => {
                const category = item.dataset.category;
                const tags = item.dataset.tags.split(',');
                const price = parseFloat(item.dataset.price);
                const name = item.querySelector('.item-name').textContent.toLowerCase();
                const description = item.querySelector('.item-description').textContent.toLowerCase();

                let isVisible = true;

                // Filtro de categoria
                if (currentFilters.category !== 'todos' && category !== currentFilters.category) {
                    isVisible = false;
                }

                // Filtro de tags (deve ter TODAS as tags selecionadas)
                if (currentFilters.tags.length > 0) {
                    const hasAllTags = currentFilters.tags.every(tag => tags.includes(tag));
                    if (!hasAllTags) isVisible = false;
                }

                // Filtro de preço
                if (price > currentFilters.maxPrice) {
                    isVisible = false;
                }

                // Filtro de pesquisa
                if (currentFilters.search) {
                    const searchTerm = currentFilters.search.toLowerCase();
                    if (!name.includes(searchTerm) && !description.includes(searchTerm)) {
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

            // Atualizar contador
            resultsCount.textContent = visibleCount;

            // Mostrar mensagem se não houver resultados
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // ===== EVENT LISTENERS =====

        // Filtro de categoria
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilters.category = btn.dataset.category;
                applyFilters();
            });
        });

        // Filtro de tags
        tagButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                const tag = btn.dataset.tag;
                
                if (currentFilters.tags.includes(tag)) {
                    currentFilters.tags = currentFilters.tags.filter(t => t !== tag);
                } else {
                    currentFilters.tags.push(tag);
                }
                
                applyFilters();
            });
        });

        // Filtro de preço
        priceRange.addEventListener('input', (e) => {
            currentFilters.maxPrice = parseFloat(e.target.value);
            priceValue.textContent = currentFilters.maxPrice;
            applyFilters();
        });

        // Pesquisa (com debounce)
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentFilters.search = e.target.value;
                applyFilters();
            }, 300);
        });

        // ===== INICIALIZAÇÃO =====
        renderMenu();