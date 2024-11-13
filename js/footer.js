

// Ajouter un écouteur pour détecter les clics sur les boutons de fermeture
document.querySelector('.close-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut
    closeFooter();
});

// Ajouter un écouteur pour détecter les clics en dehors du footer (sur le fond)
document.getElementById('footerBackdrop').addEventListener('click', function(event) {
    closeFooter();
});


document.getElementById('footerToggle').addEventListener('click', function() {
    var footerContent = document.getElementById('footerContent');
    var footerBackdrop = document.getElementById('footerBackdrop');

    if (footerContent.classList.contains('showing')) {
        closeFooter();
    } else {
        footerContent.style.display = 'block';
        footerBackdrop.style.display = 'block';
        requestAnimationFrame(() => {
            footerContent.classList.remove('closing');
            footerContent.classList.add('showing');
        });
    }
});

// Fonction pour fermer le footer
function closeFooter() {
    var footerContent = document.getElementById('footerContent');
    var footerBackdrop = document.getElementById('footerBackdrop');
    footerContent.classList.remove('showing');
    footerContent.classList.add('closing');

    footerContent.addEventListener('transitionend', function handleTransitionEnd(event) {
        if (event.propertyName === 'opacity' && footerContent.classList.contains('closing')) {
            footerContent.style.display = 'none';
            footerContent.classList.remove('closing');
            footerBackdrop.style.display = 'none';
            footerContent.removeEventListener('transitionend', handleTransitionEnd);
        }
    });
}

