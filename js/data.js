/** Remplacer productData par les vrais informations (garder la structure de données) */
const productData = [
    {
        id: 1,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare"
    },
    {
        id: 2,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["S", "M"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "commun"
    },
    {
        id: 3,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["S", "M", "L","XL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare"
    },
    {
        id: 4,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare"
    },
    {
        id: 5,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png",
        rarety: "rare"
    },
    {
        id: 6,
        title: "RULE OF TIME",
        category: "box",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png",
        available: true
    },
    {
        id: 7,
        title: "RULE OF TIME",
        category: "box",
        collection: "Collection 2",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png",
        available: true
    },
    {
        id: 8,
        title: "RULE OF TIME",
        category: "box",
        collection: "Collection 2",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png",
        available: true
    },
    {
        id: 9,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["M"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png",
        rarety: "rare"
    },
    {
        id: 10,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare"
    },
    {
        id: 11,
        title: "RULE OF TIME",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0001.png",
        rarety: "rare"
    },
    {
        id: 12,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 1",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png",
        rarety: "rare"
    },
    {
        id: 13,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 3",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png",
        rarety: "rare"
    },
    {
        id: 14,
        title: "TOAD",
        category: "tshirt",
        collection: "Collection 3",
        type: "Type 2",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/T-shirts (3D)/TOAD/TOAD_DisplaceLoop (SANS ETQ)0040.png",
        rarety: "rare"
    },
    {
        id: 15,
        title: "TOAD",
        category: "box",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png",
        available: false
    },
    {
        id: 16,
        title: "TOAD",
        category: "box",
        collection: "Collection 1",
        type: "Type 1",
        size: ["L","XL","XXL"],
        price: "50€",
        img: "./img/Box/Box_sans habillage/BOX_Screen Rotate_PP_00000.png",
        available: false
    },
];



/** Code pour afficher et filtrer les données  */

let productDataFiltered = [];
let filters = {                         /** Filtres par défaut */
    category: "tshirt",
    collection: ["Collection 1"],
    type: ["Type 1"]
}

const productContainer = document.querySelector('.products-container');


/** Filtres */
function filter() {
    productDataFiltered = productData;
    productDataFiltered = productDataFiltered.filter(p => filters.collection.includes(p.collection));
    productDataFiltered = productDataFiltered.filter(p => filters.type.includes(p.type));
    if(filters.category) productDataFiltered = productDataFiltered.filter(p => p.category === filters.category);
    updateData();
}


/** Filtres collections & types */
document.addEventListener('DOMContentLoaded', () => {
    const checkboxesCollection = document.querySelectorAll('input[name="collection"]');
    checkboxesCollection.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filters.collection = getChecked('collection'); 
            filter();
        });
    });

    const checkboxesType = document.querySelectorAll('input[name="type"]');
    checkboxesType.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filters.type = getChecked('type'); 
            filter();
        });
    });
});

function getChecked(type) {
    let checked = document.querySelectorAll('input[name="' + type + '"]:checked');
    let selectedLabels = [];
    checked.forEach(checkbox => {
        const label = document.querySelector(`label[for="${checkbox.id}"]`).innerText;
        selectedLabels.push(label);
    });
    return selectedLabels;
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

/** Affichage */
function updateData() {
    productContainer.innerHTML = ``;

    if(productDataFiltered.length > 0) {
       
        productDataFiltered.forEach(item => {

            /** Parent */
            let product = document.createElement('div');
            product.classList.add('product');

            /** Image */
            let productImg = document.createElement('div');
            productImg.classList.add('product-img');
            let img = document.createElement('img');
            img.setAttribute('src', item.img);
            productImg.appendChild(img);

            /** Box indisponible (flou) */
            if(item.category == 'box' && !item.available) {
                product.appendChild(productImg);
                product.classList.add('blur');
                let soon = document.createElement('p');
                soon.textContent = 'PROCHAINEMENT...';
                product.appendChild(soon);
            } 

            /** Tous les autres cas */
            else {
                /** Rarety */
                if(item.category == 'tshirt' && item.rarety) {
                    let rarety = document.createElement('div');
                    rarety.classList.add('rarety');
                    rarety.textContent = item.rarety;
                    product.appendChild(rarety)
                }

                /** Flower */
                let flower = document.createElement('img');
                flower.setAttribute('src', 'img/svg/flower 1.svg');
                flower.classList.add('flower');
                product.appendChild(flower);

                /** Corner */
                let corner = document.createElement('img');
                corner.setAttribute('src', 'img/svg/Coin.svg');
                corner.classList.add('corner');
                product.appendChild(corner);

                /** Image */
                product.appendChild(productImg);

                /** Content */
                let productContent = document.createElement('div');
                productContent.classList.add('product-content');
                product.appendChild(productContent);

                let productContentDefault = document.createElement('div');
                productContentDefault.classList.add('product-content-default');
                productContent.appendChild(productContentDefault);
                /** Collection */
                let productCollection = document.createElement('p');
                productCollection.classList.add('product-collection');
                productCollection.textContent = item.collection;
                productContentDefault.appendChild(productCollection);
                /** Title */
                let productTitle = document.createElement('h3');
                productTitle.classList.add('product-title');
                productTitle.textContent = item.title;
                productContentDefault.appendChild(productTitle);

                let productContentHide = document.createElement('div');
                productContentHide.classList.add('product-content-hide');
                productContent.appendChild(productContentHide);
                /** Sizes */
                let productSize = document.createElement('div');
                productSize.classList.add('product-size');
                let productSizeUl = document.createElement('ul');
                item.size.forEach(size => {
                    let productSizeLi = document.createElement('li');
                    productSizeLi.innerHTML = size;
                    productSizeUl.appendChild(productSizeLi);
                });
                productSize.appendChild(productSizeUl);
                productContentHide.appendChild(productSize);
                /** Price */
                let productPrice = document.createElement('p');
                productPrice.classList.add('product-price');
                productPrice.textContent = item.price;
                productContentHide.appendChild(productPrice);

                /** XP */
                let xp = document.createElement('img');
                xp.setAttribute('src', 'img/svg/xp.svg');
                xp.classList.add('xp');
                product.appendChild(xp);
            }

            productContainer.appendChild(product);
        });
    } 
    else {
        let noProduct = document.createElement('div');
        noProduct.classList.add('no-product');
        productContainer.appendChild(noProduct);
    }
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