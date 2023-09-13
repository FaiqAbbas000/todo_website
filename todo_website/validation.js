function loginDiv() {
    document.getElementById('signupDiv').style.display = 'none';
    document.getElementById('loginDiv').style.display = 'block';
}

function signupDiv() {
    document.getElementById('loginDiv').style.display = 'none';
    document.getElementById('signupDiv').style.display = 'block';
}



document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById('loginForm');
    var userName = document.getElementById('loginUsername');
    var password = document.getElementById('LoginPassword');
    var userNameError = document.getElementById('loginUsernameError');
    var passwordError = document.getElementById('LoginPasswordError');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var user_name = userName.value;
        var Password = password.value;

        database = JSON.parse(localStorage.getItem("database")) || [];
        var user = database.find(function (user) {
            return user.USER_NAME === user_name;
        });
        localStorage.setItem("currentUser", JSON.stringify(user));
        if (user_name === "") {
            userNameError.innerHTML = "Please enter your username";
            userNameError.style.color = "red";
            userName.focus();
            return false;
        }
        else{
            userNameError.innerHTML = "";
        }
        if (Password === "") {
            passwordError.innerHTML = "Please enter your password";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else{
            passwordError.innerHTML = "";
        }

        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User does not exist!',
            });
            usernameInput.value = "";
            passwordInput.value = "";
            return false;
        }

        if (user.PASSWORD !== Password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is incorrect!',
                
            });
            passwordInput.value = "";
            return false;
        }
        else {
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Success',
            //     text: 'Login successfully',
                
            // });
            location.replace("index.html");
            usernameInput.value = "";
            passwordInput.value = "";
            return true;
        }


    })

})



document.addEventListener("DOMContentLoaded", function () {
    var signupform = document.getElementById('signupform');
    var name = document.getElementById('name');
    var userName = document.getElementById('signupUsername');
    var password = document.getElementById('signupPassword');
    var confirmPassword = document.getElementById('confirmpassword');
    var nameError = document.getElementById('nameError');
    var usernameError = document.getElementById('signupUsernameError');
    var passwordError = document.getElementById('signupPasswordError');
    var confirmpasswordError = document.getElementById('confirmpasswordError');

    signupform.addEventListener('submit', function (event) {
        event.preventDefault();
        var Name = name.value;
        var user_name = userName.value;
        var Password = password.value;
        var ConfirmPassword = confirmPassword.value;

        database = JSON.parse(localStorage.getItem("database")) || [];
        var nweUser = { NAME: Name, USER_NAME: user_name, PASSWORD: Password };

        if (Name == "") {
            nameError.innerHTML = "Please enter your name";
            nameError.style.color = "red";
            name.focus();
            return false;
        }
        else if (Name.length < 3) {
            nameError.innerHTML = "Name is too short";
            nameError.style.color = "red";
            name.focus();
            return false;
        }
        else {
            nameError.innerHTML = "";
        }

        if(user_name == ""){
            usernameError.innerHTML = "Please enter your user name";
            usernameError.style.color = "red";
            userName.focus();
            return false;
        }
        else if (user_name.length < 6) {
            usernameError.innerHTML = "User name is too short"; 
            usernameError.style.color = "red";
            userName.focus();
            return false;
        }
        else {  
            usernameError.innerHTML = "";
        }

        if (Password == "") {
            passwordError.innerHTML = "Please enter your password";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else if (Password.length < 8) {
            passwordError.innerHTML = "Password is too short";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else if (Password.search(/[0-9]/) == -1) {
            passwordError.innerHTML = "Password must contain at least one number";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else if (Password.search(/[a-z]/) == -1) {
            passwordError.innerHTML = "Password must contain at least one lowercase letter";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else if (Password.search(/[A-Z]/) == -1) {
            passwordError.innerHTML = "Password must contain at least one uppercase letter";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else if (!Password.includes("@"||"#"||"$"||"%"||"^"||"&"||"*"||"("||")"||"-"||"_"||"="||"+"||"{"||"}"||"["||"]"||"|"||":"||";"||"'"||"<"||">"||","||"."||"?"||"/")) {
            passwordError.innerHTML = "Password must contain at least one special character";
            passwordError.style.color = "red";
            password.focus();
            return false;
        }
        else {  
            passwordError.innerHTML = "";
        }
        if (ConfirmPassword == "") {
            confirmpasswordError.innerHTML = "Please confirm your password";
            confirmpasswordError.style.color = "red";
            confirmPassword.focus();
            return false;
        }
        else if (ConfirmPassword != Password) {
            confirmpasswordError.innerHTML = "Password does not match";
            confirmpasswordError.style.color = "red";
            confirmPassword.focus();
            return false;
        }
        else {
            confirmpasswordError.innerHTML = "";
        }

        if (database.find(function (user) {
            return user.USER_NAME === user_name;
        })) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username already exists!',
            });
            return false;
        }
        else {
            database.push(nweUser);
            localStorage.setItem("database", JSON.stringify(database));
            name.value = "";
            userName.value = "";
            password.value = "";
            confirmPassword.value = "";

            // Swal.fire({
            //     icon: 'success',
            //     title: '):',
            //     text: 'User created successfully',
            // });
            // return true;

            location.replace("index.html");
            usernameInput.value = "";
            passwordInput.value = "";
            return true;
        }
        
    })

})

document.addEventListener("DOMContentLoaded", function(){
    var logoutUser = document.getElementById("logoutUser");

    logoutUser.addEventListener('onclick', function(close){
        // close.preventDefault();
    
        // var currentUser = JSON.parse(localStorage.getItem("currentUser"))||[];
        localStorage.removeItem("currentUser");
        // currentUser.clear()
        
    })
})


var currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
var displayUser = document.getElementById("displayUser");
if(displayUser){
    displayUser.textContent= "Wellcome "+ currentUser.NAME ;
}




