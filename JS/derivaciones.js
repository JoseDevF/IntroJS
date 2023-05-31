const cadenaPrueba = "a-b-c-c-a"
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const reglas = [[]];
function derivacionIzquierda(cabezaActual = "", noCaracteres = 0, mensajeDerivacion = "") {
    if (noCaracteres <= cadenaPrueba.length) {
        let i = 1;
        while (i <= cabezaActual.length) {
            if (mayusculas.includes(cabezaActual.substring(i, i + 1))) {
                break;
            }
            i += 1;
        }
        if (i <= cabezaActual.length) {
            for (let elemento of reglas) {
                if (cabezaActual.substring(i, i + 1).localeCompare(elemento[2])) {
                    let mensajeAuxiliar = "";
                    let parteIzq = cabezaActual.substring(1, i - 1);
                    let parteDer = cabezaActual.substring(i + 1, cabezaActual.length - i);
                    let nuevaDerivacion = parteIzq.concat(elemento[3], parteDer);
                    mensajeAuxiliar = mensajeAuxiliar.concat(mensajeDerivacion, "->(", cabezaActual, ",", elemento[1], ")");
                    derivacionIzquierda(nuevaDerivacion, nuevaDerivacion.length, mensajeAuxiliar);
                }
            }
        }
    }
    if (cabezaActual.localeCompare(cadenaPrueba)) {
        let res = cabezaActual;
    }
}