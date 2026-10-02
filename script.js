// 1. Set dynamic year in the footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 2. Active navigation highlighting based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href').includes(current)) {
            link.style.color = 'var(--secondary-color)';
        }
    });
});

// 3. Download Button Event Listener (Tracker only, HTML does the download)
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        console.log("Resume download tracked.");
    });
}

// 4. LinkedIn Button Click Listener
const linkedinBtn = document.getElementById('linkedin-btn');
if (linkedinBtn) {
    linkedinBtn.addEventListener('click', () => {
        console.log("Visitor clicked the LinkedIn profile link.");
    });
}