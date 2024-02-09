/*
* ESCENAS:
*   - ESCENA1: Se ve la mansión
*   - ESCENA2: Se ve el sótano sin luz
*   - ESCENA3: Se ve el sótano encendido
*   - ESCENA4: Se ve a Togo en el sótano encendido
*   - ESCENA5: Idea alguna escena más. Incorpora nuevos objetos que activen eventos.
*/

/*
*  NOTA IMPORTANTE:
*  A diferencia de CSS, donde las rutas relativas lo son desde la localización del fichero CSS,
*  las rutas relativas en un JavaScript, aunque esté en fichero aparte, lo son desde la raiz del proyecto !!!!!
*/

// Desde ESCENA1: Al hacer click en la puerta de la mansión cambia a la escena2
function entra() {
  //Oculto la flecha
  document.getElementById("flecha").style.display = "none";
  // Cambio la imagen de fondo cuando entro en la mansión.
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoApagado.jpg)";
  // Oculto la puerta, ya no vamos a utilizarla
  document.getElementById("puerta").style.display = "none";
  // Muestro el interruptor, no se verá muy bien
  document.getElementById("interruptor").style.display = "block";
  //Muestro el pomo, no se verá muy bien
  document.getElementById("pomo").style.display = "block";
  //Desactivo el pomo
  document.getElementById("pomo").style.pointerEvents = "none";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Oyes a Togo en el sótano.";
  document.getElementById("parrafo2").innerHTML = "Al bajar, se cierra la puerta y te quedas a oscuras.";
  document.getElementById("parrafo3").innerHTML = "Busca un interruptor";
}
// Desde ESCENA1: Al hacer click en la flecha detrás de la mansión cambia a la SECRETA
function flecha() {
  //Cambio la iamgen de fondo cuando toco la flecha
  document.getElementById("principal").style.backgroundImage = "url(img/Puertas1Nuevo.jpeg)";
  //Oculto la flecha
  document.getElementById("flecha").style.display = "none";
  //Oculto la puerta de la mansión
  document.getElementById("puerta").style.display = "none";
  //Muetro las 3 puertas que son "transparentes"
  document.getElementById("puertaRoja").style.display = "block";
  document.getElementById("puertaVerde").style.display = "block";
  document.getElementById("puertaAzul").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Una voz misteriosa dice: No deberías estar aquí";
  document.getElementById("parrafo2").innerHTML = "La voz misteriosa continua: ¿Cuál es el siguiente número de esta serie: 3.829, 9.382, 2.938…";
  document.getElementById("parrafo3").innerHTML = "-1: 8.047 -2: 3.829 -3: 8.293";
}
//Desde SECRETA: Al hacer click en la puerta correcta paso a otro DESAFIO
function desafio() {
  // Cambio la imagen de fondo cuando entro por la puerta correcta
  document.getElementById("principal").style.backgroundImage = "url(img/BatallaMagoBuena.jpeg)";
  //Oculto las tres puertas
  document.getElementById("puertaRoja").style.display = "none";
  document.getElementById("puertaVerde").style.display = "none";
  document.getElementById("puertaAzul").style.display = "none";
  //Activo el verde del tablero
  document.getElementById("numeroVerde").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "No sabes lo que acabas de hacer";
  document.getElementById("parrafo2").innerHTML = "Si quieres continuar, a mi, El Mago Peter, has de vencer ";
  document.getElementById("parrafo3").innerHTML = "Si estas dispuesto a seguir pulsa el número en verde";
}
//Desde desafio: Al hacer click en el número paso a desafio2
function desafio2() {
  // Cambio la imagen de fondo cuando entro por la puerta correcta
  document.getElementById("principal").style.backgroundImage = "url(img/MagoMagiaMesaGG.jpeg)";
  //Oculto el verde del tablero
  document.getElementById("numeroVerde").style.display = "none";
  //Activo el número más alto
  document.getElementById("numeroAlto").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Parece ser que vas con todo";
  document.getElementById("parrafo2").innerHTML = "Tengo el poder de alterar lo correcto";
  document.getElementById("parrafo3").innerHTML = "Si para vivr estás dispuesto, toca el número más alto del tablero";
}
//Desde desafio: Al hacer click en el número correcto paso a desafio2
function desafio3() {
  // Cambio la imagen de fondo cuando entro por la puerta correcta
  document.getElementById("principal").style.backgroundImage = "url(img/MagoMagiaAlTableroGG.jpeg)";
  //Desactivo el número más alto
  document.getElementById("numeroAlto").style.display = "none";
  //Permito al usuario introducir respuesta
  document.getElementById("respuestaUsuario").style.display = "block";
  //Permito al Usuario enviar la respuesta
  document.getElementById("enviarRespuesta").style.display = "block";
  //Muestro las vidas
  document.getElementById("vida1").style.display = "block";
  document.getElementById("vida2").style.display = "block";
  document.getElementById("vida3").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Una vez presentado, en tu mente veo que a tu perro no has encontrado";
  document.getElementById("parrafo2").innerHTML = "Si recuperarlo quieres, primero a ver si me vences";
  document.getElementById("parrafo3").innerHTML = "Oro parece, plata no es. ¿Qué es?";
}
function verificarRespuesta1() {
  if (document.getElementById("respuestaUsuario").value.toLowerCase() == "un platano" || document.getElementById("respuestaUsuario").value.toLowerCase() == "el platano" || document.getElementById("respuestaUsuario").value.toLowerCase() == "un plátano" || document.getElementById("respuestaUsuario").value.toLowerCase() == "el plátano" || document.getElementById("respuestaUsuario").value.toLowerCase() == "platano" || document.getElementById("respuestaUsuario").value.toLowerCase() == "plátano") {
    ataqueExitoso1();
  } else {
    repetirPista1();
  }
}

