{
    const expMayusculas = /[A-Z]+/g;
    const expMinusculas = /[a-z]+/g;
    const expCaracteres = /[^a-zA-Z0-9]+/g;
    const expNumeros = /[0-9]+/g;
    let spanMensaje;

    function init() {
        spanMensaje = document.getElementById('mensaje');
        document.getElementById('atras').addEventListener('click', irAtras);
        document.getElementById('password').addEventListener('blur', compruebaClave);
    }

    function compruebaClave() {
        // this ahora representa el objeto que lo ha llamado. Es decir el input.
        let clave = this.value;
        let puntuacion = 0;

        try {
            if (clave.length < 8)
                throw new Error("La clave tiene que tener mínimo 8 caracteres.")

            if (expMayusculas.test(clave))
                puntuacion++;
            if (expMinusculas.test(clave))
                puntuacion++;
            if (expCaracteres.test(clave))
                puntuacion++;
            if (expNumeros.test(clave))
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