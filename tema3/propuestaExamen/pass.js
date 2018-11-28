{
    let spanMensaje;
    function init() {
        spanMensaje = document.getElementById('mensaje');
        document.getElementById('atras').addEventListener('click', irAtras);
        document.getElementById('inputClave').addEventListener('blur', compruebaClave);
    }

    function compruebaClave() {
        // this ahora representa el objeto que lo ha llamado. Es decir el input.
        let clave = this.value;
        let puntuacion = 0;

        try {
            if (clave.length < 8)
                throw new Error("La clave tiene que tener mínimo 8 caracteres.")

            if (/[A-Z]/g.test(clave))
                puntuacion++;
            if (/[a-z]/g.test(clave))
                puntuacion++;
            if (/[^a-zA-Z0-9]/g.test(clave))
                puntuacion++;
            if ( /[0-9]/g.test(clave))
                puntuacion++;
            spanMensaje.innerText = `La contraseña tiene una puntuación de ${puntuacion} de 4`;
        } catch (error) {
            spanMensaje.innerText = error.message;
        }
    }

    function irAtras(event) {
        event.preventDefault()
        window.history.back();
    }
    window.addEventListener('load', init);
}