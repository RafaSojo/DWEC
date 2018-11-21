{
    var set = new Set();
    function init() {
        // Para ir para atrás
        document.getElementById('atras').addEventListener('click', irAtras);

        document.getElementById('nombreApellidos').addEventListener('blur', compruebaInput);
    }

    function compruebaInput(){
        let elementoNombre = document.getElementById('nombre');
        let elementoApellidos = document.getElementById('apellidos');

        // Resetear inputs
        elementoNombre.innerText = "";
        elementoApellidos.innerText = "";
        const expresion = /([A-ZÁÉÍÓÚÑ ]+), ([A-ZÁÉÍÓÚÑ ]+)/i;

        let nombre,apellidos;

        let texto = document.getElementById('nombreApellidos').value;

        let mensajeError = "";
        try{
            if(expresion.test(texto) == false){
                // lanzamos la excepcion
                // raise Exception;
                 mensajeError = "Error de formato";

            }
            else{

                // TO-DO destructuring
                resultados = expresion.exec(texto);
                completo = resultados[0];
                nombre = resultados[2];
                apellidos = resultados[1];
                if(set.has(completo) == true){
        
                    // lanzariamos exception
                    mensajeError = "REPETIDO";
                }else
                {
                    elementoNombre.innerText = nombre;
                    elementoApellidos.innerText = apellidos;
                    set.add(completo);
                }
            }
        }
        catch{
            mensajeError = "Error de formato";
        }

        document.getElementById('mensajeError').innerText = mensajeError;

    }


    
    function irAtras(event){
        event.preventDefault()
        window.history.back();
    }
 

    window.addEventListener('load', init);
}