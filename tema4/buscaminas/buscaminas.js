{
    let tableroJuego;

    let buscaminas = {
        nivel: null,
        terminado: false,
        numeroMinas: null,
        numeroCasillas: null,
        ancho: null,
        alto: null,

        // Función que inicializa todo el comportamiento del juego
        iniciarJuego(nivel){
            buscaminas.establecerParametros(nivel); // To-Do: establecerParametros() -> establece los campos para la configuración del juego en función del nivel
            buscaminas.generaTableroUI();
            buscaminas.generarMinas(); // To-Do: generarMinas() -> Para generar las minas y añadirlas al tablero

        },

        // Establece los parámetros para la configuración de juego
        establecerParametros(nivel){
            buscaminas.nivel = nivel;
            if(nivel == 1){
                buscaminas.ancho = 10;
                buscaminas.alto = 10;
                buscaminas.numeroMinas = 6;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            }else if(nivel == 2){
                // To-Do: ajustar nivel
                buscaminas.ancho = 10;
                buscaminas.alto = 10;
                buscaminas.numeroMinas = 6;
                buscaminas.numeroCasillas = buscaminas.alto * buscaminas.ancho;
            }
            else{
                // si lleva a este punto, no está bien puesto el nivel, salta excepcion
                throw new Error('Nivel de dificultad indicado incorrecto');
            }
        },



        // Genera y añade al tablero las minas 
        generarMinas(){
            let minasColocadas = 0;
            do{
                let casilla = buscaminas.getCasillaAleatoria();
                if(casilla.value == 0){
                    casilla.value = 9;
                    minasColocadas++;
                }

            }while(minasColocadas<=buscaminas.numeroMinas);
        },


        // Selecciona una casilla aleatoria
        getCasillaAleatoria(){
            let x = getRandomInt(0, buscaminas.ancho);
            let y = getRandomInt(0, buscaminas.alto);
            return document.getElementById(x+'-'+y);
        },

        // Genera la tabla de juego en html a partir de un tamaño
        generaTableroUI() {
            tableroJuego.style.display = "grid";
            tableroJuego.style.gridTemplateColumns = "repeat(" + buscaminas.ancho + ", 1fr)";
            for (let x = 0; x < buscaminas.ancho; x++) {
                for (let y = 0; y < buscaminas.alto; y++) {
                    let celda = document.createElement("input");
                    celda.id = x + "-" + y;
                    celda.value = "0";
                    celda.readOnly = "true";
                    celda.addEventListener("click", buscaminas.comprobarCasilla);
                    tableroJuego.appendChild(celda);
                }
            }

            for (let k = 1; k <= buscaminas.ancho; k++)
                for (let f = 1; f <= buscaminas.alto; f++)
                    if (k % 2 === 0 && f % 2 === 0)
                        buscaminas.obtenerValorCasilla(k - 1, f - 1).style.color = "#9CCC65";
                    else if (k % 2 !== 0 && f % 2 !== 0)
                buscaminas.obtenerValorCasilla(k - 1, f - 1).style.color = "#9CCC65";

        },


        // Es cuando se hace click en una casilla
        // Se comprueba si está deshabilitada y si no, se hace la funcionalidad
        comprobarCasilla() {
            // Si está deshabilitado nos salimos
            if(this.disabled == true)
                return;
            console.log(this);
        },

        obtenerValorCasilla(x, y) {
            return {
                'style': {
                    'color': 'foo'
                }
            };
        }


    }

    // Función para generar int aleatorio entre dos valores
    // Fuente -> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    function init() {
        tableroJuego = document.getElementById("tableroJuego");
        buscaminas.iniciarJuego(1);
    }

    window.addEventListener('load', init);



}