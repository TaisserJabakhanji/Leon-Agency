// Add Click For Burger Menu
function linksMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// Use Local Storage To remember user choice for Themes
const colorTheme = document.querySelectorAll('[name="theme"]');

// Store Theme
const storeTheme = function(theme) {
  localStorage.setItem("theme", theme);
};

const retrieveTheme = function() {
  const activeTheme = localStorage.getItem("theme");

  colorTheme.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    };
  });
};

colorTheme.forEach(themeOption => {
  themeOption.addEventListener('click', () => {
    storeTheme(themeOption.id);
  });
});

document.onload = retrieveTheme();