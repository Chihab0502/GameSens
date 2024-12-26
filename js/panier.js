document.addEventListener('DOMContentLoaded', () => {
    // Gestion du code promo
    const promoCodeButton = document.querySelector('.toggle-promo-code');
    const promoCodeInput = document.querySelector('.promo-code-input');
    const applyButton = document.querySelector('.btnCommander3');

    if (promoCodeButton) {
        promoCodeButton.addEventListener('click', function() {
            if (promoCodeInput.style.display === 'none' || promoCodeInput.style.display === '') {
                promoCodeInput.style.display = 'block';
                applyButton.style.display = 'block';
                promoCodeButton.textContent = 'V';
                promoCodeButton.style.transform = 'rotate(180deg)';
            } else {
                promoCodeInput.style.display = 'none';
                applyButton.style.display = 'none';
                promoCodeButton.textContent = 'V';
                promoCodeButton.style.transform = 'none';
            }
        });
    }

    // Gestion de la quantité et du prix
    const plusButtons = document.querySelectorAll('.quantity-button.plus');
    const minusButtons = document.querySelectorAll('.quantity-button.minus');

    plusButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            const itemContainer = button.closest('.item-container');
            const priceElement = itemContainer.querySelector('.item-price');
            let currentQuantity = parseInt(quantityElement.textContent);

            if (isNaN(currentQuantity)) {
                currentQuantity = 0;
            }

            currentQuantity += 1;
            quantityElement.textContent = currentQuantity;

            // Mettre à jour le prix
            updateItemPrice(priceElement, currentQuantity);
        });
    });

    minusButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            const itemContainer = button.closest('.item-container');
            const priceElement = itemContainer.querySelector('.item-price');
            let currentQuantity = parseInt(quantityElement.textContent);

            if (isNaN(currentQuantity)) {
                currentQuantity = 1; // Par défaut s'il n'y a pas de valeur
            }

            if (currentQuantity > 1) {
                currentQuantity -= 1;
                quantityElement.textContent = currentQuantity;
            }

            // Mettre à jour le prix
            updateItemPrice(priceElement, currentQuantity);
        });
    });

    function updateItemPrice(priceElement, quantity) {
        const basePrice = parseFloat(priceElement.getAttribute('data-item-price'));
        if (!isNaN(basePrice)) {
            const totalPrice = basePrice * quantity;
            priceElement.textContent = totalPrice.toFixed(2).replace('.', ',') + '€';
        }
    }
});


