

var currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
var displayUser = document.getElementById("displayUser");
if(displayUser){
    displayUser.textContent= "Wellcome "+ currentUser.NAME ;
}









function logout(){
    localStorage.removeItem("currentUser");
    location.href = "signup.html";
    
}