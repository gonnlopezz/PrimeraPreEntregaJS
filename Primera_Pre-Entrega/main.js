// Función que recibe y valida la cantidad de compradores que ingresó el usuario
const cantidadCompradores = () => {
    let compradores = Number(prompt("¿Hola que tal, bienvenido a la mejor tienda de dulces del país, cuántos compradores son?"));
    // validación de la cantidad de compradores ingresados
    while (compradores < 1 || compradores >= 10) {
        if (compradores < 1) {
            alert("ingrese un número válido");
        }
        else if (compradores > 10) {
            alert("demasiados compradores");
        }
        else {
            break;
        }
        compradores = Number(prompt("¿Hola que tal, bienvenido a la mejor tienda de dulces del país, cuántos compradores son?"));
    }
    return compradores;
}

// Función que recibe el número que ingresó el usuario y lo valida
const validarDescuento = (nombre) => {
    let numeroDescuento = Number(prompt(`Hola ${nombre}, vamos a definir tu descuento, elegí un numero del 1 al 5`));
    // validación del numero ingresado por el usuario
    while (numeroDescuento < 1 || numeroDescuento > 5) {
        alert("numero inválido");
        numeroDescuento = Number(prompt(`Hola ${nombre}, vamos a definir tu descuento, elegí un numero del 1 al 5`));
    }
    return numeroDescuento;

}

// Función que recibe el número que ingresó el usuario y calcula el descuento en base al mismo
const calcularDescuento = numero => {
    switch (numero) {
        case 1:
            alert("Enhorabuena, tu descuento es del: 50%");
            return (descuento = 50);
        case 2:
            alert("Que mala suerte, ¡no has conseguido ningun descuento!");
            return (descuento = 0);
        case 3:
            alert("Enhorabuena, tu descuento es del: 75%");
            return (descuento = 75);
        case 4:
            alert("Enhorabuena, tu descuento es del: 90%");
            return (descuento = 90);
        case 5:
            alert("Enhorabuena, tu descuento es del: 15%");
            return (descuento = 15);
        default:
            break;
    }
}

// Función que calcula el precio del producto seleccionado por el usuario aplicándole el descuento 
const calcularPrecio = (producto, descuento) => producto - (producto / 100 * descuento);


let compradores = cantidadCompradores();



