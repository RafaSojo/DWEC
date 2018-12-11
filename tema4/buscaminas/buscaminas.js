{
    let tableroJuego;

    /*
        Por hacer:
            * Implementar banderitas (click derecho)
            * Implementar sugerencias (ambos clicks)
            * Cargar en memoria los campos para minimizar el acceso al DOM
            * Mejor GUI
            * Quitar eventListeners cuando se descubre
    */
    let buscaminas = {
        nivel: null,
        terminado: false,
        numeroMinas: null,
        numeroCasillas: null,
        ancho: null,
        alto: null,
        nivelTexto: null,

        caracterMina: "*",

        // Función que inicializa todo el comportamiento del juego
        iniciarJuego(nivel) {
            buscaminas.establecerParametros(nivel);
            buscaminas.generaTableroUI();
            buscaminas.generarMinas();
            buscaminas.generarNumeros();
        },

        // Establece los parámetros para la configuración de juego
        establecerParametros(nivel) {
            // Dificultad ajustada según Wikipedia https://es.wikipedia.org/wiki/Buscaminas
            buscaminas.nivel = nivel;
            if (nivel == 1) {
                buscaminas.nivelTexto = 'Fácil';
                buscaminas.ancho = 8;
                buscaminas.alto = 8;
                buscaminas.numeroMinas = 10;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            } else if (nivel == 2) {
                buscaminas.nivelTexto = 'Medio';
                buscaminas.ancho = 16;
                buscaminas.alto = 16;
                buscaminas.numeroMinas = 40;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            }  else if (nivel == 3) {
                buscaminas.nivelTexto = 'Difícil';
                buscaminas.ancho = 16;
                buscaminas.alto = 30;
                buscaminas.numeroMinas = 99;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            } 
            else {
                // si lleva a este punto, no está bien puesto el nivel, salta excepcion
                throw new Error('Nivel de dificultad indicado incorrecto');
            }
        },



        // Genera y añade al tablero las minas 
        generarMinas() {
            let minasColocadas = 0;
            do {
                let casilla = buscaminas.getCasillaAleatoria();
                if (casilla.value == 0) {
                    casilla.value = buscaminas.caracterMina;
                    minasColocadas++;
                }

            } while (minasColocadas < buscaminas.numeroMinas);
        },


        // Genera los números en función de las minas
        generarNumeros() {
            for (let ancho = 0; ancho < buscaminas.alto; ancho++) {
                for (let alto = 0; alto < buscaminas.ancho; alto++) {
                    let input = document.getElementById(ancho + '-' + alto);

                    if (input.value == buscaminas.caracterMina)
                        continue;
                    let numeroMinas = 0;
                    // ahora vamos recorriendo todas las casillas de alrededor y vemos si son minas para colocar el numero
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            let elemento = document.getElementById((ancho + i) + '-' + (alto + j));
                            if (elemento != null && elemento.value == buscaminas.caracterMina)
                                numeroMinas++;
                        }
                    }
                    input.value = numeroMinas;
                }
            }
        },



        desactivarTablero(){
            clearInterval(idIntervalo);
            for (let ancho = 0; ancho < buscaminas.ancho; ancho++) {
                for (let alto = 0; alto < buscaminas.alto; alto++) {
                    let elemento = document.getElementById(alto + '-' + ancho)
                    elemento.style = "background-color: #fff";
                    elemento.disabled = true;
                }
            }
        },


        // Selecciona una casilla aleatoria
        getCasillaAleatoria() {
            let x = getRandomInt(0, buscaminas.alto);
            let y = getRandomInt(0, buscaminas.ancho);
            return document.getElementById(x + '-' + y);
        },

        // Genera la tabla de juego en html a partir de un tamaño
        generaTableroUI() {
            tableroJuego.innerHTML = '';
            tableroJuego.style.display = "grid";
            tableroJuego.style.gridTemplateColumns = "repeat(" + buscaminas.ancho + ", 1fr)";
            // tableroJuego.style.gridTemplateRows = "repeat("+ buscaminas.alto +", 1fr)";
            document.getElementById('contenedorTablero').style = "display: inline-block;";
            document.getElementById('spanDificultad').innerText = buscaminas.nivelTexto;
            idIntervalo = setInterval(actualizarTiempo, 1000);
            tiempo = 0;
            for (let x = 0; x < buscaminas.alto; x++) {
                for (let y = 0; y < buscaminas.ancho; y++) {
                    let celda = document.createElement("input");
                    celda.style = "background-color: #000";
                    celda.id = x + "-" + y;
                    celda.setAttribute('descubierto', false);
                    celda.value = "0";
                    celda.readOnly = "true";
                    celda.addEventListener("click", buscaminas.comprobarCasillaCallBack);
                    tableroJuego.appendChild(celda);
                }
            }
        },


        comprobarCasillaCallBack() {
            if (this.disabled == true || this.getAttribute('descubierto') == true)
                return;

            buscaminas.comprobarCasilla(this);
           buscaminas.comprobarGanar();
        },


        // Es cuando se hace click en una casilla
        // Se comprueba si está deshabilitada y si no, se hace la funcionalidad
        comprobarCasilla(elemento) {

            elemento.style = "background-color: #fff";
            elemento.setAttribute('descubierto', 'true');

            // Comprobamos si es una mina
            if (elemento.value == buscaminas.caracterMina)
                buscaminas.perder();

            // Si el valor del campo es 0, descubre las casillas recursivamente
            if (elemento.value == '0')
                buscaminas.descubrirRecursivo(elemento.id);
        },


        // Descubre recursivamente los elementos de alrededor si son 0
        descubrirRecursivo(id) {
            let ancho, alto;
            [ancho, alto] = id.split('-');
            // for (let i = -1; i <= 1; i+=2) {
            //     for (let j = -1; j <= 1; j+=2) {
            // let l1 =[0,-1,1,0];
            // let l2= [-1,0,0,1];
            //     for(let i=0;i<l1.length;i++){
            //         let elemento = document.getElementById((parseInt(ancho) + l1[i]) + '-' + (parseInt(alto) + l2[i]));
            //         // console.log(elemento);
            //         // Comprobamos si nos hemos salido
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let elemento = document.getElementById((parseInt(ancho) + i) + '-' + (parseInt(alto) + j));
                    // console.log(elemento);
                    if (elemento != null && elemento.value != buscaminas.caracterMina && elemento.getAttribute('descubierto') == 'false')
                        buscaminas.comprobarCasilla(elemento);
                }
            }

        },

        // Función para comprobar las casillas que quedan por descubrir y las minas para comprobar cuando se ha ganado
        comprobarGanar(){
            if(buscaminas.numeroMinas == buscaminas.casillasSinDescubrir())
                buscaminas.ganar();
        },

                // Esta funcion se invoca cuando ganamos la partida. Deshabilita todos los inputs
                ganar(){
           buscaminas.desactivarTablero();
            alert('Has ganado!!');
        },
                // Esta funcion se invoca cuando perdemos la partida. Deshabilita todos los inputs
                perder() {
                    buscaminas.desactivarTablero();
                    alert('Has perdido!! :(');
                 },

        // To-Do: implementar casillas sin descubrir
        casillasSinDescubrir(){
            let contador = 0;
            for (let x = 0; x < buscaminas.ancho; x++) 
                for (let y = 0; y < buscaminas.alto; y++)
                    if(document.getElementById(y+'-'+x).getAttribute('descubierto') == 'false')
                        contador++;
            //console.log(contador);
            return contador;
        }


    }

    // Función para generar int aleatorio entre dos valores
    // Fuente -> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    // Wrappers para iniciar el juego
    function iniciaJuego(){
        buscaminas.iniciarJuego(this.value);
    }

    // Función que actualiza el tiempo de partida
    function actualizarTiempo(){
        spanTiempo.innerText = tiempo++;
    }

    let spanTiempo,idIntervalo, tiempo;
    function init() {
        tableroJuego = document.getElementById("tableroJuego");
        document.getElementById('iniciarJuego').addEventListener('change',iniciaJuego);
        spanTiempo = document.getElementById('spanTiempo');
    }

    window.addEventListener('load', init);



}