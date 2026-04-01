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

const preguntas = document.querySelectorAll(".faq-question");

  preguntas.forEach(p => {
    p.addEventListener("click", () => {
      const item = p.parentElement;

      item.classList.toggle("active");

      const respuesta = item.querySelector(".faq-answer");

      if (item.classList.contains("active")) {
        respuesta.style.maxHeight = respuesta.scrollHeight + "px";
      } else {
        respuesta.style.maxHeight = 0;
      }
    });
  });