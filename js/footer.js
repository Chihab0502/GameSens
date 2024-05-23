// footer.js
document.getElementById('footerToggle').addEventListener('click', function() {
    var footerContent = document.getElementById('footerContent');
    footerContent.style.display = 'block';
    requestAnimationFrame(() => {
        footerContent.classList.remove('closing');
        footerContent.classList.add('showing');
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    var footerContent = document.getElementById('footerContent');
    footerContent.classList.remove('showing');
    requestAnimationFrame(() => {
        footerContent.classList.add('closing');
        setTimeout(function() {
            footerContent.style.display = 'none';
            footerContent.classList.remove('closing');
        }, 1000); // Assurez-vous que cette durée correspond à l'animation CSS
    });
});
