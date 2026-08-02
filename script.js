// =========================
// SWEETER THAAN HONEYY
// script.js
// =========================

// Fade in sections when scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// =========================
// Floating Hearts
// =========================

function createHeart() {

    const heart = document.createElement("div");
    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.opacity = "0.8";
    heart.style.transition = "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform =
            `translateY(-${window.innerHeight + 200}px) rotate(${Math.random()*360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6100);
}

setInterval(createHeart, 1200);

// =========================
// Active Navigation
// =========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Back To Top Button
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

Object.assign(topButton.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#ff4f9a",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 10px 20px rgba(0,0,0,.2)",
    zIndex: "9999",
    transition: ".3s"
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// =========================
// Gallery Hover Glow
// =========================

document.querySelectorAll(".gallery-item img").forEach((img) => {

    img.addEventListener("mouseenter", () => {
        img.style.filter = "brightness(1.05)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.filter = "brightness(1)";
    });

});

// =========================
// Console Message
// =========================

console.log("%c💖 Sweeter Thaan Honeyy Website Loaded!",
"color:#ff4f9a;font-size:18px;font-weight:bold;");
