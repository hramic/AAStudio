if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
    });
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const pageContent = document.querySelector('.page-content');
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
    pageContent.classList.toggle('blur');

    document.body.classList.toggle("noscroll");
    document.documentElement.classList.toggle("noscroll");

    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            pageContent.classList.remove("blur");

            document.body.classList.remove("noscroll");     // 👈 I OVDJE
            document.documentElement.classList.remove("noscroll");

            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
});


const goTopBtn = document.getElementById("goTopBtn");
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
    posX += (mouseX - posX) * 0.6;
    posY += (mouseY - posY) * 0.6;
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

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // animacija se aktivira samo jednom
            }
        });
    }, { threshold: 0.2 });

    steps.forEach(step => {
        observer.observe(step);
    });
});
