/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");


/* Open / Close Menu */

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* =========================================================
   CLOSE MENU AFTER CLICKING A LINK
========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN SCREEN RETURNS TO DESKTOP
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});