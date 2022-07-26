var URL = "https://api.thecatapi.com/v1/images/search";
var imagen = document.querySelector("img");
var boton = document.querySelector("button");

function peticionGatito() {
    //GET
fetch(URL)
   .then(function(response) {
    //ESTA FUNCION SE EJECUTA SI SALIO BIEN LA PETICION
    return response.json();
   })
   .then(function(data) {
    console.log(data[0].url);
    imagen.src = data[0].url
   })
   .catch(function(error) {
    //ESTA FUNCION SE EJECUTA CUANDO ALGUN ERROR
    console.log(error);
   });

}

document.addEventListener("DOMContentLoaded", function() {
    peticionGatito();
});

boton.addEventListener("click", function() {
    peticionGatito();
});


   