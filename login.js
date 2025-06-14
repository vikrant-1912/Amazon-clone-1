function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}



function signupUser() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (name && email && password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.email === email);
    
    if (userExists) {

      alert("User already exists with this email.");
      return;
    }

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now login.");
    toggleForm();

  } else {
    alert("Please fill in all fields.");
  }
}


function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert("Login successful! Welcome, " + user.name);
    window.location.href = "dashboard.html";
    
  } else {
    alert("Invalid email or password.");
  }
}