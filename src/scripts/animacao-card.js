
  // Função para adicionar a classe "visible" quando o elemento está visível
  function handleVisibility(entries, observer) {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		// Adicionar a classe "visible" ao elemento visível
		entry.target.classList.add("visible");
		observer.unobserve(entry.target);
	  }
	});
  }
  
  // Criar um Intersection Observer para elementos com classe de animação
  var cardObserver = new IntersectionObserver(handleVisibility);
  
  // Selecionar todos os elementos com as classes de animação
  var elements = document.querySelectorAll(".fadeInLeftBig, .fadeInRightBig");
  
  // Observar cada elemento com classe de animação
  elements.forEach(el => {
	cardObserver.observe(el);
  });
  