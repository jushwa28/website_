
var images = [
"cleanser.jpg",
"cutieelogo.jpg",
"gel.jpg"
];
var num = 0;
function next() {
var slider = document.getElementById("slider");
num++;
if(num >= images.length) {
num = 0;
}
slider.src = images[num];
}
function prev() {
var slider = document.getElementById("slider");
num--;
if(num < 0) {
num = images.length-1;
}
slider.src = images[num];
}
// Array of image URLs
const images = [
    "cleanser.jpg",
    "cleanser1.jpg",
    "cleanser2.jpg",
    "cleanser3.jpg",
    "cleanser4.jpg",
    "cleanser5.jpg"
];

let currentIndex = 0;

// Reference the image element
const slider = document.getElementById("slider");

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image if at the end
    slider.src = images[currentIndex];
}

// Add event listener to the image for swapping
slider.addEventListener("click", showNextImage);
