/** Remplacer productData par les vrais informations (garder la structure de données) */
const productData = [
    {
        id: 1,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.3,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc. Description test de plusieurs lignes. Description du produits, etc. Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0080.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0140.png",
        ]
    },
    {
        id: 2,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.2,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        ]
    },
    {
        id: 3,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.2,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        ]
    },
    {
        id: 4,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.2,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        ]
    },
    {
        id: 5,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.2,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        ]
    },
    {
        id: 6,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.2,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        ]
    },
    {
        id: 7,
        title: "Golden Crown",
        collection: "Flower",
        size: ["L","XL"],
        price: "35.99 €",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare",
        lootChances: 0.2,
        note: 4.2,
        nbNotes: 36,
        description: "Description test de plusieurs lignes. Description du produits, etc.",
        imgList: [ /** Remplir au besoin */
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
            "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        ]
    }
];

const productContainer = document.querySelector('#products-to-reveal');
const productDescription = document.querySelector('#product-description');
const allSizes = ['S', 'M', 'L', 'XL', 'XXL'];

/** Affichage */
function updateData() {
    let displayData = `<div class="no-product">Aucun produit.</div>`;
    let idx = 0;
    if(productData.length > 0) {
        displayData = productData.map(function(item){
            let reveal = idx == 0 ? "product active" : "product";
            idx++;
            return `<div class="${reveal}">
                        <div class="reveal">RÉVÉLER</div>
                        <div class="product-content">
                            <h3 class="product-title">${item.title}</h3>
                            <div class="product-img">
                                <img src="${item.img}" alt=""/>
                            </div>
                            <button class="product-show" onclick='updateDescription(${JSON.stringify(item)})'>DÉCOUVRIR</button>
                        </div>
                    </div>`;
        }); 
        displayData = displayData.join("");
    }
    productContainer.innerHTML = displayData;

    /** Rend actif le produit surlequel on clique */
    const products = productContainer.querySelectorAll(".product");
    products.forEach(function(product, idx) {
        product.addEventListener("click", function() {
            products.forEach(p => p.classList.remove("active"));
            this.classList.add("active");
            centerProduct(product, idx);
        });
    });
}

function centerProduct(productElement, idx) {
    if (productElement) {
        const container = document.getElementById('products-to-reveal');
        
        // Calculez la position pour centrer le produit
        const containerWidth = container.offsetWidth;
        const productWidth = productElement.offsetWidth;
        const productLeft = productElement.offsetLeft;
        const containerScrollLeft = container.scrollLeft;

        // Calculer le décalage nécessaire
        const offset = (containerWidth / 2) - (productWidth / 2) - productLeft + containerScrollLeft;
        
        // Appliquer le décalage au conteneur du carrousel
        container.scrollBy({
            left: -offset,
            behavior: 'smooth'
        });
    }
}

/** Ouvre une modal après avoir cliqué sur Découvrir */
function updateDescription(item) {
    const parsedItem = JSON.parse(JSON.stringify(item));
    productDescription.classList.add("active");

    /** Bootstrap images */
    let idx = 0;
    let images = parsedItem.imgList.map(function(img) {
        let bootstrapImgClass = idx == 0 ? "carousel-item active" : "carousel-item";
        let bootstrapImg = `<div class="${bootstrapImgClass}">
                                <img src="${img}" class="d-block" alt="Image du produit">
                            </div>`;
        idx++;
        return bootstrapImg;
    });
    images = images.join("");

    /** Notation stars sur 5 : arrondi au plus proche */
    let stars = ``
    for(let i = 0; i < Math.round(parsedItem.note); i++) stars += `<i class="bi bi-star-fill"></i> `;
    for(let i = 0; i < 5 - Math.round(parsedItem.note); i++) stars += `<i class="bi bi-star"></i> `;

    /** Sizes */
    let sizes = allSizes.map(size => {
        let result = parsedItem.size.includes(size) ?
            `<li class="size-item size-available">${size}</li>` :
            `<li class="size-item size-disabled">
                <img src="img/svg/hachures.png">
                ${size}
            </li>`
        return result;
    }).join("");

    /** Composant principal */
    productDescription.innerHTML = 
    `<div class="description-modal">
        <div class="description-content">
            <i class="bi bi-x close" onclick="hideModal(true)"></i>
            <!-- Bootstrap --> 
            <div id="carouselImages" class="carousel slide">
                <div class="carousel-inner">
                    ${images}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselImages" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselImages" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="main">
                <h3>${parsedItem.title}</h3>
                <div class="description-collection">${parsedItem.collection}</div>
                <div class="description-description">${parsedItem.description}</div>
                <div class="description-icons">
                    <div class="icon"><i style="font-size:40px" class="bi bi-flower2"></i><p> 100% coton<br> bio</p></div>
                    <div class="icon"><i style="font-size:40px" class="bi bi-shop-window"></i><p> Impression<br> numérique</p></div>
                    <div class="icon"><i style="font-size:40px" class="bi bi-person-fill"></i><p> Coupe<br> unique</p></div>
                </div>
                <div class="star-rating" data-rating="${parsedItem.note}">
                    ${stars}
                    ${parsedItem.note}/5 (${parsedItem.nbNotes})
                </div>
                <div class="description-price">${parsedItem.price}</div>
                <div>
                    <div class="description-size">
                        Choisir taille : <ul>${sizes}</ul>
                    </div>
                </div>
                <button class="btn-panier lootbox">AJOUTER LA LOOTBOX AU PANIER</button>
            </div>

        </div>
        <div class="description-footer">
            <div class="rarety">${parsedItem.rarety}</div>
            <div style="display:flex; align-items:center">
                <div style="padding-right:1em">CHANCE DE LOOT</div>
                <div style="font-size:1.5em">${parsedItem.lootChances * 100}%</div>
            </div>
        </div>
    </div>`;


    // Gestionnaires d'événements pour les tailles
    document.querySelectorAll('.size-available').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.size-item').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });

    hideModal(false);
}

function hideModal(hide) {
    productDescription.style.display = hide ? 'none' : 'block';
}

/** Affichage par défault à l'ouverture de la page */
window.addEventListener('DOMContentLoaded', ()=>{
    updateData();
});
