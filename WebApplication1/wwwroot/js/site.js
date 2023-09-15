const animatedElement = document.getElementById("animated-element");

function animateElement() {
    animatedElement.style.transform = "translateX(200px)";
}

// Add a click event listener to trigger the animation
animatedElement.addEventListener("click", animateElement);
