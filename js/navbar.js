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


// Sélection des éléments
const cartToggle = document.getElementById('cartToggle');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');

// Événement de clic pour afficher le panier
cartToggle.addEventListener('click', () => {
    if (cartOverlay.style.display === 'none') {
        cartOverlay.style.display = 'block';
    }else{
        cartOverlay.style.display = 'none';
    }

});

// Événement de clic pour fermer le panier
closeCart.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
});

document.querySelector('.minus').addEventListener('click', function() {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});

document.querySelector('.plus').addEventListener('click', function() {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    quantity++;
    quantityElement.textContent = quantity;
});

