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
const sandalproducts = [
    {
        id: 461,
        name: 'SS23SH-273',
        price: 'PKR 6,000.00',
        availability: 'In stock',
        img: "Images/sandalproduct1.webp",
        colour: 'Yellow',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 462,
        name: 'SS23SH-264',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct2.webp',
        colour: 'Silver',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 463,
        name: 'SS23SH-263',
        price: 'PKR 5,200.00',
        availability: 'In stock',
        img: 'Images/sandalproduct3.webp',
        colour: 'Rose Gold & Silver',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 464,
        name: 'SS23SH-266',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct4.webp',
        colour: 'Green',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 465,
        name: 'SS23SH-265',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct5.webp',
        colour: 'Charcoal',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 466,
        name: 'SS23SH-270',
        price: 'PKR 4,500.00',
        availability: 'In stock',
        img: 'Images/sandalproduct6.webp',
        colour: 'Green',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 467,
        name: 'SS23SH-269',
        price: 'PKR 4,500.00',
        availability: 'In stock',
        img: 'Images/sandalproduct7.webp',
        colour: 'Black',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 468,
        name: 'SS23SH-268',
        price: 'PKR 4,500.00',
        availability: 'In stock',
        img: 'Images/sandalproduct8.webp',
        colour: 'Purple',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 469,
        name: 'SS23SH-260',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct9.webp',
        colour: 'Green',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 470,
        name: 'SS23SH-259',
        price: 'PKR 5,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct10.webp',
        colour: 'Pink',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 471,
        name: 'SS23SH-258',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct11.webp',
        colour: 'Black',
        defsize: 'S: 37, M: 38, L:39'
    },
    {
        id: 472,
        name: 'SS23SH-255',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct12.webp',
        colour: 'Yellow',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 473,
        name: 'SS23SH-254',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct13.webp',
        colour: 'Red',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 474,
        name: 'SS23SH-226',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct14.webp',
        colour: 'Pink',
        defsize: 'S: 35, M: 36, L:37'
    },
    {
        id: 475,
        name: 'SS23SH-223',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct15.webp',
        colour: 'Purple',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 476,
        name: 'SS23SH-222',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct16.webp',
        colour: 'Blue',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 477,
        name: 'SS23SH-119',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct17.webp',
        colour: 'Pink',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 478,
        name: 'SS23SH-118',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct18.webp',
        colour: 'Blue',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 479,
        name: 'SS23SH-252',
        price: 'PKR 4,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct19.webp',
        colour: 'Rose Gold',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 480,
        name: 'SS23SH-213',
        price: 'PKR 2,500.00',
        availability: 'In stock',
        img: 'Images/sandalproduct20.webp',
        colour: 'Rose Gold',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 481,
        name: 'SS23SH-241',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct21.webp',
        colour: 'Black',
        defsize: 'S: 38, M: 39, L:40'
    },
    {
        id: 482,
        name: 'SS23SH-239',
        price: 'PKR 3,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct22.webp',
        colour: 'Beige',
        defsize: 'S: 37, M: 38, L:39'
    },
    {
        id: 483,
        name: 'SS23SH-066',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct23.webp',
        colour: 'Silver',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 484,
        name: 'SS23SH-065',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct24.webp',
        colour: 'Blue',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 485,
        name: 'SS23SH-218',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct25.webp',
        colour: 'Blue',
        defsize: 'S: 38, M:39, L:40'
    },
    {
        id: 486,
        name: 'SS23SH-217',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct26.webp',
        colour: 'Purple',
        defsize: 'S: 38, M:39, L:40'
    },
    {
        id: 487,
        name: 'SS23SH-107',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct27.webp',
        colour: 'Blue',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 488,
        name: 'SS23SH-106',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct28.webp',
        colour: 'Pink',
        defsize: 'S: 39, M: 40, L:41'
    },
    {
        id: 489,
        name: 'SS23SH-113',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct29.webp',
        colour: 'Pink',
        defsize: 'S: 38, M:39, L:40'
    },
    {
        id: 490,
        name: 'SS23SH-112',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct30.webp',
        colour: 'Blue',
        defsize: 'S: 38, M:39, L:40'
    },
    {
        id: 491,
        name: 'SS23SH-109',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct31.webp',
        colour: 'Pink',
        defsize: 'S: 38, M:39, L:40'
    },
    {
        id: 492,
        name: 'SS23SH-108',
        price: 'PKR 2,000.00',
        availability: 'In stock',
        img: 'Images/sandalproduct32.webp',
        colour: 'Yellow',
        defsize: 'S: 38, M:39, L:40'
    }
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.Sandals-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < sandalproducts.length; i++) {
        const product = sandalproducts[i];

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
                    <button class="sandalproduct-btn" href='sandalprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.sandalproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `sandalprdcts.html?id=${productID}`;
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
    const isLastPage = currentPage === Math.ceil(sandalproducts.length / productsPerPage);
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
    if (currentPage < Math.ceil(sandalproducts.length / productsPerPage)) {
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