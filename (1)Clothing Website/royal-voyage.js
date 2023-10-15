const royalVoyagePrcts = [
    {
        id: 92,
        name: 'ROYAL VOYAGE DINNER SET',
        SKU: 'HM-TW-CS23-01',
        price: 'PKR 74,299.00',
        availability: 'In stock',
        img: "Images/rylvygdinerset.webp",
        colour: 'Light Blue & Pink',
        dimensions: 'L: 33 X W: 11 cm',
        Material: 'Ceramic',
    },
    {
        id: 93,
        name: 'ROYAL VOYAGE TEA CUP',
        SKU: 'HM-TW-TC23-02',
        price: 'PKR 2,259.00',
        availability: 'In stock',
        img: "Images/rylvygteacup.webp",
        colour: 'Light Blue',
        dimensions: 'Dia. 8.6, Cap. 0.15Ltr',
        Material: 'Ceramic',
    },
    {
        id: 94,
        name: 'ROYAL VOYAGE SERVING BOWL',
        SKU: 'HM-TW-SBR23-01',
        price: 'PKR 3,499.00',
        availability: 'In stock',
        img: "Images/rylvygsrvngbowl.webp",
        colour: 'Pink',
        dimensions: '25cm',
        Material: 'Ceramic',
    },
    {
        id: 95,
        name: 'ROYAL VOYAGE SERVING BOWL',
        SKU: 'HM-TW-SBS23-01',
        price: 'PKR 4,419.00',
        availability: 'In stock',
        img: "Images/rylvygsrvngbowl2.webp",
        colour: 'Light Blue',
        dimensions: '22cm',
        Material: 'Ceramic',
    },
    {
        id: 96,
        name: 'ROYAL VOYAGE SALAD BOWL',
        SKU: 'HM-TW-SSP23-01',
        price: 'PKR 3,189.00',
        availability: 'In stock',
        img: "Images/rylvygsldbowl.webp",
        colour: 'Pink',
        dimensions: '31cm',
        Material: 'Ceramic',
    },
    {
        id: 97,
        name: 'ROYAL VOYAGE PLATTER',
        SKU: 'HM-TW-OP23-01',
        price: 'PKR 5,549.00',
        availability: 'In stock',
        img: "Images/rylvygsrvngpltr.webp",
        colour: 'Light Blue',
        dimensions: '12"',
        Material: 'Ceramic',
    },
    {
        id: 98,
        name: 'ROYAL VOYAGE QUARTER PLATE',
        SKU: 'HM-TW-QP23-01',
        price: 'PKR 2,259.00',
        availability: 'In stock',
        img: "Images/rylvygqrtrplt.webp",
        colour: 'Light Blue',
        dimensions: '20cm',
        Material: 'Ceramic',
    },
    {
        id: 99,
        name: 'ROYAL VOYAGE DINNER PLATE',
        SKU: 'HM-TW-DP23-01',
        price: 'PKR 2,779.00',
        availability: 'In stock',
        img: "Images/rylvygdnrplt.webp",
        colour: 'Light Blue',
        dimensions: '25cm',
        Material: 'Ceramic',
    },
    {
        id: 100,
        name: 'ROYAL VOYAGE CHARGER PLATE',
        SKU: 'HM-TW-CP23-01',
        price: 'PKR 3,699.00',
        availability: 'Out of stock',
        img: "Images/rylvygchrgrplt.webp",
        colour: 'Light Blue',
        dimensions: '31cm',
        Material: 'Ceramic',
    }
]

var royalVoyageProducts = document.querySelector('.royal-voyage-products');

for (var i = 0; i < royalVoyagePrcts.length; i++) {
    var royalVoyagePrdcts = royalVoyagePrcts[i];

    royalVoyageProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${royalVoyagePrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${royalVoyagePrdcts.name}
                </a>
            </div>
            <div>
            <button class="royalVoyageProducts-btn" href='rylvygprdcts.html?id=${royalVoyagePrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.royalVoyageProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `rylvygprdcts.html?id=${productID}`;
        });
    });
}