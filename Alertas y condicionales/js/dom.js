alert("Bienvenidos a mis sitio");

let continuar = confirm("Estas seguro que quierees avanzar?")

let seguro = document.querySelector(".saludo"); //leindicas que quiere tomar

if (continuar){
    seguro.textContent = "Que alegria que quieras continuar tu visita";
} else {
    seguro.textContent = "Lamentamos que no quieras continuar";
}

let nombre = prompt("Ingrese su nombre")

let hola = (document.querySelector(".hola"))
let Nombre = "Bienvenidos " + hola
console.log(Nombre)

