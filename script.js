/**
 * Casablanca LP - Scroll Reveal Animation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        '.concept-content, .diff-item, .score-item, .tier-table-wrap, .cta-content, .gallery-item'
    );

    // Add reveal class to all elements
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    // Gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(el => {
        el.classList.remove('reveal');
    });

    // Intersection Observer for scroll reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.getElementById('hero');
    const heroImage = document.querySelector('.hero-image');

    if (hero && heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroHeight) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
});
