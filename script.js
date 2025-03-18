// script.js - Enhancing website with animations & interactivity (PC Optimized)

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
            
            lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            lightbox.style.display = "flex";
            lightbox.style.justifyContent = "center";
            lightbox.style.alignItems = "center";
            lightbox.style.position = "fixed"; 
            lightbox.style.top = "0";
            lightbox.style.left = "0";
            lightbox.style.width = "100%";
            lightbox.style.height = "100%";
            lightbox.style.zIndex = "1000";

            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
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
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.5s ease-in-out";
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
    const darkModeContainer = document.createElement("div");
    darkModeContainer.className = "dark-mode-container";

    const darkModeLabel = document.createElement("span");
    darkModeLabel.className = "dark-mode-label";
    darkModeLabel.textContent = "Dark Mode";

    const darkModeToggle = document.createElement("label");
    darkModeToggle.className = "dark-mode-toggle";
    darkModeToggle.htmlFor = "dark-mode-switch";

    const darkModeInput = document.createElement("input");
    darkModeInput.type = "checkbox";
    darkModeInput.id = "dark-mode-switch";

    const darkModeSlider = document.createElement("span");
    darkModeSlider.className = "slider round";

    darkModeToggle.appendChild(darkModeInput);
    darkModeToggle.appendChild(darkModeSlider);
    darkModeContainer.appendChild(darkModeLabel);
    darkModeContainer.appendChild(darkModeToggle);

    // Add the toggle to the navigation bar
    document.querySelector("nav .container").appendChild(darkModeContainer);

    // Load saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeInput.checked = true;
    }

    darkModeInput.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
        });
        document.body.style.display = 'none';
        void document.body.offsetWidth; // Trigger repaint
        document.body.style.display = '';
  });