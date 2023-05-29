
const newUsername = document.getElementById("username2");
const newPassword = document.getElementById("password2");
const newEmail = document.getElementById("email");
const button = document.getElementById("button");
debugger;
button.addEventListener("click", function() {
     // This code will run when the button is clicked
     debugger;
     var username = newUsername.value;
     var password = newPassword.value;
     var email = newEmail.value;
     if (email != null && username != null && password != null){
        window.location.href = "clinetindex.html";
    }

     })