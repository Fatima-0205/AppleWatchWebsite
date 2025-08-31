const watches = {
  se: {
    colors: {
      black: "../Images/se._black.png",
      silver: "../Images/se_silver.png",
      starlight: "../Images/se_starlight.png"
    }
  },
  series10: {
    colors: {
      black: "../Images/series10_black.png",
      gold: "../Images/series10_gold.png",
      silver: "../Images/series10_white.png"
    }
  },
  ultra2: {
    colors: {
      black: "../Images/ultra2_black.png",
      gray: "../Images/ultra2_gray.png",
      white: "../Images/ultra2_white.png"
    }
  },
  galaxy7: {
    colors: {
      black: "../Images/galaxy_watch7.png",
      silver: "../Images/galaxy_watch7_silver.png",
      gray: "../Images/galaxy_watch7gray.png"
    }
  },
  galaxyUltra: {
    colors: {
      silver: "../Images/galaxy_watch7ultra_siver.png",
      gray: "../Images/galaxy_watch7ultra_gray.png",
      orange: "../Images/galaxy_watch7ultra.png"
    }
  },
  galaxyClassic: {
    colors: {
      black: "../Images/galaxy_watchClassical.png",
      silver: "../Images/galaxy_watchClassical_silver.png",
      pink: "../Images/galaxy_watchClassical_pink.png"
    }
  }
};

function updateWatch(watchNum) {
  const select = document.getElementById(`watch${watchNum}-select`);
  const selectedModel = select.value;
  const colorsDiv = document.getElementById(`watch${watchNum}-colors`);
  const img = document.getElementById(`watch${watchNum}-img`);
  const colorNameElement = document.getElementById(`watch${watchNum}-color-name`);

  const model = watches[selectedModel];
  const defaultColor = Object.keys(model.colors)[0];
  img.src = model.colors[defaultColor];
  colorNameElement.textContent = capitalize(defaultColor); // show initial color name

  // Reset and populate color buttons
  colorsDiv.innerHTML = "";
  for (let color in model.colors) {
    const btn = document.createElement("div");
    btn.className = "color-btn";
    btn.style.backgroundColor = mapColorToCSS(color);
    btn.title = capitalize(color);
    btn.onclick = () => {
      img.src = model.colors[color];
      colorNameElement.textContent = capitalize(color); // update color name
    };
    colorsDiv.appendChild(btn);
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function mapColorToCSS(color) {
  const colorMap = {
    black: "#000000",
    silver: "#c0c0c0",
    starlight: "#f5e6ce",
    gold: "#d4af37",
    gray: "#808080",
    white: "#ffffff",
    green: "#228B22",
    orange: "#FFA500",
    brown: "#8B4513"
  };
  return colorMap[color] || color;
}


window.onload = () => {
  updateWatch(1);
  updateWatch(2);
  updateWatch(3);
  updateWatch(4);
  updateWatch(5);
  updateWatch(6);
};
function addToCart(watchNum) {
  const select = document.getElementById(`watch${watchNum}-select`);
  const selectedModel = select.value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(selectedModel);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// Optional: Navigate to cart page on a button click
function goToCart() {
  window.location.href = "cart.html";
}
