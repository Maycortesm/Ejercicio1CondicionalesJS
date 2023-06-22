let carrera = prompt ("¿Qué carrera te gustaría estudiar?")

let programa = prompt ("¿Qué programa deseas estudiar: Course, Carrera o Master?")
    alert ("Genial a continuación te indicaremos el costo");

let costoTotal;
let costoMes;
let beca;
let nombreBeca;

if(programa == "Course") {
    costoMes = 4999
    costoTotal = costoMes * 2
    beca = prompt("¿Tienes alguna beca?");
}

else if (programa == "Carrera"){
    costoMes = 3999
    costoTotal = costoMes * 6
    beca = prompt("¿Tienes alguna beca?");
}

else if (programa == "Master"){
    costoMes = 2999
    costoTotal = costoMes * 12
    beca = prompt("¿Tienes alguna beca?");
}

if (beca == "si") {
    nombreBeca = prompt ("¿Tienes alguna beca?");
    
    if (nombreBeca == "Facebook"){
        costoMes = costoTotal * 0.8;
        costoTotal = costoTotal * 0.8;
    } 

else if (nombreBeca == "Google"){
        costoTotal = costoTotal * 0.75;
        costoMes = costoTotal * 0.75;
    } 

else if (nombreBeca == "Jesua"){
        costoTotal = costoTotal * 0.5;
        costoMes = costoMes * 0.5;
    } 
}

alert ("El costo mensual con descuento es " + costoMes + " y el costo total del curso es " + costoTotal)