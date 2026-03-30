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
            if (card) {card.classList.remove('overlay-active');}
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Instant Reaction for "Add to Cart" and "Store Finder" (INP Optimization)
    const storeBtn = document.getElementById('find-store-btn');
    if (storeBtn) {
        storeBtn.addEventListener('click', () => {
            const input = document.getElementById('zipcode-input');
            const results = document.getElementById('store-list');
            
            // Immediate UI feedback
            storeBtn.innerText = "SEARCHING...";
            
            // Simulate geo-lookup (Keep it fast < 200ms for UI shift)
            setTimeout(() => {
                storeBtn.innerText = "FIND NEAR ME";
                if (input.value) {
                    results.style.opacity = "0.5";
                    setTimeout(() => { 
                        results.style.opacity = "1";
                        // Scroll to results
                        results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            }, 150);
        });
    }

    const cartBtns = document.querySelectorAll('.btn-full');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Immediate feedback
            const originalText = btn.innerText;
            btn.innerText = "ADDING...";
            btn.style.backgroundColor = "var(--color-bg-dark)";
            btn.style.color = "white";
            
            setTimeout(() => {
                btn.innerText = "ADDED TO CART";
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.color = "";
                }, 1500);
            }, 300);
        });
    });
});
