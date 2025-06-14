const users = JSON.parse(localStorage.getItem("users"));

    const currentUser = users && users.length ? users[users.length - 1] : null;

    if (currentUser) {
      document.getElementById("userName").textContent = currentUser.name;
    }


    function Logout() {
        alert(" You have successfully Logged Out")
        window.location.href = "login.html"
      }

      
    function startamazon() {
      alert("Launched successfully!");
    //   window.location.href = "login.html";
      window.location.href = "index.html"
      }