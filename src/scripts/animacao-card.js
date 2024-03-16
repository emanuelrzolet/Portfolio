const cards = document.querySelectorAll(".card");
let activeCardIndex = 0;
let intervalId;

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

function startRotation() {
    intervalId = setInterval(rotateCards, 3500);
}

function stopRotation() {
    clearInterval(intervalId);
}

startRotation();

cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        stopRotation();
        setActiveCard(index);
    });

    card.addEventListener("mouseleave", () => {
        startRotation();
        setActiveCard(activeCardIndex);
    });
});
