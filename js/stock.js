
    document.addEventListener('DOMContentLoaded', function() {
    const openingButton = document.getElementById('navbarOpeningButton'); // Sélectionnez le bon lien "OPENING"
    const overlay = document.getElementById('overlay');
    const stockModal = document.getElementById('stockModal');

    openingButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    openStockModal();
});
});

    function openStockModal() {
    const stockModal = document.getElementById('stockModal');
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    stockModal.style.display = 'block';
    setTimeout(() => {
    stockModal.classList.add('show');
}, 10); // Ajout d'un léger délai pour permettre à la transition de se déclencher
}

    // Fonction pour fermer la modale "stock" avec animation
    function closeStockModal() {
    const stockModal = document.getElementById('stockModal');
    const overlay = document.getElementById('overlay');
    stockModal.classList.remove('show');
    setTimeout(() => {
    stockModal.style.display = 'none';
    overlay.style.display = 'none';
}, 500); // Correspond à la durée de la transition CSS
}

    // Ajoutez un écouteur d'événements au bouton "OPENING" dans la section principale
    document.getElementById('mainOpeningButton').addEventListener('click', openStockModal);

    // Ajoutez un écouteur d'événements à l'overlay pour fermer la modale lorsqu'on clique dessus
    document.getElementById('overlay').addEventListener('click', closeStockModal);
