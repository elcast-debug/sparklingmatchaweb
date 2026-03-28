window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.remove();
        }, 500); // match the CSS transition duration
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const svg = mobileBtn.querySelector('svg');
            if (navLinks.classList.contains('active')) {
                // Change to 'X'
                svg.innerHTML = '<path d="M6 6L18 18M6 18L18 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            } else {
                // Restore hamburger
                svg.innerHTML = '<path d="M3 12H21M3 6H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            }
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const svg = mobileBtn.querySelector('svg');
                svg.innerHTML = '<path d="M3 12H21M3 6H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            });
        });
    }
    // Product Overlays
    const discoverBtns = document.querySelectorAll('.discover-btn');
    const backBtns = document.querySelectorAll('.back-btn');

    discoverBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                card.classList.add('overlay-active');
            }
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                card.classList.remove('overlay-active');
            }
        });
    });
});
