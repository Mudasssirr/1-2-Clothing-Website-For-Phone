const robesPrcts = [
    {
        id: 143,
        name: 'LUNA',
        SKU: 'HM-BM-RB23-03',
        price: 'PKR 3,200.00',
        availability: 'In stock',
        img: "Images/robe1.webp",
        material: "Linen",
        colour: "Black",
    },
    {
        id: 144,
        name: 'STELLA',
        SKU: 'HM-BM-RB23-02',
        price: 'PKR 3,200.00',
        availability: 'In stock',
        img: "Images/robe2.webp",
        material: "Linen",
        colour: "Pink",
    },
    {
        id: 145,
        name: 'MIA',
        SKU: 'HM-BM-NS23-01',
        price: 'PKR 3,200.00',
        availability: 'In stock',
        img: "Images/robe3.webp",
        material: "Linen",
        colour: "White & Blue",
    }
]

var robesProducts = document.querySelector('.robes-products');

for (var i = 0; i < robesPrcts.length; i++) {
    var robesPrdcts = robesPrcts[i];

    robesProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${robesPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${robesPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${robesPrdcts.price}
                </a>
            </div>
            <div>
            <button class="robesProducts-btn" href='robesprdcts.html?id=${robesPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.robesProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `robesprdcts.html?id=${productID}`;
        });
    });
}