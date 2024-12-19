document.addEventListener('DOMContentLoaded', function() {
    var promoCodeButton = document.querySelector('.toggle-promo-code');
    var promoCodeInput = document.querySelector('.promo-code-input');
    var applyButton = document.querySelector('.btnCommander3');

    promoCodeButton.addEventListener('click', function() {
        if (promoCodeInput.style.display === 'none') {
            promoCodeInput.style.display = 'block';
            applyButton.style.display = 'block'; // Make the "APPLIQUER" button visible
            promoCodeButton.textContent = 'V'; // Change V to an upside-down V
            promoCodeButton.style.transform = 'rotate(180deg)'; // Rotate the button
        } else {
            promoCodeInput.style.display = 'none';
            applyButton.style.display = 'none'; // Hide the "APPLIQUER" button
            promoCodeButton.textContent = 'V';
            promoCodeButton.style.transform = 'none'; // Reset the rotation
        }
    });
});
