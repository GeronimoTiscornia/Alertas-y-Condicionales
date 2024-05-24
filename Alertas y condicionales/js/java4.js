let nacionalidad = prompt("Ingrese su nacionalidad")

let profesion = prompt("Cual es su pofesion actual?")

let km = prompt("cuantos kilometros camina por dia?")

function filosofoHipster(nacionalidad, profesion, km) {
    if (nacionalidad === "Argentina" && profesion === "Musico" && km >= 2) { //si pongo 2 no me dice que no soy un hipster
        return "Soy un filosofo hipster";
    } else {
        return "No soy un filosofo hipster";
    }

};
let resultado = filosofoHipster(nacionalidad, profesion, km)
console.log(resultado)
// como hago para que no importe si escribis con mayuscula o sin mayuscula?