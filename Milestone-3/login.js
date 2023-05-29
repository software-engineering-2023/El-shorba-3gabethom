const createdUsername = document.getElementById("username1");
const createdPassword = document.getElementById("password1");
const button1 = document.getElementById("button1"); // Get the button element
const text = document.getElementById("textIncorrect");

button1.addEventListener("click", function() {
    debugger;
    // This code will run when the button is clicked
    var username = createdUsername.value;
    var password = createdPassword.value;
   /* if (username != "youssef123" && password != "Jimmy") {
        text.textContent = "username and password are incorrect!";
    }
    if (username == "youssef123" && password !="Jimmy"){
        text.textContent = "password incorrect!";
    }
    if (username != "youssef123" && password =="Jimmy"){
        text.textContent = "username incorrect!";
    }
    if (username == "youssef123" && password =="Jimmy"){
        window.location.href = "clinetindex.html";
    }
    text.style.color = "red";*/
   if(password != "Jimmy"){
    if(username == "admin" || username == "banker" || username == "client"){
        text.textContent = "password incorrect!";
    }
    else{
        text.textContent = "username and password are incorrect!";
    }

   }
   else{
    if(username == "banker"){
        window.location.href = "bankerindex.html";
    }
    if(username == "admin"){
        window.location.href = "adminindex.html";
    }
    if(username == "client"){
        window.location.href = "clinetindex.html";
    }
    if(username != "admin" || username != "banker" || username != "client"){
        text.textContent = "username incorrect!";
    }
   }
   text.style.color = "red";
    

        

    });