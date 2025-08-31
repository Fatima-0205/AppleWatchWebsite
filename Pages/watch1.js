const fadeElements = document.querySelectorAll('.watch-image, .bandImage, .bandImage2, .bandImage3, .bandImage4, .bandImage5, .text-section, .studio-section');

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
});

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();

const bandImages = document.querySelectorAll('.bandImage, .bandImage2, .bandImage3, .bandImage4, .bandImage5');

bandImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.4s ease";
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = "scale(1)";
    });
});

const navBar = document.querySelector('.nav-buttons');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    } else {
        navBar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
});

const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 14px";
backToTop.style.fontSize = "18px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "#0071e3";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});