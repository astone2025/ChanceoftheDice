document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const expanded = navLinks.classList.contains('active');
            menuButton.setAttribute('aria-expanded', expanded);
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!event.target.closest('nav')) {
                navLinks.classList.remove('active');
                if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
