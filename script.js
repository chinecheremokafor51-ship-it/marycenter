const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".list a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});