/** Remplacer productData par les vrais informations (garder la structure de données) */
const productData = [
    {
        id: 1,
        title: "TOAD C1 T1",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png"
    },
    {
        id: 2,
        title: "NOM PLUS LONG",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["S", "M"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png"
    },
    {
        id: 3,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["S", "M", "L","XL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png"
    },
    {
        id: 4,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png"
    },
    {
        id: 5,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png"
    },
    {
        id: 6,
        title: "TOAD",
        category: "box",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png"
    },
    {
        id: 7,
        title: "TOAD",
        category: "box",
        collection: "Collection 2",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png"
    },
    {
        id: 8,
        title: "TOAD",
        category: "box",
        collection: "Collection 2",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png"
    },
    {
        id: 9,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["M"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png"
    },
    {
        id: 10,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png"
    },
    {
        id: 11,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png"
    },
    {
        id: 12,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png"
    },
    {
        id: 13,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 3",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png"
    },
    {
        id: 14,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 3",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png"
    }
];



/** Code pour afficher et filtrer les données  */

let productDataFiltered = [];
let filters = {                         /** Filtres par défaut */
    category: "tshirt",
    collection: "Collection 1",
    type: "Type 1"
}

const productContainer = document.querySelector('.products-container');


/** Filtres */
function filter() {
    productDataFiltered = productData;
    if(filters.collection) productDataFiltered = productDataFiltered.filter(p => p.collection === filters.collection);
    if(filters.type) productDataFiltered = productDataFiltered.filter(p => p.type === filters.type);
    if(filters.category) productDataFiltered = productDataFiltered.filter(p => p.category === filters.category);
    updateData();
}

/** Filtre T-shirt */
const bTshirt = document.getElementById('btn-tshirt');

bTshirt.addEventListener('click', () => {
    bTshirt.classList.add('btn-active');
    bBox.classList.remove('btn-active');
    filters.category = "tshirt";
    filter();
});

/** Filtre Box */
const bBox = document.getElementById('btn-box');

bBox.addEventListener('click', () => {
    bBox.classList.add('btn-active');
    bTshirt.classList.remove('btn-active');
    filters.category = "box";
    filter();
});

/** Filtre Collection */
const iCollection = document.getElementById('collectionDropdown');

function filterCollection(collection) {
    iCollection.value = collection;
    filters.collection = collection;
    filter();
}

/** Filtre Type */
const iType = document.getElementById('typeDropdown');

function filterType(type) {
    iType.value = type;
    filters.type = type;
    filter();
}

/** Affichage */
function updateData() {
    let displayData = `<div class="no-product">Aucun produit.</div>`;
    if(productDataFiltered.length > 0) {
        displayData = productDataFiltered.map(function(item){
            let sizes = item.size.map(size => `<li>${size}</li>`).join("");
            return `<div class="product">
                        <i class="bi bi-flower3 flower"></i>
                        <div class="corner"></div>
                        <div class="product-img">
                            <img src="${item.img}" alt=""/>
                        </div>
                        <div class="product-content">
                            <div class="product-content-default">
                                <p class="product-collection">${item.collection}</p>
                                <h3 class="product-title">${item.title}</h3>
                            </div>
                            <div class="product-content-hide">
                                <p class="product-price">${item.price}</p>
                                <div class="product-size">
                                    <ul>${sizes}</ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }); 
        displayData = displayData.join("");
    }
    productContainer.innerHTML = displayData;
}

/** Affichage par défault à l'ouverture du site : T-shirt */
window.addEventListener('DOMContentLoaded', ()=>{
    bTshirt.classList.add('btn-active');
    bBox.classList.remove('btn-active');
    filters = {                         /** Filtres par défaut */
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1"
    }
    filter();
});