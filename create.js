document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("accountBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  accountBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent auto-closing on click
    dropdownMenu.classList.toggle("show");
  });

  // Close the dropdown when clicking outside
  window.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });
});
