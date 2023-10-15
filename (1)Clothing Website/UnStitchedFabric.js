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
const UNSFproducts = [
    {
        id: 249,
        name: 'DL-1007',
        price: 'PKR 10,400.00',
        availability: 'In stock',
        img: "Images/UNSFproduct1.webp",
        colour: 'Black',
        fabric: "Linen"
    },
    {
        id: 250,
        name: 'DL-1008',
        price: 'PKR 11,100.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct2.webp',
        colour: 'Maroon',
        fabric: 'Linen'
    },
    {
        id: 251,
        name: 'DL-1010',
        price: 'PKR 11,100.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct3.webp',
        colour: 'Fuchsia Pink',
        fabric: 'Linen'
    },
    {
        id: 252,
        name: 'DL-1011',
        price: 'PKR 10,400.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct4.webp',
        colour: 'Green',
        fabric: 'Linen'
    },
    {
        id: 253,
        name: 'CST-608',
        price: 'PKR 16,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct5.webp',
        colour: 'Cobalt Blue',
        fabric: 'Satin'
    },
    {
        id: 254,
        name: 'CST-602',
        price: 'PKR 16,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct6.webp',
        colour: 'Ruby Red',
        fabric: 'Satin'
    },
    {
        id: 255,
        name: 'CST-603',
        price: 'PKR 16,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct7.webp',
        colour: 'Rust Coffee',
        fabric: 'Satin'
    },
    {
        id: 256,
        name: 'CST-604',
        price: 'PKR 15,450.00',
        availability: 'Out of stock',
        img: 'Images/UNSFproduct8.webp',
        colour: 'Ivory',
        fabric: 'Satin'
    },
    {
        id: 257,
        name: 'CST-605',
        price: 'PKR 15,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct9.webp',
        colour: 'Black',
        fabric: 'Satin'
    },
    {
        id: 258,
        name: 'CST-606',
        price: 'PKR 16,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct10.webp',
        colour: 'Aqua',
        fabric: 'Satin'
    },
    {
        id: 259,
        name: 'CST-607',
        price: 'PKR 16,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct11.webp',
        colour: 'Lime Green',
        fabric: 'Satin'
    },
    {
        id: 260,
        name: 'CST-507',
        price: 'PKR 12,400.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct12.webp',
        colour: 'Hot Pink',
        fabric: 'Satin'
    },
    {
        id: 261,
        name: 'CST-508',
        price: 'PKR 12,700.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct13.webp',
        colour: 'Ivory',
        fabric: 'Satin'
    },
    {
        id: 262,
        name: 'CST-506',
        price: 'PKR 12,300.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct14.webp',
        colour: 'Black',
        fabric: 'Satin'
    },
    {
        id: 263,
        name: 'CST-505',
        price: 'PKR 12,700.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct15.webp',
        colour: 'Royal Blue',
        fabric: 'Satin'
    },
    {
        id: 264,
        name: 'CST-504',
        price: 'PKR 11,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct16.webp',
        colour: 'Beige',
        fabric: 'Satin'
    },
    {
        id: 265,
        name: 'CST-503',
        price: 'PKR 12,700.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct17.webp',
        colour: 'Mustard',
        fabric: 'Satin'
    },
    {
        id: 266,
        name: 'CST-502',
        price: 'PKR 11,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct18.webp',
        colour: 'Green',
        fabric: 'Satin'
    },
    {
        id: 267,
        name: 'CST-501',
        price: 'PKR 12,300.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct19.webp',
        colour: 'Plum',
        fabric: 'Satin'
    },
    {
        id: 268,
        name: 'CST-601',
        price: 'PKR 16,450.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct20.webp',
        colour: 'Magenta Hot Pink',
        fabric: 'Satin'
    },
    {
        id: 269,
        name: 'MPC-23-101',
        price: 'PKR 30,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct21.webp',
        colour: 'Coffee',
        fabric: 'Chiffon'
    },
    {
        id: 270,
        name: 'MPC-23-105',
        price: 'PKR 32,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct22.webp',
        colour: 'Peach',
        fabric: 'Chiffon'
    },
    {
        id: 271,
        name: 'MPC-23-106',
        price: 'PKR 30,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct23.webp',
        colour: 'Cloud White Floral',
        fabric: 'Chiffon'
    },
    {
        id: 272,
        name: 'MPC-23-107',
        price: 'PKR 29,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct24.webp',
        colour: 'Magenta Pink',
        fabric: 'Chiffon'
    },
    {
        id: 273,
        name: 'MPC-23-102',
        price: 'PKR 29,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct25.webp',
        colour: 'Teal Blue',
        fabric: 'Chiffon'
    },
    {
        id: 274,
        name: 'MPC-23-103',
        price: 'PKR 29,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct26.webp',
        colour: 'Lilac',
        fabric: 'Chiffon'
    },
    {
        id: 275,
        name: 'MPC-23-104',
        price: 'PKR 29,500.00',
        availability: 'Out of stock',
        img: 'Images/UNSFproduct27.webp',
        colour: 'Mint Green',
        fabric: 'Chiffon'
    },
    {
        id: 276,
        name: 'MPC-23-108',
        price: 'PKR 28,500.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct28.webp',
        colour: 'Emerald Green',
        fabric: 'Chiffon'
    },
    {
        id: 277,
        name: 'MPT-1902-A',
        price: 'PKR 7,650.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct29.webp',
        colour: 'Blend',
        fabric: 'M. Prints'
    },
    {
        id: 278,
        name: 'MPT-1904-B',
        price: 'PKR 7,850.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct30.webp',
        colour: 'Blue',
        fabric: 'M. Prints'
    },
    {
        id: 279,
        name: 'MPT-1810-B',
        price: 'PKR 6,950.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct31.webp',
        colour: 'Dark Brown',
        fabric: 'M. Prints'
    },
    {
        id: 280,
        name: 'MPT-1710-B',
        price: 'PKR 6,650.00',
        availability: 'In stock',
        img: 'Images/UNSFproduct32.webp',
        colour: 'Floral',
        fabric: 'M. Prints'
    },
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.UnstitchedFabric-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < UNSFproducts.length; i++) {
        const product = UNSFproducts[i];

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
                    <button class="UNSFproduct-btn" href='UnstitchedFabricprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.UNSFproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `UnstitchedFabricprdcts.html?id=${productID}`;
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
    const isLastPage = currentPage === Math.ceil(UNSFproducts.length / productsPerPage);
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
    if (currentPage < Math.ceil(UNSFproducts.length / productsPerPage)) {
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