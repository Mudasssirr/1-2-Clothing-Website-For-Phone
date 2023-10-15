const platterPrcts = [
    {
        id: 116,
        name: 'LINEN MELODY PLATTER',
        SKU: 'HM-DO-PL23-03',
        price: 'PKR 4,830.00',
        availability: 'In stock',
        img: "Images/linen-melody-platter.webp",
        colour: 'Blend',
        measures: 'H: 8.2" ; W: 12.9"',
        Material: 'Ceramic',
    }
]

var platterProducts = document.querySelector('.platter-products');

for (var i = 0; i < platterPrcts.length; i++) {
    var platterPrdcts = platterPrcts[i];

    platterProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${platterPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${platterPrdcts.name}
                </a>
            </div>
            <div>
            <button class="platterProducts-btn" href='platterprdcts.html?id=${platterPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.platterProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `platterprdcts.html?id=${productID}`;
        });
    });
}