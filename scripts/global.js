const btn = document.getElementById('menu-btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
});

// Active status on current page
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        let linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

// Auto update to copyright year
document.getElementById('autoyear').innerHTML = new Date().getUTCFullYear();