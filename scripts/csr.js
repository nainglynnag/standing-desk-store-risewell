document.addEventListener("DOMContentLoaded", function () {
    const newsData = [
        {
            title: "Team Building and Save The World Event",
            media: '<video src="src/video/vdo3.mp4" controls></video>',
            shortText: "On May 25, 2024, our team participated in an extraordinary CSR activity that drew us all closer together...",
            fullText: "On May 25, 2024, our team participated in an extraordinary CSR activity that drew us all closer together. We spent the day helping at a local animal shelter, cleaning kennels, walking dogs, and playing with the animals. This team-building exercise not only enhanced our ties but also had a beneficial effect on the neighborhood. Everyone departed feeling more connected and fulfilled, knowing they had contributed to a worthwhile cause. The experience reminded us of the importance of collaboration and giving back, making it an unforgettable day for everyone involved.",
        },
        {
            title: "Yoga Activities",
            media: '<img src="src/images/csr3.jpg" alt="yoga-activity"/>',
            shortText: "Our standing desk business practiced yoga on April 22, 2024. Our employees and participants saw the clear health advantages from yoga, such as increased flexibility, less worry, and better mental concentration...",
            fullText: "Our standing desk business practiced yoga on April 22, 2024. Our employees and participants saw the clear health advantages from yoga, such as increased flexibility, less worry, and better mental concentration. This event was part of our commitment to promoting healthy, balanced working lifestyles. By adding yoga into our health program, we wanted to improve our team's physical and mental well-being, finally improving efficiency and work happiness. The workshop was a smash, leaving everyone feeling refreshed and more linked, showing the importance of holistic health practices in a lively work setting.",
        },
        {
            title: "Sport: Football Activities",
            media: '<img src="src/images/csr4.jpg" alt="women-football-cup/>',
            shortText: "The Autumn football activity took place between February 1 and February 14, 2024, with both men and women participating...",
            fullText: "The Autumn football activity took place between February 1 and February 14, 2024, with both men and women participating. This thrilling event drew football lovers for two weeks of fun and competition. Participants enjoyed daily matches, skill-building lectures, and community-building events. Everyone, from novices to experienced gamers, had the opportunity to develop their skills while making new friends. The event not only encouraged physical health, but also a sense of community and collaboration. It was an excellent opportunity to keep active and interact with other football fans. Attendees departed with lasting memories and a renewed passion for the sport.",
        }
    ];

    const newsContainer = document.getElementById("news-container");
    const paginationContainer = document.getElementById("pagination");
    const articlesPerPage = 2;
    let currentPage = 1;

    function renderNews() {
        newsContainer.innerHTML = "";
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const paginatedNews = newsData.slice(startIndex, endIndex);

        paginatedNews.forEach((article, index) => {
            const newsCard = document.createElement("div");
            newsCard.classList.add("new-card");

            newsCard.innerHTML = `
                <h3>${article.title}</h3>
                <div class="media-container">${article.media}</div>
                <p class="short-text">${article.shortText} <span class="read-more" style="color: blue; cursor: pointer;">Read More...</span></p>
                <p class="full-text" style="display: none;">${article.fullText} <span class="read-less" style="color: red; cursor: pointer;">Read Less</span></p>
                <hr/>
            `;

            // Toggle Read More / Read Less
            const readMoreBtn = newsCard.querySelector(".read-more");
            const readLessBtn = newsCard.querySelector(".read-less");
            const shortText = newsCard.querySelector(".short-text");
            const fullText = newsCard.querySelector(".full-text");

            readMoreBtn.addEventListener("click", function () {
                shortText.style.display = "none";
                fullText.style.display = "block";
            });

            readLessBtn.addEventListener("click", function () {
                shortText.style.display = "block";
                fullText.style.display = "none";
            });

            newsContainer.appendChild(newsCard);
        });

        renderPagination();
    }

    function renderPagination() {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(newsData.length / articlesPerPage);

        const prevButton = document.createElement("a");
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.href = "#";
        prevButton.onclick = () => changePage(currentPage - 1);
        paginationContainer.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("a");
            pageBtn.innerHTML = `<i class="fas fa-circle"></i>`;
            pageBtn.href = "#";
            pageBtn.onclick = () => changePage(i);
            if (i === currentPage) {
                pageBtn.classList.add("active");
            }
            paginationContainer.appendChild(pageBtn);
        }

        const nextButton = document.createElement("a");
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.href = "#";
        nextButton.onclick = () => changePage(currentPage + 1);
        paginationContainer.appendChild(nextButton);
    }

    function changePage(newPage) {
        const totalPages = Math.ceil(newsData.length / articlesPerPage);
        if (newPage < 1 || newPage > totalPages) return;
        currentPage = newPage;
        renderNews();
    }

    renderNews();
});
