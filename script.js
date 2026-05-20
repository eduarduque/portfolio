// Typing animation
const phrases = [
    'CS Student @ Texas State',
    'AI Builder',
    'Bilingual Developer (EN/ES)',
    'Open to Internships',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => { isDeleting = true; }, 2200);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 45 : 80;
    setTimeout(type, speed);
}

type();

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .timeline-item, .about-grid, .contact-wrapper').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 220) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
});

// Close mobile nav on link click
navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksEl.classList.remove('open');
    });
});
