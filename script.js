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
    document.querySelectorAll(".btn-primary").forEach(button => {
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

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle-label");
    const menu = document.querySelector("#menu");
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Typing animation for headings
    function typeEffect(element, speed) {
        const text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    const typingHeading = document.querySelector("header h2");
    if (typingHeading) {
        typeEffect(typingHeading, 100);
    }

    // Scroll animations
    const sections = document.querySelectorAll(".section");
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();

    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    function showTestimonial() {
        testimonials.forEach((test, index) => {
            test.style.display = index === currentTestimonial ? "block" : "none";
        });
    }
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial();
    }, 3000);
    showTestimonial();

    // Dark mode toggle
    const darkModeBtn = document.createElement("button");
    darkModeBtn.innerText = "Toggle Dark Mode";
    darkModeBtn.classList.add("dark-mode-btn");
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});