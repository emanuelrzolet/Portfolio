// Função para animar o progresso circular
function animateCircularProgress(elementoLi) {
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
  }
  
  // Observer para os elementos dentro de #habilidades-container
  const observerHabilidades = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elementoLi = entry.target;
        animateCircularProgress(elementoLi);
        observerHabilidades.unobserve(elementoLi);
  
        // Adicionar rolagem suave para manter a posição da página
        elementoLi.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }, { threshold: 0.5 });
  
  const elementosLi = document.querySelectorAll("#habilidades-container li");
  elementosLi.forEach(elementoLi => {
    observerHabilidades.observe(elementoLi);
  });
  
  // Observer para elementos com classes de animação
  const observerAnimacoes = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerAnimacoes.unobserve(entry.target);
      }
    });
  });
  
  const elements = document.querySelectorAll(".fadeInLeftBig, .fadeInRightBig");
  elements.forEach(el => {
    observerAnimacoes.observe(el);
  });
  