document.addEventListener('DOMContentLoaded', () => {
    // Hero section animations
    gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
    gsap.to('.hero p', { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' });
    gsap.to('.cta-buttons', { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' });

    // Feature cards animation
    gsap.to('.feature-card', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.features', start: 'top center' }
    });
});

// Form submission handler
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        alert('Signup successful!');
        this.reset();
    } else {
        alert('Please fill in all fields!');
    }
});
