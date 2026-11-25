// Site-wide scripts. Keep this small; page-specific scripts go in each page's Scripts section.

// Close the mobile menu after tapping a link that jumps within the page.
document.querySelectorAll('#mainNav a[href^="/#"]').forEach(function (link) {
    link.addEventListener('click', function () {
        var menu = document.getElementById('mainNav');
        if (menu.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
