 let currentIndex = 0;
 const slideContainer = document.getElementById('slideContainer');
 const slides = document.querySelectorAll('#slideContainer img');

 function showSlide(index) {
     if (index >= slides.length) currentIndex = 0;
     else if (index < 0) currentIndex = slides.length - 1;
     else currentIndex = index;
     slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
 }

 function nextSlide() {
     showSlide(currentIndex + 1);
 }

 function prevSlide() {
     showSlide(currentIndex - 1);
 }