const watches = {
    se: "Apple Watch SE",
    series10: "Apple Watch Series 10",
    ultra2: "Apple Watch Ultra 2",
    galaxy7: "Samsung Galaxy Watch 7",
    galaxyUltra: "Samsung Galaxy Watch Ultra",
    galaxyClassic: "Galaxy Watch Classic"
};

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart-items");

function renderCart() {
    if (cart.length === 0) {
        cartDiv.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
        return;
    }

    const ul = document.createElement("ul");

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "item-checkbox";

        const nameSpan = document.createElement("span");
        nameSpan.className = "item-name";
        nameSpan.textContent = watches[item];

        const removeBtn = document.createElement("span");
        removeBtn.textContent = "❌";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = () => removeItem(index);

        li.appendChild(checkbox);
        li.appendChild(nameSpan);
        li.appendChild(removeBtn);
        ul.appendChild(li);
    });

    cartDiv.innerHTML = "";
    cartDiv.appendChild(ul);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

document.getElementById("order-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});

renderCart();