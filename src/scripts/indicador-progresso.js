// A animação inicia quando o elemento é visualizado, o Valor final vem de um elemento que ta presente no HTML, mas escondi no CSS.

const elementosLi = document.querySelectorAll("#habilidades-container li");

const options = {
  root: null, // usa o viewport como root
  threshold: 0.5 // define o threshold para 50%
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const elementoLi = entry.target;
      const barraProgresso = elementoLi.querySelector(".circular-progress");
      const valueContainer = elementoLi.querySelector(".value-container");
      const valorOculto = elementoLi.querySelector("#valor-oculto");
      const valor = valorOculto.textContent;

      let valorProgresso = 0;
      let progressEndValue = valor;
      let speed = 15;

      let progresso = setInterval(() => {
        valorProgresso++;
        valueContainer.textContent = `${valorProgresso}%`;
        barraProgresso.style.background = `conic-gradient(
          #F85E00 ${valorProgresso * 3.6}deg,
          #121212 ${valorProgresso * 3.6}deg
        )`;

        if (valorProgresso == progressEndValue) {
          clearInterval(progresso);
        }
      }, speed);

      observer.unobserve(elementoLi); // para o observador após iniciar a animação
    }
  });
}, options);

elementosLi.forEach(elementoLi => {
  observer.observe(elementoLi);
});
