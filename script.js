function loadNavPageContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${page}`);
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = `<p>${error.message}</p>`;
        });
}

document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelectorAll('.nav ul li a').forEach(nav => {
            nav.classList.remove('active');
        });

        this.classList.add('active');

    });
});


document.addEventListener('DOMContentLoaded', () => {
    loadNavPageContent('home.html');
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
