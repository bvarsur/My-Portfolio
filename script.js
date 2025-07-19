document.addEventListener("DOMContentLoaded", () => {

    /*   THEME TOGGLE  */
    const themeToggle = document.getElementById("theme-toggle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");

    const applyTheme = (theme) => {
        const isDark = theme === "dark";
        document.body.classList.toggle("dark-theme", isDark);
        themeToggle.setAttribute("aria-pressed", isDark);
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    };

    applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeToggle.setAttribute("aria-pressed", isDark);
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    });

    /*   BACK TO TOP BUTTON */
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /*    MOBILE NAVIGATION TOGGLE  */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("change"); // Animate hamburger ↔ X
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll("a").forEach(link =>
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.classList.remove("change");
            }
        })
    );
});

function toggleDetails(button) {
    const info = button.closest(".portfolio-item").querySelector(".more-info");
    const isVisible = info.style.display === "block";
    info.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Read More" : "Show Less";
}