function ataqueExitoso1() {
  //Oculto los botones anteriores
  document.getElementById("respuestaUsuario").style.display = "none";
  document.getElementById("enviarRespuesta").style.display = "none";
  //Muestro nuevos botones
  document.getElementById("respuestaUsuario2").style.display = "block";
  document.getElementById("enviarRespuesta2").style.display = "block";
  // Cambio la imagen de fondo cuando clcikeo el numero correcto
  document.getElementById("principal").style.backgroundImage = "url(img/MagoLocoGG.jpeg)";
  //Muestro la imagen de la vida3 vacia
  document.getElementById("vida3").style.backgroundImage = "url(img/CorazonVacio.png)";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "AAAGHH";
  document.getElementById("parrafo2").innerHTML = "Nunca nadie lo había adivinado";
  document.getElementById("parrafo3").innerHTML = "Blanco por dentro, verde por fuera. Si quieres que te lo diga espera ¿Qué es?";
}
function repetirPista1() {
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Parece ser que has fallado, ¿acaso con un tonto me he encontrado?";
  document.getElementById("parrafo2").innerHTML = "Una pista te otorgo, de una fruta se trata";
  document.getElementById("parrafo3").innerHTML = "Oro parece, plata no es. ¿Qué es?";
}

function verificarRespuesta2() {
  if (document.getElementById("respuestaUsuario2").value.toLowerCase() == "pera" || document.getElementById("respuestaUsuario2").value.toLowerCase() == "es pera" || document.getElementById("respuestaUsuario2").value.toLowerCase() == "una pera" || document.getElementById("respuestaUsuario2").value.toLowerCase() == "la pera") {
    ataqueExitoso2();
  } else {
    repetirPista2();
  }
}

function ataqueExitoso2() {
  // Cambio la imagen de fondo cuando clcikeo el numero correcto
  document.getElementById("principal").style.backgroundImage = "url(img/MagoEnfadadoGG.jpeg)";
  //Oculto los botones anteriores
  document.getElementById("respuestaUsuario2").style.display = "none";
  document.getElementById("enviarRespuesta2").style.display = "none";
  //Muestro nuevos botones
  document.getElementById("respuestaUsuario3").style.display = "block";
  document.getElementById("enviarRespuesta3").style.display = "block";
  //Muestro la imagen de la vida3 y vida2 vacia
  document.getElementById("vida3").style.backgroundImage = "url(img/CorazonVacio.png)";
  document.getElementById("vida2").style.backgroundImage = "url(img/CorazonVacio.png)";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "NOOOOOOO.";
  document.getElementById("parrafo2").innerHTML = "Pero como osas, prepárate.";
  document.getElementById("parrafo3").innerHTML = "¿Cuando tenía 10 años mi hermana tenía la mitad de mi edad ahora que tengo 50 años ¿Qué edad tiene mi hermana?";
}
function repetirPista2() {
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Este acertijo lo saqué de un libro de genios de 1423, es imposible.";
  document.getElementById("parrafo2").innerHTML = "Una pista te otorgo, es de la familia de alimentos del anterior.";
  document.getElementById("parrafo3").innerHTML = "Blanco por dentro, verde por fuera. Si quieres que te lo diga espera ¿Qué es?";
}

