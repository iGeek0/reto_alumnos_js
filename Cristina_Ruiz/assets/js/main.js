alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert(`Su nombre es ${nombre} ${apellido}`);

var a = "20";
var b = "10";
var password = "AgrRkeTz";

var a = prompt("Ingrese un número");
var b = prompt("Ingrese otro número");

function funcionSuma(numero1, numero2) {
    return Number(numero1) + Number(numero2);
}

function funcionResta(numero1, numero2) {
    return Number(numero1) - Number(numero2);
}

alert("La suma es de los números proporcionados es " + funcionSuma(a, b));
alert("La resta es de los números proporcionados es " + funcionResta(a, b));
