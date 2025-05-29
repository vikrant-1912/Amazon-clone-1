// Toggle mode function

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// add to cart function with cart number update each box --- comment out bcoz we have made specific Cart page with "localStorage concept"

// let cartCount = 0;

// function addToCart(itemName) {
//     cartCount++;
//     document.getElementById("cart-count").textContent = cartCount;
//     alert(`Hey Friend , Your ${itemName} added to cart!`);

//     // Optional Funtion: Save cart in localStorage

//     localStorage.setItem("cartCount", cartCount);
// }

// // On windoq Load, saved cart count on page load

// window.onload = () => {
//     const savedCount = localStorage.getItem("cartCount");
//     if (savedCount) {
//         cartCount = parseInt(savedCount);
//         document.getElementById("cart-count").textContent = cartCount;
//     }
// };

// Updated add to cart Function for new Page "cart.html" & "cart.js"
function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: itemName });
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update counter
    const count = cart.length;
    document.getElementById("cart-count").textContent = count;
    alert(`${itemName} added to cart!`);
}


// Welcome pop-up to visitor

function showWelcomePopup() {
    const visited = localStorage.getItem('visited');
    if (!visited) {
        document.getElementById('welcomePopup').style.display = 'flex';
        localStorage.setItem('visited', 'true');
    }
}

function closeWelcomePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
}

window.onload = () => {
    showWelcomePopup();

    // (Optional) Load saved cart count
    const savedCount = localStorage.getItem("cartCount");
    if (savedCount) {
        document.getElementById("cart-count").textContent = savedCount;
    }
};


// Modal for product descriptions 

function showModal(title, imageUrl, description) {
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}


//Search filtering bt keyword 

function filterProducts() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const title = box.querySelector('h2').textContent.toLowerCase();
        if (title.includes(input)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

// Explanation 1 of search filtering function 


// | Part                                      | Meaning                                                                                                 |
// | ----------------------------------------- | ------------------------------------------------------------------------------------------------------- |
// | `document.querySelector('.search-input')` | Finds the `<input>` element with class `search-input`                                                   |
// | `.value`                                  | Gets the text that the user has typed in the input field                                                |
// | `.toLowerCase()`                          | Converts the input text to lowercase, so the search is **case-insensitive** (e.g., “MOBILE” = “mobile”) |

// Explanation 2 of search filtering function 

// | Part                   | Explanation                                                                           |
// | ---------------------- | ------------------------------------------------------------------------------------- |
// | `box`                  | Refers to one `.box` div (like a product box) — you're looping over all product boxes |
// | `.querySelector('h2')` | Finds the `<h2>` tag inside this specific box (which contains the product name/title) |
// | `.textContent`         | Extracts the **text** inside the `<h2>` (e.g., "Mobiles & Smartphones")               |
// | `.toLowerCase()`       | Converts that text to lowercase, to make searching **case-insensitive**               |



