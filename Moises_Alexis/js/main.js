var nombre = prompt("Escribe tu nombre"); 
alert("Su apellido es :"+nombre+" Torres Povis" );

var x = prompt("Escribe el primer numero");
var y = prompt("Escribe el segundo numero");
var a = parseInt(x);
var b = parseInt(y);

function funcionSuma(numero1, numero2) {
    return numero1 + numero2;
}

function funcionResta(numero1, numero2) {
    return numero1 - numero2;
}

alert("La suma es " + funcionSuma(a, b));
alert("La resta es " + funcionResta(a, b));

