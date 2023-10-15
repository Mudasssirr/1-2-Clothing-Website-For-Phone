// FOR NAVBAR
let navtoggle = document.querySelector('.navbar-toggler');

navtoggle && navtoggle.addEventListener('click', function () {
    const navbarToggler = this;
    navbarToggler.classList.toggle('active');

    const icon = navbarToggler.querySelector('.icon');
    const closeIcon = document.querySelector('.close-icon');
    const searchBox = document.querySelector('.search-box');
    const navLinks = document.querySelector('.nav-links');

    if (navbarToggler.classList.contains('active')) {
        closeIcon.style.display = 'block';
        searchBox.classList.remove('active');
        navLinks.style.left = '0';
    } else {
        closeIcon.style.display = 'none';
        searchBox.classList.remove('active');
        navLinks.style.left = '-300px';
    }

    icon.classList.toggle('open');
});

let closeIcn = document.querySelector('.close-icon');

closeIcn && closeIcn.addEventListener('click', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const icon = navbarToggler.querySelector('.icon');
    const closeIcon = this;
    const searchBox = document.querySelector('.search-box');
    const navLinks = document.querySelector('.nav-links');

    navbarToggler.classList.remove('active');
    closeIcon.style.display = 'none';
    searchBox.classList.remove('active');
    navLinks.style.left = '-300px';
    icon.classList.remove('open');
});

let searchBox = document.querySelector('.search-icon')

searchBox && searchBox.addEventListener('click', function () {
    const searchBox = document.querySelector('.search-box');
    searchBox.classList.toggle('active');
});




// FOR SALE PRODUCTS
const salePrcts = [
    {
        id: 149,
        name: 'MB-F23-308',
        priceOrg: 'PKR 9,290.00',
        price: "PKR 8,500.00",
        availability: 'In stock',
        img: "Images/saleproduct1.webp",
        colour: "Teal Green",
        fabric: 'Indian Rawsilk',
        discountPrcntge: 8.5
    },
    {
        id: 150,
        name: 'MB-F23-204',
        priceOrg: 'PKR 8,890.00',
        price: "PKR 8,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct2.webp',
        colour: 'Peach',
        fabric: 'Cotton Net',
        discountPrcntge: 10.5
    },
    {
        id: 151,
        name: 'MB-F23-307',
        priceOrg: 'PKR 7,400.00',
        price: "PKR 6,500.00",
        availability: 'In stock',
        img: 'Images/saleproduct3.webp',
        colour: 'Hot Pink',
        fabric: 'Organza',
        discountPrcntge: 12.1
    },
    {
        id: 152,
        name: 'MB-F23-306',
        priceOrg: 'PKR 7,400.00',
        price: "PKR 6,500.00",
        availability: 'In stock',
        img: 'Images/saleproduct4.webp',
        colour: 'Powder Pink',
        fabric: 'Organza',
        discountPrcntge: 12.1
    },
    {
        id: 153,
        name: 'MB-F23-306',
        priceOrg: 'PKR 7,400.00',
        price: "PKR 6,500.00",
        availability: 'In stock',
        img: 'Images/saleproduct5.webp',
        colour: 'Light Blue',
        fabric: 'Organza',
        discountPrcntge: 12.1
    },
    {
        id: 154,
        name: 'MB-F23-305',
        priceOrg: 'PKR 7,000.00',
        price: "PKR 6,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct6.webp',
        colour: 'Coffee',
        fabric: 'Organza',
        discountPrcntge: 14.2
    },
    {
        id: 155,
        name: 'MB-F23-215',
        priceOrg: 'PKR 4,700.00',
        price: "PKR 3,800.00",
        availability: 'In stock',
        img: 'Images/saleproduct7.webp',
        colour: 'Teal Blue',
        fabric: 'Raw Silk',
        discountPrcntge: 19.1
    },
    {
        id: 156,
        name: 'MB-F23-213',
        priceOrg: 'PKR 4,700.00',
        price: "PKR 3,800.00",
        availability: 'In stock',
        img: 'Images/saleproduct8.webp',
        colour: 'Blue',
        fabric: 'Poly Organza',
        discountPrcntge: 19.1
    },
    {
        id: 157,
        name: 'MB-F23-215',
        priceOrg: 'PKR 4,700.00',
        price: "PKR 3,800.00",
        availability: 'In stock',
        img: 'Images/saleproduct9.webp',
        colour: 'Magenta',
        fabric: 'Raw Silk',
        discountPrcntge: 19.1
    },
    {
        id: 158,
        name: 'MB-F23-206',
        priceOrg: 'PKR 4,000.00',
        price: "PKR 3,400.00",
        availability: 'In stock',
        img: 'Images/saleproduct10.webp',
        colour: 'Sea Green',
        fabric: 'Poly Organza',
        discountPrcntge: 15.1
    },
    {
        id: 159,
        name: 'BET-W22-W116',
        priceOrg: 'PKR 4,000.00',
        price: "PKR 3,400.00",
        availability: 'In stock',
        img: 'Images/saleproduct11.webp',
        colour: 'Ice Blue',
        fabric: 'Bamber Rawsilk',
        discountPrcntge: 15.1
    },
    {
        id: 160,
        name: 'BET-W22-W114',
        priceOrg: 'PKR 5,000.00',
        price: "PKR 4,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct12.webp',
        colour: 'Maroon',
        fabric: 'Poly Organza',
        discountPrcntge: 20
    },
    {
        id: 161,
        name: 'BET-W22-W131',
        priceOrg: 'PKR 5,000.00',
        price: "PKR 4,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct13.webp',
        colour: 'Red',
        fabric: 'Poly Organza',
        discountPrcntge: 20
    },
    {
        id: 162,
        name: 'BET-W22-W110',
        priceOrg: 'PKR 3,000.00',
        price: "PKR 2,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct14.webp',
        colour: 'Navy Blue',
        fabric: 'Poly Organza',
        discountPrcntge: 20
    },
    {
        id: 163,
        name: 'BET-W22-W132',
        priceOrg: 'PKR 4,600.00',
        price: "PKR 3,600.00",
        availability: 'In stock',
        img: 'Images/saleproduct15.webp',
        colour: 'Peach',
        fabric: 'Bamber Rawsilk',
        discountPrcntge: 20
    },
    {
        id: 164,
        name: 'BET-W22-W131',
        priceOrg: 'PKR 5,000.00',
        price: "PKR 4,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct16.webp',
        colour: 'Blue',
        fabric: 'Poly Organza',
        discountPrcntge: 20
    },
    {
        id: 165,
        name: 'BET-W22-W114',
        priceOrg: 'PKR 5,000.00',
        price: "PKR 4,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct17.webp',
        colour: 'Off White',
        fabric: 'Poly Organza',
        discountPrcntge: 20
    },
    {
        id: 166,
        name: 'BET-W22-W130',
        priceOrg: 'PKR 5,500.00',
        price: "PKR 4,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct18.webp',
        colour: 'Red',
        fabric: 'Bamber Rawsilk',
        discountPrcntge: 27.1
    },
    {
        id: 167,
        name: 'BET-W22-W131',
        priceOrg: 'PKR 5,000.00',
        price: "PKR 4,000.00",
        availability: 'In stock',
        img: 'Images/saleproduct19.webp',
        colour: 'Mangeta',
        fabric: 'Poly Organza',
        discountPrcntge: 20
    },
    {
        id: 168,
        name: 'BET-W22-W126',
        priceOrg: 'PKR 2,800.00',
        price: "PKR 1,500.00",
        availability: 'Out of stock',
        img: 'Images/saleproduct20.webp',
        colour: 'Olive Green',
        fabric: 'Bamber Rawsilk',
        discountPrcntge: 46
    }
];

