/* const n1 = 2;
const n2 = 3;
const suma = n1 + n2;

const n3 = 123;
const n4 = 1028312;
const otraSuma = n3 + n4; */

/* 
    Funciones son fragmentos de código que se
    crean para resolver una tarea, y que pueden ser reutilizados

    Solo podemos retornar una sola vez por función
 */

/* FUNCIÓN CLASICA */
/* Palabra_reservada ID (PARAMETROS)*/
/* function suma() {
    if (isNaN(primerNumero) || isNaN(segundoNumero)) return "Valores no validos";
    return primerNumero + segundoNumero;
} */

// sumarEImprimir(5, 10);
// sumarEImprimir(15, 2);

/* Esta función recibe dos números y suma, solo ejecuta */
function sumarEImprimir(a, b) {
    console.log("SUMA ADENTRO: ", a + b);
}


function sacarPromedio(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log("PROMEDIO DENTRO DE LA FUNCIÓN", total / array.length);
    return total / array.length;
    return total;
    return total * 20;
}

const calif = [10, 20, 30, 40, 50]; // Ejemplo de arreglo de compras

console.log("SUMA AFUERA: ", sumarEImprimir(15, 2));
console.log("PROMEDIO AFUERA: ", sacarPromedio(calif));


function saludar() {
    alert("HOLA CHICOS y CHICAS!!! :)");
}

saludar();

function validarCredenciales(usuario) {
    /* hago las validaciones y comparaciones el arreglo */
    for (let i = 0; i < array.length; i++) {
        /* comparaciones */
    }
    array.find()
    return true || false;
}









/* function suma({ primerNumero = 0, segundoNumero = 0 }) {
    if (isNaN(primerNumero) || isNaN(segundoNumero)) return "Valores no validos";
    return primerNumero + segundoNumero;
} */














// alert(suma(2, 9));

/* const valorUsuario1 = Number(prompt("Ingrese el primer valor"));
const valorUsuario2 = Number(prompt("Ingrese el segundo valor"));
 
console.log(suma(valorUsuario1, valorUsuario2)); */

/* const valoresNumericos = {
    primerNumero: 80,
    segundoNumero: 20,
};

console.log(suma(valoresNumericos));
console.log(suma({ primerNumero: 30 }));

function operacionesMat(n1 = 0, n2 = 0) {
    function suma() {
        return n1 + n2;
    }

    function resta() {
        return n1 - n2;
    }

    function multi() {
        return n1 * n2;
    }

    return { suma, resta, multi };
}

console.log(operacionesMat(3, 2).suma());
console.log(operacionesMat(3, 2).resta()); */