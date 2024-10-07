// Number of stars to create
const numStars = 100;

// Get the stars container
const starsContainer = document.querySelector('.stars');

// Function to create a star
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize position and size of the star
    const size = Math.random() * 3 + 1; // Size between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration

    starsContainer.appendChild(star);
}

// Create the stars
for (let i = 0; i < numStars; i++) {
    createStar();
}
