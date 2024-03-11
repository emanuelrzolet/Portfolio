const elementosLi = document.querySelectorAll("#habilidades-container li");

elementosLi.forEach(elementoLi => {
  const progressBar = elementoLi.querySelector(".circular-progress");
  const valueContainer = elementoLi.querySelector(".value-container");
  const valorOculto = elementoLi.querySelector("#valor-oculto");
  const valor = valorOculto.textContent;

  let progressValue = 0;
  let progressEndValue = valor;
  let speed = 15;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #F85E00 ${progressValue * 3.6}deg,
      #121212 ${progressValue * 3.6}deg
    )`;

    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
});
