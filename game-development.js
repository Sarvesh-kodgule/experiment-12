document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .tech-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Form submission handling
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                projectType: document.getElementById('projectType').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your request! We will contact you soon.');
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
            modal.hide();
            
            // Reset form
            quoteForm.reset();
        });
    }

    // Service card click handler
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link inside the card
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                return;
            }
            
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
    });
});