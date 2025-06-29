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
const cursor = document.querySelector(".cursor");
const arrow = document.querySelector(".cursor-arrow");
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - cursor.offsetWidth / 2;
    mouseY = e.clientY - cursor.offsetHeight / 2;
});

function animate() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
    requestAnimationFrame(animate);
}
animate();

// Klikabilni hover efekat (a, button, .clickable)
const clickableElements = document.querySelectorAll("a, button, .clickable");

clickableElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
    });
    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
    });
});

