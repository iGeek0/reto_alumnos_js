/*
Se plantea el siguiente problema
Te pasan el siguiente codigo y te comentan que requiere

1. agregar en el primer mensaje el nombre de la persona y los apellidos en el alert.
2. Alguien creeo unas funciones de suma y resta.  Se requiere mostrar el resultado de la suma y la resta cada una en su alert respectivamente.
3. Se requiere evitar que en consola salga la contraseña: "AgrRkeTz"


Ejemplo de respuestas:
1. "Su nombre es: Jesus Cardenas Dominguez"
2. Primer Alert: "La suma es: 30" Segungo Alert "La resta es: 10"
3. No debe salir en consola "AgrRkeTz"
*/



alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert("Su nombre es: " + nombre);

var a = "20";
var b = "10";
var password = "AgrRkeTz";

function funcionSuma(numero1, numero2) {
    return numero1 + numero2;
}

function funcionResta(numero1, numero2) {
    return numero1 - numero2;
}

alert("La suma es " + funcionSuma(a, b));
alert("La resta es " + funcionResta(a, b));