// Ciclo de la compra del producto que se repite en base a la cantidad de usuarios
for (i = 1; i <= compradores; i++) {
    let golosinasGalacticas = 29;
    let lollipopsPlanetarios = 15;
    let gomitasOsos = 20;
    let chocolateRama = 45;
    let caramelosCandy = 50;
    let nombre;
    if (i == 1) {
        nombre = prompt("Empecemos por el primer comprador, ¿cual es tu nombre?");
    }
    else {
        nombre = prompt(`¿Cual es tu nombre comprador número ${i}?`);
    }

    let numeroDescuento = validarDescuento(nombre);

    let descuento = calcularDescuento(numeroDescuento);

    alert(`Actualmente, tenemos 5 productos en stock, tu descuento te permite comprar solo uno de los siguientes: Golosinas galácticas $${golosinasGalacticas}, Lollipops planetarios $${lollipopsPlanetarios}, Gomitas de osos galácticos $${gomitasOsos}, Chocolate en rama $${chocolateRama}, Caramelos CandyGalaxy $${caramelosCandy}`);

    // Condicional que calcula el precio de los productos aplicando el descuento si es que el usuario posee uno
    if (descuento > 0) {
        golosinasGalacticas = Math.round(calcularPrecio(golosinasGalacticas, descuento));
        lollipopsPlanetarios = Math.round(calcularPrecio(lollipopsPlanetarios, descuento));
        gomitasOsos = Math.round(calcularPrecio(gomitasOsos, descuento));
        chocolateRama = Math.round(calcularPrecio(chocolateRama, descuento));
        caramelosCandy = Math.round(calcularPrecio(caramelosCandy, descuento));
        alert(`Con tu descuento actual, el precio de los productos queda en: Golosinas galácticas $${golosinasGalacticas}, Lollipops planetarios $${lollipopsPlanetarios}, Gomitas de osos galácticos $${gomitasOsos}, Chocolate en rama $${chocolateRama}, Caramelos CandyGalaxy $${caramelosCandy}`);

    }
    let dineroDisponible = Number(prompt("¿Cuanto dinero tienes?"));


    if (dineroDisponible < lollipopsPlanetarios) {
        alert("No tienes el dinero suficiente para comprar los productos :(");
    }

    else if (dineroDisponible >= lollipopsPlanetarios && dineroDisponible < gomitasOsos) {
        let confirmacion = prompt(`Puedes comprar: Lollipops planetarios $${lollipopsPlanetarios}, ¿deseas realizar tu compra?`);
        if (confirmacion == "si") {
            dineroDisponible -= lollipopsPlanetarios;
            alert(`¡¡felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`);
        } else if (confirmacion == "no") {
            alert("¡Te esperamos la próxima!");
        } else {
            alert("¡Respuesta inválida!")
        }

    }

    else if (dineroDisponible >= gomitasOsos && dineroDisponible < golosinasGalacticas) {

        let confirmacion = prompt(`Puedes comprar: Lollipops planetarios o Gomitas de osos galácticos, ¿deseas realizar tu compra?`);
        if (confirmacion == "si") {
            let productoElegido = Number(prompt(`¿Cuál opcion eliges? 1 - Lollipops planetarios $${lollipopsPlanetarios}, 2 - Gomitas de osos galácticos $${gomitasOsos}`));
            switch (productoElegido) {
                case 1:
                    dineroDisponible -= lollipopsPlanetarios;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 2:
                    dineroDisponible -= gomitasOsos;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                default:
                    alert("Opcion inválida");
                    break;
            }
        } else if (confirmacion == "no") {
            alert("¡Te esperamos la próxima!");
        } else {
            alert("¡Respuesta inválida!")
        }
    }

    else if (dineroDisponible >= gomitasOsos && dineroDisponible < chocolateRama) {
        let confirmacion = prompt(`Puedes comprar: Lollipops planetarios , Gomitas de osos galácticos o Golosinas galácticas, ¿deseas realizar tu compra?`);
        if (confirmacion == "si") {
            let productoElegido = Number(prompt(`¿Cuál opcion eliges? 1 - Lollipops planetarios $${lollipopsPlanetarios}, 2 - Gomitas de osos galácticos $${gomitasOsos}, 3 - Golosinas galácticas $${golosinasGalacticas}`));
            switch (productoElegido) {
                case 1:
                    dineroDisponible -= lollipopsPlanetarios;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 2:
                    dineroDisponible -= gomitasOsos;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 3:
                    dineroDisponible -= golosinasGalacticas;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                default:
                    alert("Opcion inválida");
                    break;
            }
        } else if (confirmacion == "no") {
            alert("¡Te esperamos la próxima!");
        } else {
            alert("¡Respuesta inválida!")
        }
    }

    else if (dineroDisponible >= chocolateRama && dineroDisponible < caramelosCandy) {
        let confirmacion = prompt(`Puedes comprar: Lollipops planetarios , Gomitas de osos galácticos, Golosinas galácticas, Chocolate en rama o Caramelos CandyGalaxy, ¿deseas realizar tu compra?`);
        if (confirmacion == "si") {
            let productoElegido = Number(prompt(`¿Cuál opcion eliges? 1 - Lollipops planetarios $${lollipopsPlanetarios}, 2 - Gomitas de osos galácticos $${gomitasOsos}, 3 - Golosinas galácticas $${golosinasGalacticas}, 4 - Chocolate en rama $${chocolateRama}`));
            switch (productoElegido) {
                case 1:
                    dineroDisponible -= lollipopsPlanetarios;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 2:
                    dineroDisponible -= gomitasOsos;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 3:
                    dineroDisponible -= golosinasGalacticas;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 4:
                    dineroDisponible -= chocolateRama;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                default:
                    alert("Opcion inválida");
                    break;
            }
        } else if (confirmacion == "no") {
            alert("¡Te esperamos la próxima!");
        } else {
            alert("¡Respuesta inválida!")
        }
    }

    else {
        let confirmacion = prompt(`Puedes comprar: Lollipops planetarios , Gomitas de osos galácticos, Golosinas galácticas, Chocolate en rama o Caramelos CandyGalaxy, ¿deseas realizar tu compra?`);
        if (confirmacion == "si") {
            let productoElegido = Number(prompt(`¿Cuál opcion eliges? 1 - Lollipops planetarios $${lollipopsPlanetarios}, 2 - Gomitas de osos galácticos $${gomitasOsos}, 3 - Golosinas galácticas $${golosinasGalacticas}, 4 - Chocolate en rama $${chocolateRama}, 5 - Caramelos Candygalaxy $${caramelosCandy}`));
            switch (productoElegido) {
                case 1:
                    dineroDisponible -= lollipopsPlanetarios;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 2:
                    dineroDisponible -= gomitasOsos;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 3:
                    dineroDisponible -= golosinasGalacticas;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 4:
                    dineroDisponible -= chocolateRama;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                case 5:
                    dineroDisponible -= caramelosCandy;
                    alert(`¡¡Felicidades, has realizado tu compra!!, tu dinero actual es de: $${dineroDisponible}`)
                    break;
                default:
                    alert("Opcion inválida");
                    break;
            }
        } else if (confirmacion == "no") {
            alert("¡Te esperamos la próxima!");
        } else {
            alert("¡Respuesta inválida!")
        }
    }


}
