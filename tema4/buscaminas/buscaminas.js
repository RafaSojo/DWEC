{
    let tableroJuego;
    
    let buscaminas = {
        nivel: "principiante",
        terminado: false,
        numeroBombas: null,
        numeroCasillas: null,
        
        // Genera un tablero en función de la dificultad [WIP]
        generarTablero() {
            if (buscaminas.nivel === "principiante")
            buscaminas.generaTableroUI(10);
            else if (buscaminas.nivel === "intermedio")
            buscaminas.generaTableroUI(16);
        },
        
        // Genera la tabla de juego en html a partir de un tamaño
        generaTableroUI(tamanio){
            
            buscaminas.funcionalidadGeneraTablero(tamanio);

            
        },
        
        
        
        funcionalidadGeneraTablero(casillasNivel) {
            tableroJuego.style.display = "grid";
            tableroJuego.style.gridTemplateColumns =
            "repeat(" + casillasNivel + ", 1fr)";
      
            for (let i = 0; i < casillasNivel; i++) {
                for (let j = 0; j < casillasNivel; j++) {
                let celda = document.createElement("input");
                celda.id = i + "" + j;
                celda.value = "0";
                celda.readOnly = "true";
                celda.addEventListener("click", buscaminas.comprobarCasilla);
                celda.style.background = "#7CB342";
                celda.style.color = "#fff";
                tableroJuego.appendChild(celda);
            }
        }
        
            for (var k = 1; k <= casillasNivel; k++) {
                for (var f = 1; f <= casillasNivel; f++) {
                    if (k % 2 === 0 && f % 2 === 0) {
                        buscaminas.obtenerValorCasilla(k - 1, f - 1).style.color = "#9CCC65";
                } else if (k % 2 !== 0 && f % 2 !== 0) {
                  buscaminas.obtenerValorCasilla(k - 1, f - 1).style.color = "#9CCC65";
                }
              }
            }
        }
        
        
    }
    function init(){
        tableroJuego = document.getElementById("tableroJuego");
        buscaminas.generarTablero();
    }
    
    window.addEventListener('load', init);
    

    
}