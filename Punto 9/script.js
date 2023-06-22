let topping = prompt("¿Qué topping deseas agregar a tu helado: oreo, kitkat, brownie o ninguno");
let helado = 50;
let precio = helado;

if (topping == "oreo"){
    precio = precio + 10
    alert("El precio total de tu helado es: " + precio);
}

else if (topping == "kitkat"){
    precio = precio + 15
    alert("El precio total de tu helado es: " + precio);
}

else if (topping == "brownie"){
    precio = precio + 20
    alert("El precio total de tu helado es: " + precio); }

else if (topping == "ninguno"){
    alert("El precio total de tu helado es: " + precio); }

else{
    alert("no tenemos este topping, lo sentimos");
    alert("El precio total de tu helado es: " + precio);
}
