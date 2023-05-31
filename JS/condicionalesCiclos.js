/* CONDICIONALES */

/* Condicionales sencillos */
/* if (condicion) console.log("condicion"); */

/* Condicionales con casos */

/* if (condicion && condition || (50 > 4)) {
    if (condicion) {

    } else if (condicion2) {

    } else if (condicion2) {

    } else if (condicion3) {

    } else {
        console.log("No es posible validar la condición")
    }
} else if (condicion2) {
    const variable=0;
} else if (condicion2) {
    const variable=0;
} else if (condicion3) {
    const variable=0;
} else {
    console.log("No es posible validar la condición")
} */

/* Ejemplo de scopes o alcances */

if (false) {
    const variable = 10;
} else if (true) {
    const variable = 15;
    if (true) {
        console.log(variable)
    }
}
const variable = 0;
console.log(variable);


/* Switch - case */
/* Un valor contra varios posibles */
const colorSemaforo = "rojo";
switch (colorSemaforo) {
    case "morado":
        console.log("color morado");
        /* if (segundaCondicion) {

        } */
        break;
    case "verde":
        console.log("color verde");
        break;
    case "amarillo":
        console.warn("color amarillo");
        break;
    case "rojo":
        console.error("color rojo");
        break;
    default:
        console.log("color desconocido");
        break;
}

const codigoBarras = 00000000;
switch (codigoBarras) {
    case 00000000:
        break;
    case 11111111:
        break;
    case 22222222:
        break;
    case 12345645:
        break;
    case 78155132:
        break;
}



/****************** CICLOS ****************/

/* ************************* FOR CLASICO ***************************** */

const arreglo = ["a", "f", "z"]; //-> lista de valores 

/* Cualquier caso */
/* Aqui al final valida la condición */
for (let i = 0; i < arreglo.length; i++) {
    //Código
    //console.log("INDICE/CONTADOR: ", i);
    console.log("VALOR FOR CLASICO: ", arreglo[i]);
    //i += 1
}

/* ************************* FOR IN ***************************** */

const obj = {
    nombre: "Daniel",
    apellido: "Hernández",
    edad: 28
}

console.log(obj.nombre); /* -> Daniel */
console.log(obj.apellido); /* -> Hernández */
console.log(obj.edad); /* -> 28 */

/* Normalmente objetos */
/* Este es un bucle `for...in` en JavaScript que itera sobre las propiedades de un objeto `obj`. El
bucle asigna cada nombre de propiedad a la variable `prop`, y luego el cuerpo del bucle registra el
nombre de la propiedad y su valor correspondiente en el objeto usando `console.log()`. */
for (prop in obj) {
    /* PRIMERA VEZ */
    /* prop = 'nombre' */
    //Código
    console.log("PROPIEDAD: ", 'nombre', "VALOR: ", obj['nombre']); /* -> obj.nombre */
    console.log("PROPIEDAD: ", prop, "VALOR: ", obj[prop]);
}

/* ************************* FOR OF ***************************** */

const arreglo2 = [
    { id: "N1", value: "First" },
    { id: "N2", value: "Second" },
    { id: "N3", value: "Third" }
]; //-> lista de valores

/* Normalmente Arreglos */
/* Este es un bucle `for...of` en JavaScript que itera sobre los valores de una matriz `arreglo`. El
ciclo asigna cada valor a la variable `valor`, y luego el cuerpo del ciclo registra el valor en la
consola usando `console.log()`. */
for (let valor of arreglo2) {
    //Código
    /* PRIMERA VEZ */
    /* Valor= {id:"N1", value: "First"}*/
    /* Valor= {id:"N2", value: "Second"}*/
    console.log("VALOR: ", valor); /* -> {id:"N1", value: "First"} */
}


/* Imaginen que desean saber el total de unas compras */

const compras = [10, 20, 30, 40, 50]; // Ejemplo de arreglo de compras

let total = 0; // Inicializamos el acumulador en 0

for (let i = 0; i < compras.length; i++) {
    total += compras[i]; // Sumamos cada elemento del arreglo al acumulador
}

console.log("El total de las compras es:", total);
