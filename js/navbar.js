// Sélection des éléments
const hamburgerButton = document.querySelector('.navbar-burger');
const menuOverlay = document.getElementById('menuOverlay');

// Événement pour afficher/masquer le menu
hamburgerButton.addEventListener('click', () => {
    if (menuOverlay.style.display === 'none') {
        menuOverlay.style.display = 'block';
        setTimeout(() => menuOverlay.classList.add('show'), 10); // Transition visible
    } else {
        menuOverlay.classList.remove('show');
        setTimeout(() => menuOverlay.style.display = 'none', 300); // Attendre la fin de la transition
    }
});
