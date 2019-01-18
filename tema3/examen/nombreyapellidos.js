{
    let set = new Set();
    const expresion = /^((?:[a-záéíóúñ]{1,})(?:[ ]{1,}(?:[a-záéíóúñ]{1,}))*)[ ]*,[ ]*([a-záéíóúñ]{1,})$/i;
    let spanError, spanNombre, spanApellidos, inputTexto; 

    function init() {
        // Para ir para atrás
        document.getElementById('atras').addEventListener('click', irAtras);

        spanError = document.getElementById('mensajeError');
        spanNombre = document.getElementById('nombre');
        spanApellidos = document.getElementById('apellidos');
        inputTexto = document.getElementById('nombreApellidos');
        
        inputTexto.addEventListener('blur', compruebaInput);
    }

    function compruebaInput(){
        try{
            let [nombre, apellidos] = extraeNombre(inputTexto.value);
            let nombreYApellidos = nombre + " " + apellidos;

            if(set.has(nombreYApellidos))
                throw new Error('REPETIDO');
            
            set.add(nombreYApellidos);

            spanError.innerText = '';
            spanNombre.innerText = nombre;
            spanApellidos.innerText = apellidos;
            inputTexto.value = '';
        } catch(error){
            spanError.innerText = error.message;
        }
    }

    function extraeNombre(texto) {
        try {
            let [, apellidos, nombre] = expresion.exec(texto.trim());
            return [nombre, apellidos.replace(/[ ]+/g, " ")];
        } catch (error) {
            throw new Error('Error. Formato correcto: Cuadrado Perfecto, Anacleto');
        }
    }

    function irAtras(event){
        event.preventDefault()
        window.history.back();
    }
 
    window.addEventListener('load', init);
}