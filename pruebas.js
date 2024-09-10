
const email= document.getElementById("email");
const contraseña= document.getElementById("contraseña");
const button = document.getElementById("button");

alert("INGRESA TUS DATOS");

button.addEventListener("click", (e) =>{
    e.preventDefault()
    const data = {
        email: email.value,
        contraseña: contraseña.value
    }
    console.log(data)
})



if (contraseña == 123456 && email == "karen@gmail.com") is true{
   
    alert("Bienvenido" + "" + "karen" );
}
else {
    alert("datos incorrectos");
}



&&







