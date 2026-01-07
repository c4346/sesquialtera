const images = [
    './images/profiles/2.jpg',
    './images/profiles/3.jpg',
    './images/profiles/4.jpg',
    './images/profiles/5.jpg',
    './images/profiles/6.jpg',
    './images/profiles/7.jpg',
    './images/profiles/8.jpg',
    './images/profiles/9.jpg',
    './images/profiles/10.jpg',
];

function getRandomImageSrc() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}


// Function to set the image source when the page loads
function displayRandomImage() {
    const imageElement = document.getElementById('randomProfile');
    if (imageElement) {
        imageElement.src = getRandomImageSrc();
    }
}

// Run the function when the document content is loaded
document.addEventListener('DOMContentLoaded', displayRandomImage);