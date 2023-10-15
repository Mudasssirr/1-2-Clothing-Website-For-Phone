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
const trouserproducts = [
    {
        id: 413,
        name: 'MB-EF23-114',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: "Images/bottomsproduct1.webp",
        colour: 'Black',
        fabric: "Cambric"
    },
    {
        id: 414,
        name: 'MB-EF23-81',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct2.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 415,
        name: 'MB-EF23-138',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct3.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 416,
        name: 'MB-EF23-80',
        price: 'PKR 1,500.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct4.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 417,
        name: 'MB-EF23-141',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct5.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 418,
        name: 'MB-EF23-90',
        price: 'PKR 1,500.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct6.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 419,
        name: 'MB-EF23-87',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct7.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 420,
        name: 'MB-EF23-87',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct8.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 421,
        name: 'MB-EF23-88',
        price: 'PKR 1,300.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct9.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 422,
        name: 'MB-EF23-88',
        price: 'PKR 1,300.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct10.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 423,
        name: 'MB-EF23-145',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct11.webp',
        colour: 'Black',
        fabric: 'Raw Silk'
    },
    {
        id: 424,
        name: 'MB-W22-173',
        price: 'PKR 1,600.00',
        availability: 'Out of stock',
        img: 'Images/bottomsproduct12.webp',
        colour: 'Black',
        fabric: 'Velvet'
    },
    {
        id: 425,
        name: 'MB-EF23-98',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct13.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 426,
        name: 'MB-W23-188',
        price: 'PKR 1,900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct14.webp',
        colour: 'White',
        fabric: 'Linen'
    },
    {
        id: 427,
        name: 'MB-W22-190',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct15.webp',
        colour: 'Blue',
        fabric: 'Tensile'
    },
    {
        id: 428,
        name: 'MB-EF23-84',
        price: 'PKR 1,500.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct16.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 429,
        name: 'MB-EF23-94',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct17.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 430,
        name: 'MB-EF23-87',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct18.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 431,
        name: 'MB-EF23-115',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct19.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 432,
        name: 'MB-W22-171',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct20.webp',
        colour: 'Black',
        fabric: 'Winter Cambric'
    },
    {
        id: 433,
        name: 'MB-EA23-165',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct21.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 434,
        name: 'MB-EA23-146',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct22.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 435,
        name: 'MB-EA23-164',
        price: 'PKR 1,600.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct23.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 436,
        name: 'MB-EA23-164',
        price: 'PKR 1,600.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct24.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 437,
        name: 'MB-EA23-152',
        price: 'PKR 1,200.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct25.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 438,
        name: 'Mb-EA23-168',
        price: 'PKR 1,400.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct26.webp',
        colour: 'Off White',
        fabric: 'Cambric'
    },
    {
        id: 439,
        name: 'MB-SS22-205',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct27.webp',
        colour: 'Off White',
        fabric: 'Raw Silk'
    },
    {
        id: 440,
        name: 'MB-SS22-62',
        price: 'PKR 700.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct28.webp',
        colour: 'Off White',
        fabric: 'Raw Silk'
    },
    {
        id: 441,
        name: 'MB-SS22-224',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct29.webp',
        colour: 'Off White',
        fabric: 'Raw Silk'
    },
    {
        id: 442,
        name: 'MB-SS22-51',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct30.webp',
        colour: 'Blue',
        fabric: 'Arabic Lawn'
    },
    {
        id: 443,
        name: 'MB-SS21-84',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct31.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 444,
        name: 'MB-SS21-23/A',
        price: 'PKR 700.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct32.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 445,
        name: 'MB-W21-29',
        price: 'PKR 600.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct33.webp',
        colour: 'White',
        fabric: 'Cotton Satin'
    },
    {
        id: 446,
        name: 'MB-SS21-203',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct34.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 447,
        name: 'MB-EF23-92',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct35.webp',
        colour: 'Grey',
        fabric: 'Arabic Lawn'
    },
    {
        id: 448,
        name: 'MB-W22-272',
        price: 'PKR 900.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct36.webp',
        colour: 'Beige',
        fabric: 'Winter Cambric'
    },
    {
        id: 449,
        name: 'MB-W21-154',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct37.webp',
        colour: 'Off White',
        fabric: 'Cotton Spandex'
    },
    {
        id: 450,
        name: 'MB-SS22-127',
        price: 'PKR 700.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct38.webp',
        colour: 'White',
        fabric: 'Cambric Culotte'
    },
    {
        id: 451,
        name: 'MB-SS22-152',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct39.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 452,
        name: 'MB-W22-170',
        price: 'PKR 700.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct40.webp',
        colour: 'Beige',
        fabric: 'Slub Khaddar'
    },
    {
        id: 453,
        name: 'Mb-SS22-148',
        price: 'PKR 700.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct41.webp',
        colour: 'Beige',
        fabric: 'Cambric'
    },
    {
        id: 454,
        name: 'MG-W20-81',
        price: 'PKR 900.00',
        availability: 'Out of stock',
        img: 'Images/bottomsproduct42.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 455,
        name: 'MB-SS22-215',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct43.webp',
        colour: 'Black',
        fabric: 'Cambric Embroided'
    },
    {
        id: 456,
        name: 'MB-SS22-203',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct44.webp',
        colour: 'White',
        fabric: 'Cambric Embroided'
    },
    {
        id: 457,
        name: 'MB-SS22-203',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct45.webp',
        colour: 'Black',
        fabric: 'Cambric Embroided'
    },
    {
        id: 458,
        name: 'MB-SS21-160/A',
        price: 'PKR 800.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct46.webp',
        colour: 'Black',
        fabric: 'Cambric'
    },
    {
        id: 459,
        name: 'MB-SS21-191',
        price: 'PKR 1,000.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct47.webp',
        colour: 'White',
        fabric: 'Cambric'
    },
    {
        id: 460,
        name: 'MB-W22-160',
        price: 'PKR 600.00',
        availability: 'In stock',
        img: 'Images/bottomsproduct48.webp',
        colour: 'Off White',
        fabric: 'Khaddar'
    },
];

const productsPerPage = 16; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
    const allProducts = document.querySelector('.Trouser-products'); // Moved this line inside the function
    if (!allProducts) {
        // If 'all-products' element is not found on the page, simply return without taking any action.
        return; // Exit the function
    }
    allProducts.innerHTML = ''; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < trouserproducts.length; i++) {
        const product = trouserproducts[i];

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
                    <button class="trouserproduct-btn" href='trouserprdcts.html?id=${product.id}'>VIEW PRODUCT</button>
                </div>
            </div>
        `;
    }
    const viewProductButtons = document.querySelectorAll('.trouserproduct-btn');

    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior (e.g., navigating to a new page)
            event.preventDefault();

            // Get the product ID from the button's href attribute
            const productID = button.getAttribute('href').split('=')[1];

            // Redirect the user to the product details page with the product ID
            window.location.href = `trouserprdcts.html?id=${productID}`;
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
    const isLastPage = currentPage === Math.ceil(trouserproducts.length / productsPerPage);
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
    if (currentPage < Math.ceil(trouserproducts.length / productsPerPage)) {
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