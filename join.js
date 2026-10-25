document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = dropdown.querySelector('.nav-icons');

  dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });

  // Optional: Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});
