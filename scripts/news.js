document.addEventListener("DOMContentLoaded", function () {
    const newsData = [
        {
            title: "Health benefits of Standing desks",
            media: '<video src="src/video/vdo1.mp4" controls></video>',
            shortText: "Switching to a standing desk may provide several health advantages, making your working more active and healthier...",
            fullText: "Switching to a standing desk may provide several health advantages, making your working more active and healthier. Prolonged sitting has been related to a variety of health problems, including obesity, diabetes, and heart disease. Using a standing desk may help you avoid the hazards linked with sedentary behavior. Standing workstations may also make you feel and think more positively. Being upright promotes movement, which enhances circulation and boosts focus and output. Standing has been linked in some study to increased calorie burning, which may aid in weight loss. To maximize the benefit, start by alternating between sitting and standing, extending your standing time progressively. Welcome to the change to a more active, healthy workday!..",
        },
        {
            title: "How can standing desks affect on your health?",
            media: '<img src="src/images/desk-computer-posture-ergonomics-sm.png" alt="health"/>',
            shortText: "Are you considering transitioning to a standing desk? It's a move that has the potential to improve health...",
            fullText: "Are you considering transitioning to a standing desk? It's a move that has the potential to improve health. Standing burns more calories than sitting. Standing workstations also encourage better posture and minimize stress on the spine, thus many users report less back discomfort. But that's not all: standing workstations may improve mood and energy levels, resulting in higher productivity and workplace engagement. However, adapt gently and utilize an anti-fatigue mat for enhanced comfort. Also, to minimize neck discomfort, increase your screen height and take frequent pauses to rest or move about. Embracing this little modification in your workstation configuration may lead to a healthier, more active lifestyle!...",
        },
        {
            title: "How will standing desks maintain?",
            media: '<img src="src/images/newsimg3.png" alt="maintain"/>',
            shortText: "Your standing/rising desk, like any other piece of furniture, requires some upkeep to be in good working order...",
            fullText: "Your standing/rising desk, like any other piece of furniture, requires some upkeep to be in good working order. Like with any other piece of furniture, your desk should never be overloaded. The mechanics may be strained as a result, wearing down sooner. Watch how much weight you place on your desk and try to distribute it equally.Above all, keep your desk clean. Wear and a drop in smoothness of the action might come from dust and debris building up on the surface and in the joints.Periodically, use a damp cloth or non-toxic cleaning solution to clean your desk. Every few weeks, briefly check everything and make any necessary loose component repairs...",
        },
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
