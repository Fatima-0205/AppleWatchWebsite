document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".feature-section, .design-section, .description-specs-wrapper, .image-section, .running, .ideal, .lineup-section");
    const cards = document.querySelectorAll(".card");
    const headings = document.querySelectorAll("h1, .bold-heading, .large-text");
    const specs = document.querySelectorAll(".specs div h1");
    const images = document.querySelectorAll("img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        observer.observe(section);
    });

    headings.forEach(heading => {
        heading.style.transition = "color 0.6s ease";
    });

    window.addEventListener("scroll", () => {
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 1.2) {
                heading.style.color = "#ff9500";
            } else {
                heading.style.color = heading.classList.contains("orange-text") ? "orange" : "#fff";
            }
        });

        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * 0.05;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                image.style.transform = `translateY(${offset}px) scale(1)`;
            }
        });
    });

    cards.forEach(card => {
        card.style.transition = "transform 0.3s ease";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    specs.forEach(spec => {
        spec.style.transition = "transform 0.4s ease, color 0.4s ease";
        spec.addEventListener("mouseenter", () => {
            spec.style.transform = "scale(1.2)";
            spec.style.color = "#ff9500";
        });
        spec.addEventListener("mouseleave", () => {
            spec.style.transform = "scale(1)";
            spec.style.color = "#fff";
        });
    });

    images.forEach(image => {
        image.style.transition = "transform 0.6s ease, opacity 0.6s ease";
        image.style.opacity = "0";
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    image.style.opacity = "1";
                    image.style.transform = "scale(1.05)";
                    setTimeout(() => image.style.transform = "scale(1)", 400);
                }
            });
        }, { threshold: 0.3 });
        imgObserver.observe(image);

        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.08)";
        });
        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });

    if (window.innerWidth < 768) {
        const cardContainers = document.querySelectorAll(".card-container");
        cardContainers.forEach(container => {
            container.style.flexWrap = "wrap";
            container.style.justifyContent = "center";
            container.style.paddingLeft = "0";
            container.style.marginLeft = "0";
        });
    }
});