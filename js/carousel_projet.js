document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    function updateCarousel() {
        const selectedItem = document.querySelector('.carousel-item.selected');
        const prevItemsWidth = Array.from(carousel.children).slice(0, Array.from(carousel.children).indexOf(selectedItem))
            .reduce((acc, cur) => acc + cur.offsetWidth, 0);

        const offset = carousel.offsetWidth / 2 - prevItemsWidth - selectedItem.offsetWidth / 2;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    items.forEach(item => {
        item.addEventListener('click', function() {
            if (!item.classList.contains('selected')) {
                document.querySelector('.carousel-item.selected').classList.remove('selected');
                item.classList.add('selected');
                updateCarousel();
            }
        });
    });

    updateCarousel(); // Initial centering
});


