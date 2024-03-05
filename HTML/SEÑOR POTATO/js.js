function verificarRespuesta() {
    if (document.getElementById("respuestaUsuario").value.toLowerCase() == "woody" || document.getElementById("respuestaUsuario").value.toLowerCase() == "rex" || document.getElementById("respuestaUsuario").value.toLowerCase() == "soldados" || document.getElementById("respuestaUsuario").value.toLowerCase() == "slinky" || document.getElementById("respuestaUsuario").value.toLowerCase() == "marcianos" || document.getElementById("respuestaUsuario").value.toLowerCase() == "señor potato" || document.getElementById("respuestaUsuario").value.toLowerCase() == "buzz" || document.getElementById("respuestaUsuario").value.toLowerCase() == "lotso" || document.getElementById("respuestaUsuario").value.toLowerCase() == "andy" || document.getElementById("respuestaUsuario").value.toLowerCase() == "ham") {
        comprobarParte();
    } else {
        incorrecto1();
    }
}

function comprobarParte() {
    var parteSeleccionada = document.getElementById("Partes").value;
    switch (parteSeleccionada) {
        case "boca":
            document.getElementById("imgBoca").style.display = "block";
            break;
        case "cabeza":
            document.getElementById("imgCabeza").style.display = "block";
            break;
        case "brazoizq":
            document.getElementById("imgBrazoizq").style.display = "block";
            break;
        case "brazodec":
            document.getElementById("imgBrazodec").style.display = "block";
            break;
        case "piernas":
            document.getElementById("imgPiernas").style.display = "block";
            break;
        case "orejaizq":
            document.getElementById("imgOrejaizq").style.display = "block";
            break;
        case "orejadec":
            document.getElementById("imgOrejadec").style.display = "block";
            break;
        case "pieizq":
            document.getElementById("imgPieizq").style.display = "block";
            break;
        case "piedec":
            document.getElementById("imgPiedec").style.display = "block";
            break;
        // Añade los casos restantes para las demás partes del cuerpo
        default:
            alert("Parte del cuerpo no reconocida");
            break;
    }
}

function incorrecto1() {
    alert("No hay personaje con ese nombre");
}