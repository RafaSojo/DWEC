{
    let tableroJuego;

    let buscaminas = {
        nivel: null,
        terminado: false,
        numeroMinas: null,
        numeroCasillas: null,
        ancho: null,
        alto: null,

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
            buscaminas.nivel = nivel;
            if (nivel == 1) {
                buscaminas.ancho = 10;
                buscaminas.alto = 10;
                buscaminas.numeroMinas = 1;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            } else if (nivel == 2) {
                // To-Do: ajustar nivel
                buscaminas.ancho = 20;
                buscaminas.alto = 20;
                buscaminas.numeroMinas = 32;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            }  else if (nivel == 3) {
                // To-Do: ajustar nivel
                buscaminas.ancho = 30;
                buscaminas.alto = 30;
                buscaminas.numeroMinas = 60;
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
            for (let ancho = 0; ancho < buscaminas.ancho; ancho++) {
                for (let alto = 0; alto < buscaminas.alto; alto++) {
                    let input = document.getElementById(ancho + '-' + alto);
                    if (input.value == buscaminas.caracterMina)
                        continue;
                    let numeroMinas = 0;
                    // ahora vamos recorriendo todas las casillas de alrededor y vemos si son minas para colocar el numero
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            let elemento = document.getElementById((ancho + i) + '-' + (alto + j));
                            // Comprobamos si nos hemos salido
                            if (elemento != null && elemento.value == buscaminas.caracterMina)
                                numeroMinas++;
                        }
                    }
                    input.value = numeroMinas;
                }
            }
        },

        // Esta funcion se invoca cuando perdemos la partida. Deshabilita todos los inputs
        perder() {
           buscaminas.desactivarTablero();
           alert('Has perdido!! :(');
        },

        desactivarTablero(){
            for (let ancho = 0; ancho < buscaminas.ancho; ancho++) {
                for (let alto = 0; alto < buscaminas.alto; alto++) {
                    let elemento = document.getElementById(ancho + '-' + alto)
                    elemento.style = "background-color: #fff";
                    elemento.disabled = true;
                }
            }
        },


        // Selecciona una casilla aleatoria
        getCasillaAleatoria() {
            let x = getRandomInt(0, buscaminas.ancho);
            let y = getRandomInt(0, buscaminas.alto);
            return document.getElementById(x + '-' + y);
        },

        // Genera la tabla de juego en html a partir de un tamaño
        generaTableroUI() {
            tableroJuego.innerHTML = '';
            tableroJuego.style.display = "grid";
            tableroJuego.style.gridTemplateColumns = "repeat(" + buscaminas.ancho + ", 1fr)";
            for (let x = 0; x < buscaminas.ancho; x++) {
                for (let y = 0; y < buscaminas.alto; y++) {
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
            elemento.setAttribute('descubierto', true);

            // Comprobamos si es una mina
            if (elemento.value == buscaminas.caracterMina)
                buscaminas.perder();

            // Si el valor del campo es 0, descubre las casillas recursivamente
            if (elemento.value == 0)
                buscaminas.descubrirRecursivo(elemento.id);
        },


        // Descubre recursivamente los elementos de alrededor si son 0
        descubrirRecursivo(id) {
            let ancho, alto;
            [ancho, alto] = id.split('-');
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let elemento = document.getElementById((parseInt(ancho) + i) + '-' + (parseInt(alto) + j));
                    // Comprobamos si nos hemos salido
                    if (elemento != null && elemento.value != buscaminas.caracterMina && elemento.getAttribute('descubierto') == 'false')
                        buscaminas.comprobarCasilla(elemento);

                }
            }

        },



        obtenerValorCasilla(x, y) {
            return {
                'style': {
                    'color': 'foo'
                }
            };
        },

        // Función para comprobar las casillas que quedan por descubrir y las minas para comprobar cuando se ha ganado
        comprobarGanar(){
            if(buscaminas.numeroMinas == buscaminas.casillasSinDescubrir())
                buscaminas.ganar();
        },

        // To-Do: implementar el ganar
        ganar(){
           buscaminas.desactivarTablero();
            alert('Has ganado!!');
        },

        // To-Do: implementar casillas sin descubrir
        casillasSinDescubrir(){
            let contador = 0;
            for (let x = 0; x < buscaminas.ancho; x++) 
                for (let y = 0; y < buscaminas.alto; y++)
                    if(document.getElementById(x+'-'+y).getAttribute('descubierto') == 'true')
                        contador++;
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

    function init() {
        tableroJuego = document.getElementById("tableroJuego");
        // buscaminas.iniciarJuego(1);

        document.getElementById('iniciarJuego').addEventListener('change',iniciaJuego);
    }

    window.addEventListener('load', init);



}