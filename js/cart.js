document.getElementById('cartToggle').addEventListener('click', function() {
    var cartContent = document.getElementById('cartContent');
    cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
});
