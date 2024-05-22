// footer.js
document.getElementById('footerToggle').addEventListener('click', function() {
    var footerContent = document.getElementById('footerContent');
    if (footerContent.style.display === 'block' && !footerContent.classList.contains('closing')) {
        footerContent.style.display = 'none'; // Masque le footer seulement si l'animation de fermeture n'est pas en cours
    } else {
        footerContent.style.display = 'block'; // Affiche le footer
    }
});

document.querySelector('.close-btn').addEventListener('click', function() {
    var footerContent = document.getElementById('footerContent');
    footerContent.classList.add('closing');
    setTimeout(function() {
        footerContent.style.display = 'none';
        footerContent.classList.remove('closing'); // Nettoyage de la classe après la fermeture
    }, 300); // La durée doit correspondre à celle de l'animation CSS
});
