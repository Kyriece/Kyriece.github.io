document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector("#dark-mode-toggle");
  const body = document.querySelector("body");
  
  toggle.addEventListener("change", function() {
    if (toggle.checked) {
      body.style.backgroundColor = "#333";
      body.style.color = "#fff";
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
    }
  });
});