document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navbar = document.querySelector('.navbar');
    const buttons = document.querySelector('.buttons');

    hamburgerIcon.addEventListener('click', function() {
        navbar.classList.toggle('show');
        buttons.classList.toggle('show');
    });
});
