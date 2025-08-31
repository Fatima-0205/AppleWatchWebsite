 const bandData = [{
     image: "../Images/CompleteWatch1.png",
     name: "Solo Loop",
     color: "MultiColor",
     price: "$99"
 }, {
     image: "../Images/completeWatch3.png",
     name: "Sport Loop",
     color: "Blue Sand",
     price: "$59"
 }, {
     image: "../Images/completeWatch4.png",
     name: "Sport Loop",
     color: "Pride Edition",
     price: "$49"
 }, {
     image: "../Images/completeWatch5.png",
     name: "Stainless Steel",
     color: "Saddle Brown",
     price: "$99"
 }, {
     image: "../Images/CompleteWatch2.png",
     name: "Modern Buckle",
     color: "Forest Green",
     price: "$149"
 }, {
     image: "../Images/completeWatch6.png",
     name: "Milanese Loop",
     color: "Pink",
     price: "$99"
 }, {
     image: "../Images/completewatch7.png",
     name: "Braided Solo Loop",
     color: "Pride Edition",
     price: "$99"
 }];

 function selectBand(index) {
     const selected = bandData[index];
     document.getElementById("main-watch").src = selected.image;
     document.getElementById("band-name").textContent = selected.name;
     document.getElementById("band-color").textContent = `Color: ${selected.color}`;
     document.getElementById("band-price").textContent = `Price: ${selected.price}`;

     // Highlight selected band
     document.querySelectorAll(".band-item").forEach((item, i) => {
         item.classList.toggle("selected", i === index);
     });

     // Scroll up to the main watch preview
     document.getElementById("main-watch").scrollIntoView({
         behavior: "smooth"
     });
 }

 // Add event listeners for band items
 document.querySelectorAll(".band-item").forEach((item, index) => {
     item.addEventListener("click", () => selectBand(index));
 });