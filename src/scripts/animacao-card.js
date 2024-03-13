const cards = document.querySelectorAll(".card");

let activeCardIndex = 0;

function setActiveCard(index) {
	cards.forEach((card, idx) => {
		if (idx === index) {
			card.classList.add("active");
		} else {
			card.classList.remove("active");
		}
	});
}

function rotateCards() {
	activeCardIndex = (activeCardIndex + 1) % cards.length;
	setActiveCard(activeCardIndex);
}

setInterval(rotateCards, 3000); // Alternar entre os cards a cada 3 segundos

cards.forEach((card, index) => {
	card.addEventListener("mouseenter", () => {
		setActiveCard(index);
	});

	card.addEventListener("mouseleave", () => {
		setActiveCard(activeCardIndex);
	});
});
