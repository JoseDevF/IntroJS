const valoresNumericos = {
    primerNumero: 80,
    segundoNumero: 20,
};

// console.log(valoresNumericos.primerNumero)

const { primerNumero: numeroUno } = valoresNumericos;
console.log(numeroUno);

const arregloDeNumeros = ["a", "b", "c", "d", "e", "z"];

const [primerDato, segundoDato] = arregloDeNumeros;

console.log("primer dato", primerDato);

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

const { suma: sumaFunc, multi: multiFunc } = operacionesMat(3, 4);
const { multi } = operacionesMat(2, 3);

console.log(sumaFunc());
console.log(multi());
