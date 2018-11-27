{
    let buscaminas = {
        nivel = "principiante",
        terminado = false,
        numeroBombas = null,
        numeroCasillas = null,

        // Genera un tablero en función de la dificultad [WIP]
        generarTablero() {
            if (buscaminas.nivel === "principiante")
                buscaminas.generaTableroUI(10);
            else if (buscaminas.nivel === "intermedio")
                buscaminas.generaTableroUI(16);
        },

        // Genera la tabla de juego en html a partir de un tamaño
        generaTableroUI(tamanio){



            
        }


    }




}