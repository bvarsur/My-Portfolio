
const toggleBtn = document.getElementById("theme-toggle");
const backToTopBtn = document.getElementById("back-to-top");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Load theme preference
const savedTheme = localStorage.getItem("theme");
const isDarkPreferred = savedTheme === "dark" || (!savedTheme && prefersDark);

if (isDarkPreferred) {
    document.body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
    toggleBtn.setAttribute("aria-label", "Switch to light theme");
    toggleBtn.setAttribute("title", "Switch to light theme");
    toggleBtn.setAttribute("aria-pressed", "true");
}

toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    toggleBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggleBtn.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Back to top button visibility and scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


//   videos section 
function loadVideo(container, videoId) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.width = "100%";
    iframe.height = "315";
    container.innerHTML = "";
    container.appendChild(iframe);
} 
