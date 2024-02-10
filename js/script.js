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
