const tableRunnerPrcts = [
    {
        id: 101,
        name: 'MODERN VICTORIAN TABLE RUNNER',
        SKU: 'HM-TW-TR23-01',
        price: 'PKR 3,389.00',
        availability: 'In stock',
        img: "Images/victoriantblernr.webp",
        colour: 'Blue & White',
        measures: 'Small: (6-8 people table), Large (8-12 people table)',
        Material: 'Canvas',
    },
    {
        id: 102,
        name: 'VINTAGE NOIR TABLE RUNNER',
        SKU: 'HM-TW-TR23-01',
        price: 'PKR 2,711.00',
        availability: 'Out of stock',
        img: "Images/noirtblernr.webp",
        colour: 'Blend',
        measures: 'Small: (6-8 people table), Large (8-12 people table)',
        Material: 'Canvas',
    }
]

var tableRunnerProducts = document.querySelector('.table-runner-products');

for (var i = 0; i < tableRunnerPrcts.length; i++) {
    var tableRunnerPrdcts = tableRunnerPrcts[i];

    tableRunnerProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${tableRunnerPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${tableRunnerPrdcts.name}
                </a>
            </div>
            <div>
            <button class="tableRunnerProducts-btn" href='tblernrprdcts.html?id=${tableRunnerPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.tableRunnerProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `tblernrprdcts.html?id=${productID}`;
        });
    });
}