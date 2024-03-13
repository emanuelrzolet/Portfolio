const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

let isMenuAberto = false;

function abrirMenu() {
	menu.classList.add("aberto");
	isMenuAberto = true;
}

function fecharMenu() {
	menu.classList.remove("aberto");
	isMenuAberto = false;
}

menuBotao.addEventListener("click", () => {
	if (isMenuAberto) {
		fecharMenu();
	} else {
		abrirMenu();
	}
});

window.addEventListener("scroll", () => {
	if (isMenuAberto) {
		fecharMenu();
	}
});
