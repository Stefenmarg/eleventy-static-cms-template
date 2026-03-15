// DOM Element Cache
const DOM = {
    header: {
        navbar: document.getElementById("navbar"),
        toggle: document.getElementById("menu-toggle"),
        menu: document.getElementById("navbar-solid")
    },
    footer: {
        year: document.getElementById("year")
    }
}


// Handle the height of the header
document.documentElement.style.setProperty("--navbar-height", `${DOM.header.navbar.offsetHeight}px`);

// Handle the hamburger menu toggle
DOM.header.toggle.addEventListener("click", () => {
    const isOpen = !DOM.header.menu.classList.contains("hidden");

    DOM.header.menu.classList.toggle("hidden");
    DOM.header.toggle.setAttribute("aria-expanded", String(!isOpen));
});

// Handle the year shown in the footer
DOM.footer.year.textContent = new Date().getFullYear().toString();