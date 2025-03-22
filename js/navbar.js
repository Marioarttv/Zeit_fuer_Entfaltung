// Function to handle navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const brandText = document.querySelector('.brand-text');

    if (navbar) {
        // Check initial scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        }

        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
    initNavbarScroll();
});

// For Blazor, we also need to handle the case when navigation occurs
// without a full page reload
window.blazorExtensions = {
    initNavbarScroll: function () {
        initNavbarScroll();
    }
};