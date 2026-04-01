const elementos = document.querySelectorAll('.animar');

function mostrarElementos() {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Ejecutar al cargar
mostrarElementos();

// Ejecutar al hacer scroll
window.addEventListener('scroll', mostrarElementos);