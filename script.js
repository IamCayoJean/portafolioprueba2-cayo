//alert("Hola este es mi Javascript");  


//si la variable se va modificar se utiliza LET
//let nombre = "Marta";
//nombre = "Maria";

//var nombre1 = "Marta";

//si la variable no se va modificar se utiliza CONST
//const nombre2 = "Marta"

//console.log(nombre);

//console.log(nombre1);

//console.log(nombre2);


//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".logo .fuente-")

//titulo.innerHTML = contenidoTitulo;

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if (textoTitulo == "Nombre") {
    //titulo.innerHTML = "otro";
//} else {
    //console.log("no se cumple");
//}


//let nombre = "Erick";
//let ciudad = "Moyobamba";
//let gusta = "bailar";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, cuidad, gusta) {
    //let contenido = `Hola me llamo ${nombre}, nací en ${cuidad} y vivo en el Dorado y soy un estudiante de Egg. Me gusta 
    //${gusta} y salir a pasear los domingos. Me encantaría aprender a programar para poder ayudar a las personas a mostrar 
    //lo que hacen y aprender cosas nuevas y compartir mis conocimientos con los demás ¡Espero que disfrutes de mi página 
    //web!`;


    //return contenido;
//}

//parrafo.innerText = cambiarTexto(nombre, ciudad, gusta);
//document.addEventListener("DOMContentLoaded", función(evento) {});

let nombre1 = "SOBRE MI VIDA"
let parrafo = document.querySelector(".parrafo0");
function cambiarTexto(nombre1) {
    let contenido = `${nombre1}`;
    return contenido;
}
parrafo.innerText = cambiarTexto(nombre1);
