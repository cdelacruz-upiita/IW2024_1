// función que muestra en un mensaje los datos del formulario
function datosEnviados(){ 
  // se accede al campo de texto username del formulario
  // formIS es el name del form y username es el name del input
  // del que se recupera el valor que ingres el usuario.
    let user = document.formIS.username.value;
    let passwd = document.formIS.passwd.value;
    // getElementById permite acceder a un elemento HTML,
    // en este caso a la sección donde se muestra el nombre de usuario.
    // innerHTML insert contenido HTML al elemento seleccionado
    
    if (user.match(/^[a-zA-Z]+$/) && passwd.match(/^[A-Za-z0-9!?-]{4,8}$/) ) 
       document.getElementById("section-content").innerHTML="Bienvenido "+user;          
 };

 function colorVerdeBtn(){
  document.getElementById("btn").style.backgroundColor="green";                
 };

 function colorAzulBtn(){
  document.getElementById("btn").style.backgroundColor="#33A8FF";                
 };

 function displayFormReg(){
   const formIS = document.querySelector("#section-form #formIS");
   const formReg = document.querySelector("#section-form #formReg");
   formIS.style.display = "none";
   formReg.style.display="block";
 }

 function displayFormIS(){
  const formIS = document.querySelector("#section-form #formIS");
  const formReg = document.querySelector("#section-form #formReg");
  formReg.style.display="none";
  formIS.style.display = "block";  

  /*hiden() y show()*/
}

function inicioSesion(){
 let pw = document.formIS.passwd.value;
 let u = document.formIS.username.value;

 let userF = {
  user:"Juan Pablo",
  email:"juan.pablo@dominio.mx",
  question:"Lugar favorito",
  answer:"a48f7dfe488185fe9b9c8c723d318c66",
  passwd:"Oaxaca"        
}



 if (u === userF.user && pw === userF.passwd)
   alert ('usuario encontrado ...');
  else 
   alert ('error en los datos')

}

 