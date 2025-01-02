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




let galleryItems = document.querySelectorAll('.gallery-item');

// Function to fade in and out images
function fadeImages() {
    // Randomly choose some items to hide and others to show
    galleryItems.forEach(item => {
        if (Math.random() > 0.5) { // 50% chance to fade out
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
}

// Initially set some images to be hidden
fadeImages();

// Set an interval to update the images every 3 seconds
setInterval(fadeImages, 3000);

