var cartToggle = document.getElementById('cartToggle');
var cartContent = document.getElementById('cartContent');
var backdrop = document.getElementById('backdrop'); // Récupérer l'élément de fond flouté

// Afficher le panier et le fond flouté lorsque la souris entre sur le bouton
cartToggle.addEventListener('mouseenter', function() {
    cartContent.style.display = 'block';
    backdrop.style.display = 'block'; // Affiche le fond flouté
});

// Masquer le panier et le fond flouté lorsque la souris sort du panier
cartContent.addEventListener('mouseleave', function() {
    cartContent.style.display = 'none';
    backdrop.style.display = 'none'; // Cache le fond flouté
});
