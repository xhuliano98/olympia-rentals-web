document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Check if the target section is at the top of the viewport
        const topPosition = targetSection.getBoundingClientRect().top;

        if (Math.abs(topPosition) > 1) { // 1px threshold to allow for minor variations
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - section.offsetHeight / 3) {
            currentSection = section.id;
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.href.includes(currentSection)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});
