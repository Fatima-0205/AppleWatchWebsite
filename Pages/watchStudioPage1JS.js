const watch = document.getElementById("watch-img");
const button = document.getElementById("start-btn");

button.addEventListener("click", function(e) {
    e.preventDefault();

    // Apply scale animation
    watch.classList.remove("animate-scale-and-go");
    void watch.offsetWidth;
    watch.classList.add("animate-scale-and-go");


    // Save animation flag so next page knows
    sessionStorage.setItem("enteredFromStart", "true");

    // Navigate after animation
    setTimeout(() => {
        window.location.href = "watchSelectionPage.html";
    }, 1000); // match animation duration
});