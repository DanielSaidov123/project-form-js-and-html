const chest = document.getElementById("chest");
const inventory = document.getElementById("inventory");

chest.addEventListener("click", () => {
  inventory.classList.toggle("hidden");
});
