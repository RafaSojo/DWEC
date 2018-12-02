{
    function init(){
        document.getElementById('optionComer').addEventListener('selected', comerGato);
        



    }


    let gato = {
        // Campos:
        nombre: "Juan", // To-Do: nombre aleatorio
        peso: null,
        vivo: true,
        PESO_MAXIMO: 15,
        PESO_MINIMO: 2,

        comer(){
            // To-Do: sumar peso
        },

        jugar(){
            // To-Do: jugar
        }
        
        

    };

    function comerGato(){

    }

    window.addEventListener('click', init);
}