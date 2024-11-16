var cartToggle = document.getElementById('cartToggle');
var cartContent = document.getElementById('cartContent');
var backdrop = document.getElementById('backdrop');

// Affiche le panier et le fond flouté lorsque la souris entre sur le bouton
cartToggle.addEventListener('mouseenter', function() {
    cartContent.style.display = 'flex'; // Assure-toi que le display est en flex pour respecter tes styles
    cartContent.style.right = '0'; // Déplace le panier pour qu'il soit visible
    backdrop.style.display = 'block'; // Affiche le fond flouté
});

// Masque le panier et le fond flouté lorsque la souris sort du panier
cartContent.addEventListener('mouseleave', function() {
    cartContent.style.right = '-650px'; // Remet le panier à l'extérieur de la vue
    backdrop.style.display = 'none'; // Cache le fond flouté
});

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
