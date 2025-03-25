document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log("Loaded cart items:", cartItems); // Debugging log

    const itemList = document.querySelector(".item-list");
    const subtotalElement = document.getElementById("subtotal");
    const itemCount = document.getElementById("item-count");
    const emptyCartMessage = document.getElementById("empty-cart");

    function updateCart() {
        itemList.innerHTML = "";
        let subtotal = 0;

        if (cartItems.length === 0) {
            emptyCartMessage.style.display = "block";
            return;
        } else {
            emptyCartMessage.style.display = "none";
        }

        cartItems.forEach((item, index) => {
            // console.log("Item being added to cart:", item); // Debugging log
            
            // Fix: Extract numeric price from `newPrice`
            let numericPrice = parseFloat(item.newPrice.replace("£", "")); 

            if (!item || !item.name || !numericPrice || !item.image) return;

            let itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <p class="item-title">${item.name}</p>
                    <p class="item-price">£ ${numericPrice.toFixed(2)}</p>
                </div>
                <div class="item-actions">
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;

            itemList.appendChild(itemElement);
            subtotal += numericPrice;
        });

        subtotalElement.textContent = subtotal.toFixed(2);
        itemCount.textContent = cartItems.length;
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // Remove item from cart
    itemList.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.getAttribute("data-index");
            cartItems.splice(index, 1);
            updateCart();
        }
    });

    // Checkout button
    document.getElementById("checkout").addEventListener("click", function () {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Proceeding to checkout...");
            // localStorage.removeItem("cart");
            window.location.href = "./checkout.html"; 
        }
    });

    updateCart();
});