function verificarRespuesta3() {
  if (document.getElementById("respuestaUsuario3").value.toLowerCase() == "45" || document.getElementById("respuestaUsuario3").value.toLowerCase() == "cuarenta y cinco") {
    concederDeseo();
  } else {
    repetirPista3();
  }
}

function repetirPista3() {
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "HAHAHAHAHAHA. Acaso me encuentro ante un ignorante.";
  document.getElementById("parrafo2").innerHTML = "Como las matemáticas no son lo tuyo, solo te digo que la hermana tiene 5 años menos. ";
  document.getElementById("parrafo3").innerHTML = "¿Cuando tenía 10 años mi hermana tenía la mitad de mi edad ahora que tengo 50 años ¿Qué edad tiene mi hermana?";
}

function concederDeseo() {
  // Cambio la imagen de fondo cuando clcikeo el numero correcto
  document.getElementById("principal").style.backgroundImage = "url(img/MagoLamparaGG.jpeg)";
  //Oculto los botones anteriores
  document.getElementById("respuestaUsuario3").style.display = "none";
  document.getElementById("enviarRespuesta3").style.display = "none";
  //Muestro nuevos botones
  document.getElementById("respuestaUsuario4").style.display = "block";
  document.getElementById("enviarRespuesta4").style.display = "block";
  //Muestro la imagen de la vida3, vida2  y vida1 vacia
  document.getElementById("vida3").style.backgroundImage = "url(img/CorazonVacio.png)";
  document.getElementById("vida2").style.backgroundImage = "url(img/CorazonVacio.png)";
  document.getElementById("vida1").style.backgroundImage = "url(img/CorazonVacio.png)";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Gracias, me has salvado de la maldición al derrotarme.";
  document.getElementById("parrafo2").innerHTML = "A cambio de tu favor yo te otorgo un deseo.";
  document.getElementById("parrafo3").innerHTML = "";
}

function pistaDeseo() {
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Escuchas una voz mística que dice:";
  document.getElementById("parrafo2").innerHTML = "Recuerda por lo que vinistes";
  document.getElementById("parrafo3").innerHTML = "Recuerda lo que al principio perdistes";
}
function verificarRespuesta4() {
  if (document.getElementById("respuestaUsuario4").value.toLowerCase() == "togo" || document.getElementById("respuestaUsuario4").value.toLowerCase() == "perro" || document.getElementById("respuestaUsuario4").value.toLowerCase() == "a togo" || document.getElementById("respuestaUsuario3").value.toLowerCase() == "a perro" || document.getElementById("respuestaUsuario3").value.toLowerCase() == "al perro" || document.getElementById("respuestaUsuario4").value.toLowerCase() == "al perro" || document.getElementById("respuestaUsuario4").value.toLowerCase() == "el perro") {
    deseoPerro();
  } else {
    pistaDeseo();
  }
}


function deseoPerro() {
  // Cambio la imagen de fondo cuando pido que traiga a Togo
  document.getElementById("principal").style.backgroundImage = "url(img/MagoInvocaGG.jpeg)";
  // Mostramos a Togo donde la magia
  document.getElementById("togo").style.display = "block";
  //Movemos a togo donde la luz
  document.getElementById("togo").style.top = "270px";
  document.getElementById("togo").style.left = "200px";
  document.getElementById("togo").style.height = "117px";
  document.getElementById("togo").style.width = "94px";
  //Oculto los botones anteriores
  document.getElementById("respuestaUsuario4").style.display = "none";
  document.getElementById("enviarRespuesta4").style.display = "none";
  //Oculto la imagen de la vida3, vida2  y vida1 vacia
  document.getElementById("vida1").style.display = "none";
  document.getElementById("vida2").style.display = "none";
  document.getElementById("vida3").style.display = "none";
  //Activo que se pueda tocar al perro
  document.getElementById("perro").style.display = "block";
  //Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Tus deseos son ordenes.";
  document.getElementById("parrafo2").innerHTML = "Aquí tienes a tu dulce perro.";
  document.getElementById("parrafo3").innerHTML = "Ve y dale un abrazo.";
}

