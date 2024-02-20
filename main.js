document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const tabId = this.getAttribute("data-tab");

            tabContents.forEach(function(content) {
                if (content.getAttribute("id") === tabId) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });

            tabLinks.forEach(function(link) {
                if (link.getAttribute("data-tab") === tabId) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });
    });
});
