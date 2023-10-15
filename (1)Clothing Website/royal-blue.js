const royalBluePrcts = [
    {
        id: 81,
        name: 'ROYAL BLUE DINNER SET',
        SKU: 'HM-TW-CS23-02',
        price: 'PKR 65,060.00',
        availability: 'In stock',
        img: "Images/rylbludinerset.webp",
        colour: 'Blue & Yellow',
        dimensions: 'L: 33 X W: 11 cm',
        Material: 'Ceramic',
    },
    {
        id: 82,
        name: 'ROYAL BLUE CHARGER PLATE',
        SKU: 'HM-TW-CP23-02',
        price: 'PKR 3,599.00',
        availability: 'In stock',
        img: "Images/rylbluchrgrplte.webp",
        colour: 'Blue',
        dimensions: '31cm',
        Material: 'Ceramic',
    },
    {
        id: 83,
        name: 'ROYAL BLUE DINNER PLATE',
        SKU: 'HM-TW-DP23-02',
        price: 'PKR 2,159.00',
        availability: 'In stock',
        img: "Images/rylbludinrplte.webp",
        colour: 'White',
        dimensions: '27cm',
        Material: 'Ceramic',
    },
    {
        id: 84,
        name: 'ROYAL BLUE CEREAL BOWL',
        SKU: 'HM-TW-CB23-02',
        price: 'PKR 2,369.00',
        availability: 'In stock',
        img: "Images/rylblucerealbowl.webp",
        colour: 'White',
        dimensions: '17cm',
        Material: 'Ceramic',
    },
    {
        id: 85,
        name: 'ROYAL BLUE SALAD BOWL',
        SKU: 'HM-TW-SSP23-02',
        price: 'PKR 1,749.00',
        availability: 'Out of stock',
        img: "Images/rylblusaladbowl.webp",
        colour: 'Dark Yellow',
        dimensions: '31cm',
        Material: 'Ceramic',
    },
    {
        id: 86,
        name: 'ROYAL BLUE CONDIMENT PLATTER',
        SKU: 'HM-TW-SP23-02',
        price: 'PKR 3,089.00',
        availability: 'In stock',
        img: "Images/rylblucndmntpltr.webp",
        colour: 'Blue',
        dimensions: 'L: 33 X W: 11cm',
        Material: 'Ceramic',
    },
    {
        id: 87,
        name: 'ROYAL BLUE QUARTER PLATE',
        SKU: 'HM-TW-SB23-01',
        price: 'PKR 1,339.00',
        availability: 'In stock',
        img: "Images/rylbluqrtrplte.webp",
        colour: 'Blue',
        dimensions: '31cm',
        Material: 'Ceramic',
    },
    {
        id: 88,
        name: 'ROYAL BLUE QUARTER PLATE',
        SKU: 'HM-TW-SB23-02',
        price: 'PKR 1,339.00',
        availability: 'Out of stock',
        img: "Images/rylbluqrtrplte2.webp",
        colour: 'Light Blue',
        dimensions: '31cm',
        Material: 'Ceramic',
    },
    {
        id: 89,
        name: 'ROYAL BLUE SERVING BOWL',
        SKU: 'HM-TW-SBP23-01',
        price: 'PKR 1,849.00',
        availability: 'Out of stock',
        img: "Images/rylblusrvingbowl.webp",
        colour: 'Light Blue',
        dimensions: '28cm',
        Material: 'Ceramic',
    },
    {
        id: 90,
        name: 'ROYAL BLUE SERVING BOWL',
        SKU: 'HM-TW-SBP23-02',
        price: 'PKR 1,849.00',
        availability: 'In stock',
        img: "Images/rylblusrvingbowl2.webp",
        colour: 'Yellow',
        dimensions: '28cm',
        Material: 'Ceramic',
    },
    {
        id: 91,
        name: 'ROYAL BLUE SERVING PLATTER',
        SKU: 'HM-TW-SPR23-02',
        price: 'PKR 3,389.00',
        availability: 'In stock',
        img: "Images/rylblusrvingpltr.webp",
        colour: 'Zebra (White X Navy Blue)',
        dimensions: 'L: 45cm X W: 25cm',
        Material: 'Ceramic',
    },
]


var royalBLueProducts = document.querySelector('.royal-blue-products');

for (var i = 0; i < royalBluePrcts.length; i++) {
    var royalBluePrdcts = royalBluePrcts[i];

    royalBLueProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${royalBluePrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${royalBluePrdcts.name}
                </a>
            </div>
            <div>
            <button class="royalBlueProducts-btn" href='rylblueprdcts.html?id=${royalBluePrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.royalBlueProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `rylblueprdcts.html?id=${productID}`;
        });
    });
}
