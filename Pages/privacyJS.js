const originalText = "Privacy. That’s Apple.";
const textElement = document.getElementById("privacy-text");
const totalChars = originalText.length;
const maxScroll = 250;
const img = document.getElementById("img");
const message = document.getElementById("privacy-message");

window.addEventListener("scroll", () => {
    const scrollY = Math.min(window.scrollY, maxScroll);
    const percentage = scrollY / maxScroll;
    const charsToReplace = Math.floor(percentage * totalChars);

    let newText = "";
    for (let i = 0; i < totalChars; i++) {
        newText += i < charsToReplace ? "." : originalText[i];
    }

    textElement.textContent = newText;

    if (charsToReplace === totalChars) {
        img.classList.add("blur");
        message.classList.add("show");
        textElement.classList.add("hidden"); // fade out dots
    } else {
        img.classList.remove("blur");
        message.classList.remove("show");
        textElement.classList.remove("hidden"); // fade back in
    }
});
const overlay = document.getElementById("blackOverlay");
const appleParagraph = document.querySelector(".description-paragraph");

window.addEventListener("scroll", () => {
    const rect = appleParagraph.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // When the bottom of the Apple Intelligence paragraph is above 50% of screen
    if (rect.bottom < windowHeight * 0.5) {
        overlay.classList.add("active");
    } else {
        overlay.classList.remove("active");
    }
});
// Video autoplay on scroll
const videos = document.querySelectorAll(".scroll-video");

function handleVideoAutoplay(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause(); // Optional: pause if not in view
        }
    });
}

const videoObserver = new IntersectionObserver(handleVideoAutoplay, {
    threshold: 0.4 // Start playing when 40% is visible
});

videos.forEach(video => {
    videoObserver.observe(video);
});