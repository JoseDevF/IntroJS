//Ejemplos de comentarios.

/*
lorem ipsum dolor sit amet,
loremipsum dolor sit amet,
Este proyecto no lo he tocado hace años
No intentes optimizarlo
@param {String} Mensaje: El mensaje que el usuario intenta mostrar
*/

//                                  lorem ipsum dolor sit amet,

//Siempre inicialicen su variable
/* Tiene que ver con el alcance o scope */
//MALA PRACTICA
var miVariable2 = "";
var miVariable = 0;
var miVariable = 15;
//console.log("", miVariable)

//VARIABLES NORMALES
let nombreUsuario = "";
let nombre_usuario = "";
let NombreUsuario = "Luis";

nombreUsuario = "Juan";
nombreUsuario = nombre_usuario;


//CONSTANTE
const apellidoUsuario = "";
//apellidoUsuario = "Hernández";

const fruits = "manzana";


//Declaración e inicialización de una variable con var
var nombre = 'Juan';
console.log('Nombre:', nombre);

//Declaración de una variable con let y asignación posterior
let edad;
edad = 25;
console.log('Edad:', edad);

//Declaración e inicialización de una constante
const PI = 3.14159;
console.log('Valor de PI:', PI);

//Declaración de múltiples variables en una línea con var
var x = 5, y = 10, z = x + y;
console.log('Suma:', z);

//Actualización de una variable utilizando let
let contador = 0;
contador += 1;
console.log('Contador:', contador);

//Uso de constante en una operación matemática
const BASE = 10;
let exponente = 2;
let resultado = Math.pow(BASE, exponente);
console.log('Resultado:', resultado);

//Cambio de valor de una variable var
var precio = 100;
console.log('Precio inicial:', precio);
precio = 120;
console.log('Precio actualizado:', precio);

//Intento de redeclaración de una constante
const PI = 3.14159;
const PI = 3.14; // Error: redeclaración de constante

//Reasignación de valor a una constante
const precio = 100;
precio = 120; // Error: no se puede asignar un nuevo valor a una constante

//Duplicación de nombres de variables con var
var nombre = 'Juan';
var nombre = 'Pedro'; // Sin error, pero mala práctica de redeclaración

//Duplicación de nombres de variables con let
let apellido = 'Gómez';
let apellido = 'López'; // Error: redeclaración de variable




