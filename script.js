
/* ===== 1. Dynamic Year in Footer ===== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ===== 2. Active Navigation on Scroll ===== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-links li a");

function updateActiveNav() {

    let current = "";

    sections.forEach((section) => {

        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }

    });

    navLinks.forEach((link) => {

        // Default link color
        link.style.color = "white";

        // Highlight active section
        if (current && link.getAttribute("href") === `#${current}`) {
            link.style.color = "var(--secondary-color)";
        }

    });
}

// Run when user scrolls
window.addEventListener("scroll", updateActiveNav);

// Highlight correct section on page load
updateActiveNav();


/* ===== 3. Resume Download Button ===== */

const downloadBtn = document.getElementById("download-btn");

if (downloadBtn) {

    downloadBtn.addEventListener("click", () => {
        console.log("Resume download clicked");
    });

}


/* ===== 4. LinkedIn Button ===== */

const linkedinBtn = document.getElementById("linkedin-btn");

if (linkedinBtn) {

    linkedinBtn.addEventListener("click", () => {
        console.log("LinkedIn profile clicked");
    });

}


/* ===== 5. GitHub Button ===== */

const githubBtn = document.getElementById("github-btn");

if (githubBtn) {

    githubBtn.addEventListener("click", () => {
        console.log("GitHub profile clicked");
    });

}
