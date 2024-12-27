
    document.addEventListener('DOMContentLoaded', function() {
        // Example: Change background color of the login container on hover
        const loginContainer = document.querySelector('.login-container');
        loginContainer.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        });
        loginContainer.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        });
    
        // Example: Display an alert on form submission
        const loginForm = document.querySelector('.login-form form');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            alert('Login successful!');
            // Redirect to the main page
            window.location.href = 'index.html';
        });
    
        // Example: Add smooth scroll to top functionality
        const toTopBtn = document.createElement('button');
        toTopBtn.textContent = 'Top';
        toTopBtn.style.position = 'fixed';
        toTopBtn.style.bottom = '20px';
        toTopBtn.style.right = '20px';
        toTopBtn.style.display = 'none';
        document.body.appendChild(toTopBtn);
    
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                toTopBtn.style.display = 'block';
            } else {
                toTopBtn.style.display = 'none';
            }
        });
    
        toTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    