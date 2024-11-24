// Get modal elements
const modal = document.getElementById("info-modal");
const infoBtn = document.getElementById("info-btn");
const closeBtn = document.querySelector(".close-btn");

// Open the modal
infoBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
