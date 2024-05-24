let nombre = prompt("Cual es su nombre? ");
console.log(nombre);

let edad = prompt("Por favor, ingresa tu edad:");
console.log("La edad ingresada es: " + edad);


let fanDeportes = confirm("Te gustasn los deportes?") //devuelve True or False
console.log(fanDeportes);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas")

let usuario = {
    n: nombre,
    edad: edad,
    fanDepo: fanDeportes,
    fan: function() {
        if (this.fanDepo) {
            return "Si, soy fan de los deportes"
        } else {
            return "No soy tan fan aun de los deportes";
        }
    }
};

console.log(usuario.fan());