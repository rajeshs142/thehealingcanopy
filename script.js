document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('#main-header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute('href'); // Get href value (e.g., #vision)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for sticky header if needed
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Smooth Scrolling for Hero Button ---
    const heroLink = document.querySelector('#hero .scroll-link');
    if (heroLink) {
         heroLink.addEventListener('click', function(e) {
            e.preventDefault();
             const targetId = this.getAttribute('href');
             const targetElement = document.querySelector(targetId);
              if (targetElement) {
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
         });
    }


    // --- Update Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Contact Form Handling (Client-Side Feedback Only) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // **IMPORTANT**: This only shows feedback on the page.
            // You NEED a backend service (like Formspree, Netlify Forms, or your own server code)
            // connected to the form's 'action' attribute to actually receive the email.

            // Simulate sending (replace with actual AJAX call if using custom backend)
            formStatus.textContent = 'Sending...';
            formStatus.style.color = 'orange';

            // Example using Fetch API if you set up a backend endpoint
            /*
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { // Needed for some services like Formspree
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json()) // Or .text() depending on backend
            .then(data => {
                formStatus.textContent = 'Thank you! Your message has been sent.';
                formStatus.style.color = 'green';
                contactForm.reset(); // Clear the form
            })
            .catch(error => {
                formStatus.textContent = 'Oops! There was a problem sending your message.';
                formStatus.style.color = 'red';
                console.error('Form submission error:', error);
            });
            */

           // Simple Timeout for Demo without backend
            setTimeout(() => {
                // Check if the action attribute is set to a real endpoint.
                // If it's '#' or empty, it won't actually send.
                if (contactForm.action && contactForm.action !== window.location.href + '#') {
                     formStatus.textContent = 'Thank you! Your message has been submitted.';
                     formStatus.style.color = 'green';
                     contactForm.reset();
                } else {
                    formStatus.textContent = 'Form backend not configured. Message not sent.';
                     formStatus.style.color = 'red';
                     console.warn('Contact form lacks a valid action URL.')
                }

            }, 1000); // Simulate network delay


        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking menu items
        const menuLinks = document.querySelectorAll('.main-nav a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

}); // End DOMContentLoaded