const header = document.querySelector(".header");
const toggle = document.getElementById("nav-toggle");

document.querySelectorAll("#mobileNav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        toggle.checked = false;

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (!target) return;

        const headerH = header.offsetHeight + 10; // طول الهيدر
        const top =
            target.getBoundingClientRect().top + window.scrollY - headerH;

        window.scrollTo({ top, behavior: "smooth" });
    });
});
