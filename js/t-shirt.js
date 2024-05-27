const baseImage = "./img/T-shirts%20(3D)/ZELDA/ZELDA_DisplaceLoop%20(SANS%20ETQ)0001.png";
const images = [
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0020.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0040.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0060.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0080.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0100.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0120.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0140.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0147.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0148.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0149.png",
    "img/T-shirts (3D)/ZELDA/ZELDA_DisplaceLoop (SANS ETQ)0150.png"
];
let currentImageIndex = 0;
let intervalId = null;

document.getElementById('shirtContainer').addEventListener('mouseenter', function() {
    intervalId = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('shirtImage').src = images[currentImageIndex];
    }, 200); // Temps en millisecondes entre les changements d'image
});

shirtContainer.addEventListener('mouseleave', function() {
    clearInterval(intervalId);
    shirtImage.src = baseImage; // Revenir à l'image de base
});
