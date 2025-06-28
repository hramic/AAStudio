if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
    });
}

const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const goTopBtn = document.getElementById("goTopBtn");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        // Accessibility toggle aria-expanded attribute
        const expanded =
            toggle.getAttribute("aria-expanded") === "true" ? "false" : "true";
        toggle.setAttribute("aria-expanded", expanded);
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
});

if (goTopBtn) {
    goTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        hero.classList.add('shrink');
    } else {
        hero.classList.remove('shrink');
    }
});