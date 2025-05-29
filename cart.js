const cartItemsContainer = document.getElementById("cartItems");

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
        alert(`Hey Friend , Your ${itemName} added to cart!`);
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `<strong>${index + 1}. ${item.name}</strong>`;
        cartItemsContainer.appendChild(div);
    });
}

displayCart();
