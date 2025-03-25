document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".addtocart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            if (!card) return;

            const product = {
                name: card.querySelector(".cardtitle").innerText,
                description: card.querySelector(".card-desc").innerText,
                oldPrice: card.querySelector(".card-oldprice").innerText,
                newPrice: card.querySelector(".card-newprice").innerText,
                image: card.querySelector(".defaultimg").src,
                quantity: 1,
            };

            addToCart(product);
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingProduct = cart.find(item => item.name === product.name);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    }
});
