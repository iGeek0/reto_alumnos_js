alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert("Su nombre es: " + nombre + apellido);

var numero1 = 20;
var numero2 = 10;
var password = "AgrRkeTz";

function funcionSuma(numero1, numero2) {
    return numero1 + numero2;
}

function funcionResta(numero1, numero2) {
    return numero1 - numero2;
}

alert("La suma es " + funcionSuma(numero1, numero2));
alert("La resta es " + funcionResta(numero1, numero2));
