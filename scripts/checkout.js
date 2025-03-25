document.addEventListener("DOMContentLoaded", function () {
    const orderSummaryContainer = document.getElementById("order-summary");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("place-order");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    function renderOrderSummary() {
        orderSummaryContainer.innerHTML = "";
        let total = 0;

        if (cartItems.length === 0) {
            orderSummaryContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceElement.textContent = "0.00";
            return;
        }

        cartItems.forEach((item) => {
            let numericPrice = parseFloat(item.newPrice.replace("£", ""));
            total += numericPrice;

            let itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <p>${item.name} - £${numericPrice.toFixed(2)}</p>
            `;
            orderSummaryContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    checkoutButton.addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let city = document.getElementById("city").value.trim();
        let zip = document.getElementById("zip").value.trim();

        let cardNumber = document.getElementById("card-number").value.trim();
        let expiry = document.getElementById("expiry").value.trim();
        let cvv = document.getElementById("cvv").value.trim();

        if (!name || !email || !address || !city || !zip) {
            alert("Please fill out all billing details.");
            return;
        }

        if (!/^\d{16}$/.test(cardNumber)) {
            alert("Invalid card number. Please enter a 16-digit number.");
            return;
        }

        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            alert("Invalid expiry date format. Use MM/YY.");
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            alert("Invalid CVV. Enter a 3-digit number.");
            return;
        }

        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        window.location.href = "index.html"; // Redirect to a confirmation page
    });

    renderOrderSummary();
});
