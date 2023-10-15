const towelPrcts = [
    {
        id: 137,
        name: 'TOWEL',
        SKU: 'HM-BH-TW23-01',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: "Images/towel1.webp",
    },
    {
        id: 138,
        name: 'TOWEL',
        SKU: 'HM-BH-TW23-02',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: "Images/towel2.webp",
    },
    {
        id: 139,
        name: 'TOWEL',
        SKU: 'HM-BH-TW23-03',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: "Images/towel3.webp",
    }
]

var towelProducts = document.querySelector('.towel-products');

for (var i = 0; i < towelPrcts.length; i++) {
    var towelPrdcts = towelPrcts[i];

    towelProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${towelPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${towelPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${towelPrdcts.price}
                </a>
            </div>
            <div>
            <button class="towelProducts-btn" href='towelprdcts.html?id=${towelPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.towelProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `towelprdcts.html?id=${productID}`;
        });
    });
}