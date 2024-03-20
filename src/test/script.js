const element = document.getElementById('element');

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para animar o elemento quando estiver visível
function animateElement() {
  if (isElementInViewport(element)) {
    element.classList.remove('hidden');
    element.style.opacity = 1;
  } else {
    element.classList.add('hidden');
    element.style.opacity = 0;
  }
}

// Chamar a função ao carregar a página e ao rolar a página
window.addEventListener('load', animateElement);
window.addEventListener('scroll', animateElement);
