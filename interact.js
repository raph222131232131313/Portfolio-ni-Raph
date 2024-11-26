window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    // Add more image paths as needed
];

let currentIndex = 0;

function showNextImage(index) {
    currentIndex = index;

    const imageElement = document.querySelectorAll('.gallery-item img')[currentIndex];
    // Apply the next image logic if needed, or add interactions.
    alert("You clicked on Image " + (currentIndex + 1)); // Example interaction
}