function finalSecreto() {
  // Cambio la imagen de fondo cuando toco a Togo
  document.getElementById("principal").style.backgroundImage = "url(img/AbrazoPerroGG.jpeg)";
  //Desactivo que se pueda tocar al perro
  document.getElementById("perro").style.display = "none";
  // Oculto la imagen de togo
  document.getElementById("togo").style.display = "none";
  //Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "FINAL SECRETO:";
  document.getElementById("parrafo2").innerHTML = "Encuentras a Togo, además de a un nuevo amigo.";
  document.getElementById("parrafo3").innerHTML = "";

}

// Desde ESCENA2: Al hacer click en el interruptor, se enciende la luz... Sólo si estaba apagada
function enciende() {
  // Cambio la imagen de fondo cuando enciendo la luz
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoEncendido.jpg)";
  // Ponemos la imagen del interruptor más nítido
  document.getElementById("interruptor").style.backgroundImage = "url(img/interruptor.png)";
  //Muestro la imagen del pomo del armario
  document.getElementById("pomo").style.backgroundImage = "url(img/pomoNuevo.png)";
  //Desactivo el pomo
  document.getElementById("pomo").style.pointerEvents = "none";
  // Evitamos que el interruptor vuelva a ser pulsado, desactivando los eventos de ratón
  document.getElementById("interruptor").style.pointerEvents = "none";
  // Mostramos la pata de Togo
  document.getElementById("pata").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Ahora que ves bien, puedes buscar a Togo";
  document.getElementById("parrafo2").innerHTML = "¿Dónde puede estar?";
  document.getElementById("parrafo3").innerHTML = "";
  //Este banco esta ocupado por un padre y un hijo, el padre se llama Juan y el hijo ya te lo ha dicho
}
// Desde ESCENA3: Al hacer click en la pata de Togo, aparece el perro
function saleTogo() {
  // Ocultamos la pata de Togo
  document.getElementById("pata").style.display = "none";
  // Mostramos a Togo encima de la alfombra
  document.getElementById("togo").style.display = "block";
  //Mostramos la cabeza
  document.getElementById("cabeza").style.display = "block";
  //Activo que puedas tocar la puerta
  document.getElementById("entrarPuerta").style.display = "block";
  //Activo el pomo
  document.getElementById("pomo").style.pointerEvents = "all";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Bieen!!!";
  document.getElementById("parrafo2").innerHTML = "Has encontrado a Togo";
  document.getElementById("parrafo3").innerHTML = "Ahora hay que salir de aquí";

}

function entrarPuerta() {
  // Cambio la imagen de fondo cuando toco la cabeza
  document.getElementById("principal").style.backgroundImage = "url(img/PasilloGG.jpeg)";
  //Oculto la cabeza
  document.getElementById("cabeza").style.display = "none";
  //Desactivo que puedas tocar la puerta
  document.getElementById("entrarPuerta").style.display = "none";
  //Oculto el pomo con cerradura
  document.getElementById("pomo").style.display = "none";
  //Oculto el interruptor
  document.getElementById("interruptor").style.display = "none";
  //Doy la vuelta a togo
  document.getElementById("togo").style.backgroundImage = "url(img/togoEspejo.png)";
  //Muevo a togo abajo
  document.getElementById("togo").style.top = "636px";
  document.getElementById("togo").style.left = "241px";
  document.getElementById("togo").style.height = "147px";
  document.getElementById("togo").style.width = "243px";
  //Activo que puedas entrar por las puertas
  document.getElementById("puertaPasillo1").style.display = "block";
  document.getElementById("puertaPasillo2").style.display = "block";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Escuchas como al entrar se cierra la puerta de atrás.";
  document.getElementById("parrafo2").innerHTML = "Hay alguien mirando.";
  document.getElementById("parrafo3").innerHTML = "Rápido, elige una salida.";
}

function puerta1() {
  // Cambio la imagen de fondo cuando toco la cabeza
  document.getElementById("principal").style.backgroundImage = "url(img/SalidaABosqueGG.jpeg)";
  //Desactivo que puedas entrar por las puertas
  //Activo que puedas salir
  document.getElementById("salidaBosque").style.display = "block";
  //Quito a togo
  document.getElementById("togo").style.display = "none";
  document.getElementById("puertaPasillo1").style.display = "none";
  document.getElementById("puertaPasillo2").style.display = "none";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Parece que estás a salvo.";
  document.getElementById("parrafo2").innerHTML = "¿Acaso eso que estamos viendo es la salida?";
  document.getElementById("parrafo3").innerHTML = "Salgamos de esta casa.";
}

