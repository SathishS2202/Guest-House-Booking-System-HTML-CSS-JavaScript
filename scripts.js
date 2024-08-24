document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-section .content');
    const windowHeight = window.innerHeight;
    const scrollPos = window.scrollY;

    if (scrollPos > windowHeight * 0.3) {
        heroContent.style.transform = 'translateY(-50px)';
        heroContent.style.opacity = '0.7';
    } else {
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.opacity = '1';
    }
});

window.addEventListener('scroll', () => {
    const aboutImage = document.querySelector('#about-us img');
    const aboutText = document.querySelector('.about-text');
    const scrollPos = window.scrollY;
    const aboutOffset = aboutImage.offsetTop;

    if (scrollPos > aboutOffset - window.innerHeight * 0.75) {
        aboutImage.classList.add('fade-in');
        aboutText.classList.add('fade-in');
    }
});

document.querySelectorAll('.room-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to booking page...');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const servicesContent = document.querySelectorAll(".services-content, .services-image");

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-right");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    servicesContent.forEach(content => {
        observer.observe(content);
    });
});

document.querySelector('.book-now').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
});

const backToTopBtn = document.createElement('div');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});
