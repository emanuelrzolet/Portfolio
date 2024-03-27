const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu ul li");

let isMenuAberto = false;

function abrirMenu() {
	menu.classList.add("aberto");
	isMenuAberto = true;
	menuBotao.classList.add("oculto"); // Adiciona a classe oculto ao botão
}

function fecharMenu() {
	menu.classList.remove("aberto");
	isMenuAberto = false;
	menuBotao.classList.remove("oculto"); // Remove a classe oculto do botão
}

menuBotao.addEventListener("click", () => {
	menu.style.width = "35vw";
	menu.style.justifyContent = "center";
	if (isMenuAberto) {
		fecharMenu();
	} else {
		menuItems.forEach((item) => {
			item.style.display = "block";
		});
		abrirMenu();
	}
});

function verificarPosicao() {
	const posicaoAtual = window.scrollY;

	if (posicaoAtual === 0) {
		menu.style.width = "70vw";
		menu.style.justifyContent = "right";

		menuItems.forEach((item) => {
			item.style.display = "inline-block";
		});
		abrirMenu();
	} else {
		fecharMenu();
	}
}

window.addEventListener("scroll", verificarPosicao);

// Adicionar evento para verificar o tamanho da tela ao carregar a página
window.addEventListener("load", () => {
	const larguraTela = window.innerWidth;
	const limiteMobile = 768; // Defina o limite de largura para considerar como dispositivo móvel

	if (larguraTela > limiteMobile) {
		// Verifica se não é um dispositivo móvel
		abrirMenu(); // Abre o menu se não for um dispositivo móvel
	}
});
