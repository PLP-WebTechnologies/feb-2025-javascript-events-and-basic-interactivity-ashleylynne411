document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "You clicked the button!";
    document.getElementById("message").style.color = "red"; // Change text color
});

document.getElementById("colorBtn").addEventListener("click", function() {
    this.style.backgroundColor = "red";
});

let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    let imgElement = document.getElementById("gallery");
    imgElement.style.opacity = "0"; // Fade out
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = "1"; // Fade in
    }, 500);
}

document.getElementById("emailInput").addEventListener("input", function() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let feedback = document.getElementById("emailFeedback");

    if (emailRegex.test(this.value)) {
        feedback.textContent = "✅ Valid Email";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Invalid Email";
        feedback.style.color = "red";
    }
});
