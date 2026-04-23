// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getAnimation(entry.target);
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0, 0) scale(1)';
        }
    });
}, observerOptions);

function getAnimation(element) {
    const animationType = element.getAttribute('data-animation');
    
    switch(animationType) {
        case 'fade-in':
            return 'fadeIn 0.8s ease-out forwards';
        case 'slide-up':
            return 'slideUp 0.8s ease-out forwards';
        case 'scale':
            return 'scaleIn 0.8s ease-out forwards';
        default:
            return 'fadeIn 0.8s ease-out forwards';
    }
}

// Observe all animated elements
document.querySelectorAll('[data-animation]').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.12)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});
