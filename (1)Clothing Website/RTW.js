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




// FOR PRODUCTS
const RTWproducts = [
    {
        id: 217,
        name: 'SF-W23-07',
        price: 'PKR 35,990.00',
        availability: 'In stock',
        img: "Images/RTWproduct1.webp",
        colour: 'Olive Green',
        fabric: "Velvet"
    },
    {
        id: 218,
        name: 'SF-W23-07',
        price: 'PKR 35,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct2.webp',
        colour: 'Dark Blue',
        fabric: 'Velvet'
    },
    {
        id: 219,
        name: 'SF-W22-09/A',
        price: 'PKR 39,290.00',
        availability: 'In stock',
        img: 'Images/RTWproduct3.webp',
        colour: 'Pink',
        fabric: 'Zari Net'
    },
    {
        id: 220,
        name: 'SF-W22-09/A',
        price: 'PKR 39,290.00',
        availability: 'In stock',
        img: 'Images/RTWproduct4.webp',
        colour: 'Green',
        fabric: 'Zari Net'
    },
    {
        id: 221,
        name: 'SF-EA23-20',
        price: 'PKR 33,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct5.webp',
        colour: 'Pink',
        fabric: 'Charmeuse Silk'
    },
    {
        id: 222,
        name: 'SF-EA23-20',
        price: 'PKR 33,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct6.webp',
        colour: 'Green',
        fabric: 'Charmeuse Silk'
    },
    {
        id: 223,
        name: 'SN-PF23-02',
        price: 'PKR 25,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct7.webp',
        colour: 'Green',
        fabric: 'Printed Pure Silk Net'
    },
    {
        id: 224,
        name: 'SN-PF23-06',
        price: 'PKR 27,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct8.webp',
        colour: 'Beige',
        fabric: 'Printed Pure Silk Net'
    },
    {
        id: 225,
        name: 'SN-PF23-05',
        price: 'PKR 25,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct9.webp',
        colour: 'Yellow',
        fabric: 'Pure Silk Net'
    },
    {
        id: 226,
        name: 'SN-PF23-03',
        price: 'PKR 29,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct10.webp',
        colour: 'Beige',
        fabric: 'Printed Pure Silk Net'
    },
    {
        id: 227,
        name: 'SF-EA23-40',
        price: 'PKR 27,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct11.webp',
        colour: 'Beige',
        fabric: 'Zari Cotton Karandi'
    },
    {
        id: 228,
        name: 'SN-PF23-04',
        price: 'PKR 25,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct12.webp',
        colour: 'Light Green',
        fabric: 'Pure Silk Net'
    },
    {
        id: 229,
        name: 'SF-W21-27/A',
        price: 'PKR 41,290.00',
        availability: 'In stock',
        img: 'Images/RTWproduct13.webp',
        colour: 'Red',
        fabric: 'Raw Silk'
    },
    {
        id: 230,
        name: 'SN-PF23-07',
        price: 'PKR 27,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct14.webp',
        colour: 'Off White',
        fabric: 'Pure Silk  Net'
    },
    {
        id: 231,
        name: 'ML-105-A',
        price: 'PKR 40,000.00',
        availability: 'In stock',
        img: 'Images/RTWproduct15.webp',
        colour: 'White',
        fabric: 'Cotton Net'
    },
    {
        id: 232,
        name: 'SF-W20-06-AA',
        price: 'PKR 29,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct16.webp',
        colour: 'Green',
        fabric: 'Organza'
    },
    {
        id: 233,
        name: 'SN-PF23-08',
        price: 'PKR 23,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct17.webp',
        colour: 'Peach',
        fabric: 'Cotton Net'
    },
    {
        id: 234,
        name: 'SN-PF23-01',
        price: 'PKR 25,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct18.webp',
        colour: 'Off White',
        fabric: 'Printed Pure Silk Net'
    },
    {
        id: 235,
        name: 'SF-EA23-04',
        price: 'PKR 27,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct19.webp',
        colour: 'Ferozi',
        fabric: 'Zari Cotton Karandi'
    },
    {
        id: 236,
        name: 'SF-W20-87-AA',
        price: 'PKR 26,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct20.webp',
        colour: 'Off White',
        fabric: 'Organza'
    },
    {
        id: 248,
        name: 'SF-EA23-13',
        price: 'PKR 33,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct32.webp',
        colour: 'Black',
        fabric: 'Raw Silk'
    },
    {
        id: 237,
        name: 'SF-EA23-13',
        price: 'PKR 33,990.00',
        availability: 'In stock',
        img: 'Images/RTWproduct21.webp',
        colour: 'Red',
        fabric: 'Raw Silk'
    },
    {
        id: 247,
        name: 'SF-W22-26',
        price: 'PKR 24,230.00',
        availability: 'In stock',
        img: 'Images/RTWproduct31.webp',
        colour: 'Off White',
        fabric: 'Velvet'
    },
    {
        id: 238,
        name: 'SF-EA23-92',
        price: 'PKR 28,950.00',
        availability: 'In stock',
        img: 'Images/RTWproduct22.webp',
        colour: 'Off White',
        fabric: 'Zari Net'
    },
    {
        id: 239,
        name: 'SF-EA23-57',
        price: 'PKR 22,490.00',
        availability: 'In stock',
        img: 'Images/RTWproduct23.webp',
        colour: 'Sky Blue',
        fabric: 'Tissue'
    },
    {
        id: 240,
        name: 'SF-EA23-56',
        price: 'PKR 19,370.00',
        availability: 'In stock',
        img: 'Images/RTWproduct24.webp',
        colour: 'Beige',
        fabric: 'Khadi Jacquard'
    },
    {
        id: 241,
        name: 'SF-EA23-07',
        price: 'PKR 24,640.00',
        availability: 'In stock',
        img: 'Images/RTWproduct25.webp',
        colour: 'Light Blue',
        fabric: 'Chiffon'
    },
    {
        id: 242,
        name: 'SF-EF23-04',
        price: 'PKR 23,310.00',
        availability: 'In stock',
        img: 'Images/RTWproduct26.webp',
        colour: 'Dark Blue',
        fabric: 'Raw Silk'
    },
    {
        id: 243,
        name: 'SF-EF23-33',
        price: 'PKR 19,410.00',
        availability: 'In stock',
        img: 'Images/RTWproduct27.webp',
        colour: 'Pink',
        fabric: 'Charmeuse Silk'
    },
    {
        id: 244,
        name: 'SF-EF23-31',
        price: 'PKR 24,870.00',
        availability: 'Out of stock',
        img: 'Images/RTWproduct28.webp',
        colour: 'Yellow',
        fabric: 'Raw Silk'
    },
    {
        id: 245,
        name: 'SF-EF23-04',
        price: 'PKR 23,310.00',
        availability: 'In stock',
        img: 'Images/RTWproduct29.webp',
        colour: 'Pink',
        fabric: 'Raw Silk'
    },
    {
        id: 246,
        name: 'SF-EF23-25',
        price: 'PKR 33,110.00',
        availability: 'In stock',
        img: 'Images/RTWproduct30.webp',
        colour: 'Shocking Pink',
        fabric: 'Organza'
    },
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.RdyToWear-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < RTWproducts.length; i++) {
        const product = RTWproducts[i];

        allProducts.innerHTML += `
            <div class="product-cards">
                <div class="product-img">
                    <img src="${product.img}" alt="" class="product-image">
                </div>
                <div class="product-txt">
                    <a href="#" class="product-name">
                        ${product.name}
                    </a>
                    <span class="product-price">
                        ${product.price}
                    </span>
                </div>
                <div>
                    <button class="RTWproduct-btn" href='RTWprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.RTWproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `RTWprdcts.html?id=${productID}`;
        });
    });


    currentPage = page;
    updatePagination();
}

let nextButtonColor = ''; // Global variable to store the color of the "Next" button

function updatePagination() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');

    currentPageSpan.textContent = `Page ${currentPage}`;

    prevButton.disabled = currentPage === 1;
    const isLastPage = currentPage === Math.ceil(RTWproducts.length / productsPerPage);
    if (isLastPage) {
        nextButton.disabled = true; // Disable the "Next" button
        nextButtonColor = nextButton.style.backgroundColor; // Store the current color
        nextButton.style.backgroundColor = 'gray'; // Change color to gray
        // Alternatively, you can hide the "Next" button:
        // nextButton.style.display = 'none';
    } else {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = nextButtonColor; // Reset color
        // Alternatively, show the "Next" button if hidden:
        // nextButton.style.display = '';
    }
}

// Initial display

displayProducts(currentPage);
// Pagination event listeners
let prevPage = document.getElementById('prevPage');

prevPage && prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        displayProducts(currentPage - 1);
    }
});

let nextPage = document.getElementById('nextPage');

nextPage && nextPage.addEventListener('click', () => {
    if (currentPage < Math.ceil(RTWproducts.length / productsPerPage)) {
        displayProducts(currentPage + 1);
    }
});

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