document.addEventListener("DOMContentLoaded", function() {
    // Dropdown Menu Toggle (Mobile-Friendly)
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation();
            this.querySelector(".dropdown-menu").classList.toggle("show");
        });
    });

    document.addEventListener("click", function(e) {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu && !dropdown.contains(e.target)) {
                menu.classList.remove("show");
            }
        });
    });

    // Search Bar Button
    const searchButton = document.querySelector(".search-bar button");
    if (searchButton) {
        searchButton.addEventListener("click", function() {
            this.textContent = "Searching...";
            setTimeout(() => {
                this.textContent = "Go";
            }, 500);
        });
    }

    // Form Validation & Success Message
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            let isValid = true;
            this.querySelectorAll("input[required], textarea[required]").forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = "red";
                    isValid = false;
                } else {
                    input.style.borderColor = "";
                }
            });

            if (!isValid) {
                alert("Please fill out all required fields.");
            } else {
                alert("Thanks! We'll be in touch!"); 
                this.reset(); 
            }
        });
    });

    // Breadcrumb Navigation
    const breadcrumbs = {
        "index.html": "Home",
        "cat.html": "Home > Pet Information > Cats",
        "dog.html": "Home > Pet Information > Dogs",
        "bird.html": "Home > Pet Information > Birds",
        "contact.html": "Home > About Us > Contact",
        "faq.html": "Home > About Us > FAQ"
    };
    const path = window.location.pathname.split("/").pop();
    if (breadcrumbs[path]) {
        const breadcrumbNav = document.createElement("div");
        breadcrumbNav.innerHTML = `<p>${breadcrumbs[path]}</p>`;
        breadcrumbNav.style.padding = "10px";
        breadcrumbNav.style.backgroundColor = "#F3F3F3";
        document.body.insertBefore(breadcrumbNav, document.body.firstChild);
    }

    // Highlight Active Page in Navigation
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });

    // Back to Top Button
    let backToTopButton = document.getElementById("backToTop");
    
    if (!backToTopButton) {
        backToTopButton = document.createElement("button");
        backToTopButton.id = "backToTop";
        backToTopButton.innerText = "↑ Back to Top";
        document.body.appendChild(backToTopButton);
    }

    backToTopButton.style.display = "none";

    window.addEventListener("scroll", function () {
        backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
