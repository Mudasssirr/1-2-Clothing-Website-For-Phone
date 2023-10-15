const tableMatPrcts = [
    {
        id: 103,
        name: 'VINTAGE NOIR PLACEMAT',
        SKU: 'HM-TW-TM23-01',
        price: 'PKR 1,339.00',
        availability: 'In stock',
        img: "Images/noirtblemats.webp",
        colour: 'Blend',
        Material: 'Canvas',
    }
]

var tableMatsProducts = document.querySelector('.table-mats-products');

for (var i = 0; i < tableMatPrcts.length; i++) {
    var tableMatsPrdcts = tableMatPrcts[i];

    tableMatsProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <img src="${tableMatsPrdcts.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${tableMatsPrdcts.name}
                </a>
            </div>
            <div>
            <button class="tableMatsProducts-btn" href='tblmatsprdcts.html?id=${tableMatsPrdcts.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.tableMatsProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `tblmatsprdcts.html?id=${productID}`;
        });
    });
}