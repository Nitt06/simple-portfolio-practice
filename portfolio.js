document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('header nav').classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').split('.')[0];
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(`#${targetId}`).style.display = 'block';
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        document.querySelector('header nav').classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');

    if (localStorage.getItem('theme') === 'dark') {
        themeLink.href = 'portfolio-dark.css';
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            themeLink.href = 'portfolio-dark.css';
            localStorage.setItem('theme', 'dark');
        } else {
            themeLink.href = 'portfolio.css';
            localStorage.setItem('theme', 'light');
        }
    });
});