var allProducts = document.querySelector('.sale-products');

for (var i = 0; i < salePrcts.length; i++) {
    var product = salePrcts[i];

    allProducts.innerHTML += `
        <div class="product-cards">
            <div class="product-img">
                <div class='discount-tag'>${product.discountPrcntge}% Off</div>
                <img src="${product.img}" alt="" class="product-image">
            </div>
            <div class="product-txt">
                <a href="#" class="product-name">
                    ${product.name}
                </a>
                <span class="product-price fs-11">
                <span class="discount-price hv-grn">
                      ${product.price}
                </span>
                <span class="org-price hv-rd">
                   <del>${product.priceOrg}</del>
                </span>
                </span>
            </div>
            <div>
            <button class="saleProducts-btn" href='saleprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
            </div>
        </div>
    `;

    const viewProductButtons = document.querySelectorAll('.saleProducts-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `saleprdcts.html?id=${productID}`;
        });
    });
}

// NEWSLETTER EMAIL CHECKUP
function validateEmail() {
    const emailInput = document.getElementById("newsletter-email");
    const errorMessage = document.getElementById("error-message-newsletter");
  
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (emailPattern.test(emailInput.value)) {
      // Email is valid; you can redirect to the New Arrivals page here
      window.location.href = "N-Arrivals.html";
      errorMessage.style.display = 'none';
    } else {
      // Email is not valid; display an error message
      errorMessage.style.display = 'block';
    }
}



// FOOTER

const footerLinks = document.querySelectorAll('.footer-link');

footerLinks.forEach((footerLink) => {
    footerLink.addEventListener('click', function (event) {
        const toggle = event.target.closest('.dropdown-toggle');
        if (toggle) {
            const plusMinus = toggle.querySelector('.plus-minus');
            plusMinus.textContent = (toggle.getAttribute('aria-expanded') === 'true') ? '+' : '-';
        }
    });
});