function final1() {
  // Cambio la imagen de fondo cuando toco la cabeza
  document.getElementById("principal").style.backgroundImage = "url(img/SalidaCocheGG.jpeg)";
  //Desactivo que puedas salir
  document.getElementById("salidaBosque").style.display = "none";
  // Mostramos a Togo como copiloto
  document.getElementById("togo").style.display = "block";
  //Doy la vuelta a togo
  document.getElementById("togo").style.backgroundImage = "url(img/togo.png)";
  //Movemos a togo como copiloto
  document.getElementById("togo").style.top = "547px";
  document.getElementById("togo").style.left = "250px";
  document.getElementById("togo").style.height = "237px";
  document.getElementById("togo").style.width = "294px";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Final Normal: ";
  document.getElementById("parrafo2").innerHTML = "Al salir de la casa cogeis el coche y salís pitando.";
  document.getElementById("parrafo3").innerHTML = "";
}



function puerta2() {
  // Cambio la imagen de fondo cuando toco la puerta
  document.getElementById("principal").style.backgroundImage = "url(img/HabitacionGG.jpeg)";
  //Desactivo que puedas entrar por las puertas
  document.getElementById("puertaPasillo1").style.display = "none";
  document.getElementById("puertaPasillo2").style.display = "none";
  //Muestro la alarma
  document.getElementById("alarma").style.display = "block";
  //Activo que puedas esconderte en el armario
  document.getElementById("armario").style.display = "block";
  //Activo que puedas esconderte en la cama
  document.getElementById("cama").style.display = "block";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "No esperaba encontrar esta habitación aquí.";
  document.getElementById("parrafo2").innerHTML = "Da igual, eso ahora no es lo importante, ¡¡HAY UNA ALARMA SONANDO!!";
  document.getElementById("parrafo3").innerHTML = "Escondamonos antes de que venga esa sombra.";
}

function esconderArmario() {
  // Cambio la imagen de fondo cuando toco la puerta
  document.getElementById("principal").style.backgroundImage = "url(img/ArmarioEnd2GG.jpeg)";
  //Desactivo que puedas esconderte en el armario
  document.getElementById("armario").style.display = "none";
  //Desactivo que puedas esconderte en la cama
  document.getElementById("cama").style.display = "none";
  //Quito a Togo
  document.getElementById("togo").style.display = "none";
  //Aparece la sombra
  document.getElementById("sombra").style.display = "block";
  //Activo que puedas saltar por la ventana
  document.getElementById("salirVentana").style.display = "block";
  //Quito la alarma
  document.getElementById("alarma").style.display = "none";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Menos mal, obvio que la cama iba a ser muy evidente.";
  document.getElementById("parrafo2").innerHTML = "Tenemos que aprovechar ahora que esta distraido y saltar por la ventana.";
  document.getElementById("parrafo3").innerHTML = "";
}

function salirVentana() {
  // Cambio la imagen de fondo cuando toco la puerta
  document.getElementById("principal").style.backgroundImage = "url(img/CaerGG.jpeg)";
  //Quito la sombra
  document.getElementById("sombra").style.display = "none";
  //Activo que puedas huir 
  document.getElementById("huirBosque").style.display = "block";
  document.getElementById("huirBosque2").style.display = "block";
  //Activo que puedas pelear
  document.getElementById("peleaSombra").style.display = "block";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "UEPAAAAAAAA!!! Que casualidad que había una colchoneta aquí.";
  document.getElementById("parrafo2").innerHTML = "Espera, acaso eso es la sombra, y viene hacia nosotros.";
  document.getElementById("parrafo3").innerHTML = "Rápido, que hacemos, huimos, o peleamos?";
}

function pelearSombra() {
  // Cambio la imagen de fondo cuando toco la puerta
  document.getElementById("principal").style.backgroundImage = "url(img/PeleaSombraGG.jpeg)";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Final Conflictivo:";
  document.getElementById("parrafo2").innerHTML = "Decides arriesgar tu vida y la de tu mascato acabo de acabar con el mal.";
  document.getElementById("parrafo3").innerHTML = "Prefieres morir de pie que vivir de rodillas.";
}

