document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search');
    const mainContent = document.querySelector('main');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mainContent.classList.toggle('shift-down'); // Shift the main content down when the nav is active
    });

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (!navLinks.classList.contains('active')) {
            mainContent.classList.remove('shift-down'); // Ensure main content doesn't shift when only search is active
        }
    });
});
