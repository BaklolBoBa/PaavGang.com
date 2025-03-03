// script.js - Enhancing website with animations & interactivity

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Button hover animation
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Lightbox effect for images
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            let lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);
            
            let imgClone = img.cloneNode();
            imgClone.style.maxWidth = "90%";
            imgClone.style.maxHeight = "90vh";
            imgClone.style.border = "5px solid white";
            imgClone.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            
            lightbox.appendChild(imgClone);
            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });
});
