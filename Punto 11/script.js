let vehiculo;
let precioKm;
let kmRecorridos;
let litros;
let costoTotalV;

vehiculo= prompt("¿En que tipo de vehivulo te estas transportando? (Coche, Moto o Autobus)");
if(vehiculo.toLowerCase()=="coche"){
    precioKm= 0.2

}
else if(vehiculo.toLowerCase()=="moto"){
    precioKm= 0.1
    
}
else if(vehiculo.toLowerCase()=="autobus"){
    precioKm= 0.5
    
}
kmRecorridos= prompt("¿Cuantos kilometros has recorrido?");
costoTotalV= precioKm*kmRecorridos;
litros= prompt("¿Cuantos litros has consumido?");

if (litros>=0 && litros<=100){
    costoTotalV= costoTotalV+5;
}
else{
    costoTotalV= costoTotalV+10;
}
alert("El total a pagar de acuerdo a la distancia recorrida es de: "+ costoTotalV);