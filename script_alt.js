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