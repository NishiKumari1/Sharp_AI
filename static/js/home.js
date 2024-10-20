document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically generate navbar based on home page links
    function generateNavbar() {
        const navbar = document.querySelector('.navbar-nav');
        const multiPageGrid = document.querySelector('.multi-page-grid-container');

        if (!navbar || !multiPageGrid) {
            return;
        }

        const navbarLinks = navbar.querySelectorAll('.nav-link');

        navbarLinks.forEach(navLink => {
            const gridItem = document.createElement('div');
            gridItem.className = 'multi-page-grid-item';

            const anchor = document.createElement('a');
            anchor.href = navLink.getAttribute('href');
            anchor.innerHTML = `<p>${navLink.textContent}</p>`;

            gridItem.appendChild(anchor);
            multiPageGrid.appendChild(gridItem);
        });
    }

    // Initialize the page
    generateNavbar();
});







