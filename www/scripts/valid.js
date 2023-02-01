/// <reference path="../welcome.html" />
/// <reference path="../reg.html" />
(function () {
    

    document.getElementById("Signin").addEventListener("click", check);
    document.getElementById("Signup").addEventListener("click", Signup);
  
    function check()
    {
            var usr1 = document.login.uid.value;
            var pass1 = document.login.pass.value;
            var valid = false;
            var admin = false;
            if (usr1 == "admin" && pass1 == "admin123")
            {
                admin = true;
            }
            if (admin)
            {
                alert("Login admin was Successfully");
              
                location.href = "layout.html";
               
                return false;
            }
            if (usr1 == "") {
                alert("Please enter a user name");
                return false;
            }
            if (pass1 == "") {
                alert("Please enter a password");
                return false;
            }
            if (usr1 != localStorage.getItem("usr")) {
                alert("Enter a valid UserName")
                return false;
            }
            if (pass1 != localStorage.getItem("pass")) {
                alert("Enter a valid Password")
                 return false;
            }
            if (usr1 == localStorage.getItem("usr") && pass1 == localStorage.getItem("pass"))
            {
                valid = true;
            }
            if (valid)
            {
                alert("login was Successfully");
              
                location.href = "welcome.html";
               
                localStorage.setItem("usrid", usr1);
                return false;
            }

        
    }

    function Signup() {
        window.location.href = "reg.html"
    }
})();