const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

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
	if (isMenuAberto) {
		fecharMenu();
	} else {
		abrirMenu();
	}
});

function verificarPosicao() {
	const posicaoAtual = window.scrollY;

	if (posicaoAtual === 0) {
		abrirMenu();
	} else {
		fecharMenu();
	}
}

window.addEventListener("scroll", verificarPosicao);