function huirBosque() {
  // Cambio la imagen de fondo cuando toco la puerta
  document.getElementById("principal").style.backgroundImage = "url(img/HuirFinalGG.jpeg)";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Final Cobarde:";
  document.getElementById("parrafo2").innerHTML = "Como un cobarde, huyes, dejando con vida a un ente maligno.";
  document.getElementById("parrafo3").innerHTML = "Al menos te acompaña tu fiel amigo, Togo.";
}

function esconderCama() {
  // Cambio la imagen de fondo cuando toco la puerta
  document.getElementById("principal").style.backgroundImage = "url(img/CamaEndGG.jpeg)";
  //Desactivo que puedas esconderte en el armario
  document.getElementById("armario").style.display = "none";
  //Desactivo que puedas esconderte en la cama
  document.getElementById("cama").style.display = "none";
  //Quito a Togo
  document.getElementById("togo").style.display = "none";
  //Quito la alarma
  document.getElementById("alarma").style.display = "none";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Final Malo:";
  document.getElementById("parrafo2").innerHTML = "Te encuentra la sombra. ";
  document.getElementById("parrafo3").innerHTML = "";
}



function necesitasLlave() {
  //Aparece la llave
  document.getElementById("llave").style.display = "block";
  //Desactivo el pomo
  document.getElementById("pomo").style.pointerEvents = "none";
  //Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Parece ser que está cerrado";
  document.getElementById("parrafo2").innerHTML = "Intenta encontrar la llave";
  document.getElementById("parrafo3").innerHTML = "";
}
function llaveConseguida() {
  //Desactivo el pomo
  document.getElementById("pomo").style.pointerEvents = "none";
  //Movemos llave a candado
  document.getElementById("llave").style.top = "604px";
  document.getElementById("llave").style.left = "64px";
  document.getElementById("llave").style.height = "17px";
  //Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Has encontrado la llave";
  document.getElementById("parrafo2").innerHTML = "Vamos a ver que abre";
  document.getElementById("parrafo3").innerHTML = "";
  //Activo que se pueda meter en el aramario
  document.getElementById("armarioEntrar").style.display = "block";

}
function entroArmario() {
  //Cambio la imagen de fondo cuando entro al sótano
  document.getElementById("principal").style.backgroundImage = "url(img/SotanoGG.jpeg)";
  //Ocultamos a Togo
  document.getElementById("togo").style.display = "none";
  //Oculto la cabeza
  document.getElementById("cabeza").style.display = "none";
  //Ocultamos la llave
  //Aparece la llave
  document.getElementById("llave").style.display = "none";
  //Ocultamos el pomo
  document.getElementById("pomo").style.display = "none";
  //Ocultamos el interruptor
  document.getElementById("interruptor").style.display = "none";
  //Aparece el panel
  document.getElementById("panel").style.display = "block";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Que habitacion más siniestra.";
  document.getElementById("parrafo2").innerHTML = "Más nos vale estar aquí poco tiempo.";
  document.getElementById("parrafo3").innerHTML = "";
}

function panelNumerico() {
  //Cambio la imagen de fondo cuando entro al sótano
  document.getElementById("principal").style.backgroundImage = "url(img/PuertaMetal.png)";
  //Quito el panel
  document.getElementById("panel").style.display = "none";
  //Pongo el panel grande
  document.getElementById("panelTocar").style.display = "block";
  //Puedes tocar los botones
  document.getElementById("uno").style.display = "block";
  document.getElementById("dos").style.display = "block";
  document.getElementById("tres").style.display = "block";
  document.getElementById("cuatro").style.display = "block";
  document.getElementById("cinco").style.display = "block";
  document.getElementById("seis").style.display = "block";
  document.getElementById("siete").style.display = "block";
  document.getElementById("submit").style.display = "block";
  document.getElementById("cero").style.display = "block";
}
function uno(){
  
}


function muerte() {
  document.getElementById("principal").style.backgroundImage = "url(img/Muerte.jpeg)";
  //Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Parece ser que no era el camino correcto";
  document.getElementById("parrafo2").innerHTML = "Intentalo de nuevo";
  document.getElementById("parrafo3").innerHTML = "";

}


// Desde ESCENA4.1: Idea un nuevo evento que desencadene alguna acción en tu página
// Desde ESCENA4.2: Idea un nuevo evento que desencadene alguna acción en tu página
// Desde ESCENA4.3: Idea un nuevo evento que desencadene alguna acción en tu página