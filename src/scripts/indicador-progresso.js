// Selecionar todos os elementos li dentro de #habilidades-container
const elementosLi = document.querySelectorAll("#habilidades-container li");

// Opções para o Intersection Observer
const options = {
  root: null, // Usa o viewport como root
  threshold: 0.5 // Define o threshold para 50%
};

// Criar um Intersection Observer para a animação de progresso circular
const observerProgresso = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Capturar os elementos necessários para a animação
      const elementoLi = entry.target;
      const barraProgresso = elementoLi.querySelector(".circular-progress");
      const valueContainer = elementoLi.querySelector(".value-container");
      const valorOculto = elementoLi.querySelector("#valor-oculto");
      const valor = valorOculto.textContent;

      // Variáveis para a animação
      let valorProgresso = 0;
      let progressEndValue = valor;
      let speed = 15;

      // Função para atualizar o progresso
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

      // Parar de observar o elemento após iniciar a animação
      observerProgresso.unobserve(elementoLi);
    }
  });
}, options);

// Observar cada elemento li dentro de #habilidades-container
elementosLi.forEach(elementoLi => {
  observerProgresso.observe(elementoLi);
});
