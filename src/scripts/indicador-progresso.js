let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let valorOculto = document.querySelector(".valor-oculto");
let valor = valorOculto.textContent;

let progressValue = 0;
let progressEndValue = 80;
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
