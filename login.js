document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Replace this with your actual admin email
  const adminEmail = 'admin@example.com';

  if (email === adminEmail) {
    window.location.href = 'admin.html';
  } else {
    window.location.href = 'enter.html';
  }
});
