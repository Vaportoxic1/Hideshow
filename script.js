let eyeicon = document.getElementById("eyeicon");
let input = document.getElementById("password");

function showpassword(){
    if(input.type === "password"){
        input.type = "text";
        eyeicon.src = "images/eye-open.png"
    }else{
        input.type = "password";
        eyeicon.src = "images/eye-close.png"
    }
}
eyeicon.addEventListener("click", ()=>{
    showpassword();
});