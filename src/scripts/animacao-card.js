// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe "visible" e ativar a animação quando o elemento está visível
function handleVisibility(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicionar a classe "visible" ao elemento visível
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);

            // Ativar a animação (remover a propriedade animation-play-state: paused)
            entry.target.style.animationPlayState = "running";
        }
    });
}

// Criar um Intersection Observer para elementos com classe de animação
var cardObserver = new IntersectionObserver(handleVisibility);

// Selecionar todos os elementos com as classes de animação
var elements = document.querySelectorAll(".fadeInLeftBig, .fadeInRightBig");

// Observar cada elemento com classe de animação
elements.forEach(el => {
    // Pausar a animação inicialmente (para que ela não seja ativada antes de entrar na viewport)
    el.style.animationPlayState = "paused";

    cardObserver.observe(el);
});
