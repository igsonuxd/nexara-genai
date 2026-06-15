document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    }

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) { link.classList.add('active'); }
    });

    const corporateForm = document.querySelector('.corporate-form');
    if (corporateForm) {
        corporateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Transmission Success. Project technical blueprint data has been routed.');
            corporateForm.reset();
        });
    }
});
