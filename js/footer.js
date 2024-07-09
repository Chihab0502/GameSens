document.getElementById('footerToggle').addEventListener('click', function() {
    var footerContent = document.getElementById('footerContent');
    footerContent.style.display = 'block';
    requestAnimationFrame(() => {
        footerContent.classList.remove('closing');
        footerContent.classList.add('showing');
    });
});

// Ajouter un écouteur pour détecter les clics sur les boutons de fermeture
document.querySelector('.close-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut
    closeFooter();
});

function closeFooter() {
    var footerContent = document.getElementById('footerContent');
    footerContent.classList.remove('showing');
    footerContent.classList.add('closing');

    // Attendre la fin de l'animation avant de masquer l'élément
    footerContent.addEventListener('transitionend', function handleTransitionEnd(event) {
        if (event.propertyName === 'opacity' && footerContent.classList.contains('closing')) {
            footerContent.style.display = 'none';
            footerContent.classList.remove('closing');
            footerContent.removeEventListener('transitionend', handleTransitionEnd);
        }
    });
}
