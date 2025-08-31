document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("img, .section, .slider-container, .features, .watch-lineup");
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    elements.forEach(el => observer.observe(el));

    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;
        slider.addEventListener("mousedown", e => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
        slider.addEventListener("touchstart", e => {
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("touchend", () => {
            isDown = false;
        });
        slider.addEventListener("touchmove", e => {
            if (!isDown) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    const zoomImages = document.querySelectorAll("img");
    zoomImages.forEach(img => {
        img.style.transition = "transform 0.3s ease";
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.05)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

    const resizeHandler = () => {
        const sliderCards = document.querySelectorAll(".slide-card");
        sliderCards.forEach(card => {
            if (window.innerWidth < 768) {
                card.style.flex = "0 0 80%";
            } else {
                card.style.flex = "0 0 280px";
            }
        });
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
});