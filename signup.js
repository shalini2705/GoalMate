document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // TODO: You can save this data to localStorage or send to a backend here

    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "../html/login.html";
  });
});
