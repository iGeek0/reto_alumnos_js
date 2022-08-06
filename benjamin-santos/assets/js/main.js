alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert("Su nombre es: " + nombre);
alert("Su apellido es: " + apellido);
alert("Su Nombre Completo:" + nombre + apellido);
var a = "20";
var b = "10";
var password = "AgrRkeTz";

function suma(){
    var numero1= 20;
    var numero2= 10;

    suma = numero1 + numero2;
    alert("La suma es:" +suma);
}

function funcionResta(numero1, numero2) {
    return numero1 - numero2;
}

alert("La resta es " + funcionResta(a, b));
