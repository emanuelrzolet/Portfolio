function handleVisibility(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const elemento = entry.target; // Verificar se o elemento possui a classe "progresso-circular"
			if (elemento.classList.contains("progresso-circular")) {
				// Capturar os elementos necessários para a animação
				const barraProgresso = elemento.querySelector(".circular-progress");
				const valueContainer = elemento.querySelector(".value-container");
				const valorOculto = elemento.querySelector("#valor-oculto");
				const valor = valorOculto.textContent; // Variáveis para a animação

				let valorProgresso = 0;
				let progressEndValue = valor;
				let speed = 15; // Função para atualizar o progresso

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
				}, speed); // Parar de observar o elemento após iniciar a animação

				observer.unobserve(elemento);
			} else {
				// Adicionar a classe "visible" ao elemento
				elemento.classList.add("visible");
			}
			observer.unobserve(entry.target);
		}
	});
}
