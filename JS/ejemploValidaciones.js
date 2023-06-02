const clientes = [
    { nombre: "Mali", saldo: 800, password: "password" },
    { nombre: "Jenny", saldo: 990, password: "snoopy1234" },
    { nombre: "Joss", saldo: 400, password: "blink182" },
];

function inicio() {

    const userName = prompt("Ingresa tu nombre de usuario:");
    const password = prompt("Ingresa tu contraseña:");
    const credencialesValidas = validarCredenciales(userName, password)
    /*
    validarCredenciales(userName, password) === true;
    ||
    validarCredenciales(userName, password) === false; 
     */

    if (credencialesValidas) {
        alert('Ingreso exitoso!! :)');
    } else {
        alert('Error en usuario o en contraseña :(');
    }
    return credencialesValidas;
}

/* verdadero -> credenciales coinciden o falso -> si no coinciden */
function validarCredenciales(name, pass) { //AND

    /* let bandera = false; */
    /* Para cada i desde 0 mientras la i se menor que longitud de clientes, incrementando de uno en uno */
    /* for (let indice = 0; indice < clientes.length; indice++) {
        bandera = clientes[i].nombre === name && clientes[i].password === pass;
    }
    return bandera; */
    return clientes.some((cliente) => cliente.nombre === name && cliente.password === pass)
}


while (!inicio()) { }