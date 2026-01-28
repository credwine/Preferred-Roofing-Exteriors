// Enhanced Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const header = document.querySelector('.header');
    const body = document.body;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = navMobile.classList.toggle('active');
            this.classList.toggle('active');
            body.style.overflow = isActive ? 'hidden' : '';
        });
    }


    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.nav-mobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMobile.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Smooth scroll for anchor links with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Intersection Observer for fade-in animations - Removed


    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            }
        }, 16);
    }

    // Observe stat numbers and animate when visible
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.dataset.animated) {
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    if (number) {
                        statNumber.dataset.animated = 'true';
                        statNumber.textContent = '0' + (text.includes('+') ? '+' : '') + (text.includes('%') ? '%' : '');
                        animateCounter(statNumber, number, 2000);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-badge').forEach(badge => {
        statObserver.observe(badge);
    });

    // Enhanced form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                    input.addEventListener('input', function() {
                        this.style.borderColor = '';
                    }, { once: true });
                }
            });

            if (!isValid) {
                e.preventDefault();
                // Show error message
                const errorMsg = document.createElement('div');
                errorMsg.textContent = 'Please fill in all required fields';
                errorMsg.style.cssText = 'color: #ef4444; margin-top: 1rem; padding: 0.75rem; background: #fee2e2; border-radius: 8px;';
                form.appendChild(errorMsg);
                setTimeout(() => errorMsg.remove(), 5000);
            }
        });
    });

    // Fade-in animations removed - no animations on cards or sections

    // Add hover effect to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Ripple effect removed - no button animations

    // Performance: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-desktop a[href^="#"], .nav-mobile a[href^="#"]');

    function updateActiveNav() {
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', debounce(updateActiveNav, 100), { passive: true });
});
