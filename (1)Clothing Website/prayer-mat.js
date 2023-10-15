const prayerMatPrcts = [
    {
        id: 135,
        name: 'PRAYER MAT',
        SKU: 'HM-JM-JM23-02',
        price: 'PKR 6,900.00',
        availability: 'In stock',
        img: "Images/janemaz1.webp",
    },
    {
        id: 136,
        name: 'PRAYER MAT',
        SKU: 'HM-JM-JM23-01',
        price: 'PKR 5,500.00',
        availability: 'Out of stock',
        img: "Images/janemaz2.webp",
    }
]

var prayerMatProducts = document.querySelector('.prayer-mat-products');

for (var i = 0; i < prayerMatPrcts.length; i++) {
    var prayerMatPrdcts = prayerMatPrcts[i];

    prayerMatProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${prayerMatPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${prayerMatPrdcts.name}
                </a>
                <a href="#" class="product-price">
                    ${prayerMatPrdcts.price}
                </a>
            </div>
            <div>
            <button class="prayerMatProducts-btn" href='prayermatprdcts.html?id=${prayerMatPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.prayerMatProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `prayermatprdcts.html?id=${productID}`;
        });
    });
}