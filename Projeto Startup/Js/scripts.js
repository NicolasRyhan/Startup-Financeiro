document.querySelectorAll('.scroll-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        var targetId = this.getAttribute('href').substr(1); // Pega o ID do link
        var targetElement = document.getElementById(targetId); // Encontra o elemento alvo

        if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Ativa a animação suave
        });
        }
    });
});
