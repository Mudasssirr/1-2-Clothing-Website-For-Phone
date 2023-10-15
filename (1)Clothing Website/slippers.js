const slipperPrcts = [
    {
        id: 146,
        name: 'RAE SLIPPERS',
        SKU: 'HM-BM-SL23-01',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: "Images/slipper1.webp",
        material: "Canvas",
        measure: "Small (36-37) ; Medium (38-39) ; Large (40-41)",
        colour: "Dark Pink",
    },
    {
        id: 147,
        name: 'TALIA SLIPPERS',
        SKU: 'HM-BM-SL23-03',
        price: 'PKR 3,500.00',
        availability: 'Out of stock',
        img: "Images/slipper2.webp",
        material: "Fur",
        measure: "Small (36-37) ; Medium (38-39) ; Large (40-41)",
        colour: "Brown",
    },
    {
        id: 148,
        name: 'GIA SLIPPERS',
        SKU: 'HM-BM-SL23-02',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: "Images/slipper3.webp",
        material: "Canvas",
        measure: "Small (36-37) ; Medium (38-39) ; Large (40-41)",
        colour: "Off White & Pink",
    }
]

var slipperProducts = document.querySelector('.slipper-products');

for (var i = 0; i < slipperPrcts.length; i++) {
    var slipperPrdcts = slipperPrcts[i];

    slipperProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${slipperPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${slipperPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${slipperPrdcts.price}
                </a>
            </div>
            <div>
            <button class="slipperProducts-btn" href='slipperprdcts.html?id=${slipperPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.slipperProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `slipperprdcts.html?id=${productID}`;
        });
    });
}