{
    function init() {
        // Para ir para atrás
        document.getElementById('atras').addEventListener('click', irAtras);

        // Para resetear
        document.getElementById('resetear').addEventListener('click', resetear);

        incrementarVisita();

        let visita = window.localStorage.getItem('contador');

        escribirMensaje(generaMensaje(visita));
    }

    function generaMensaje(visita) {
        if (visita == null || visita == 1)
            return "Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas.";
        if (visita == 2)
            return "Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?";
        return "Ya empiezas a ser pesado. Esta es la vez número " + visita + " que entras. Sigue con tus cosas";
    }

    function resetear() {
        window.localStorage.setItem('contador', 0);
        escribirMensaje("RESETEADO");
    }

    function incrementarVisita() {
        let visita = window.localStorage.getItem('contador');
        if (visita == null || visita == 0)
            window.localStorage.setItem('contador', 1);
        else
            window.localStorage.setItem('contador', Number(visita) + 1);
    }

    function escribirMensaje(mensaje){
        document.getElementById('mensaje').innerText = mensaje;
    }

    function irAtras(event){
        event.preventDefault()
        window.history.back();
    }

    window.addEventListener('load', init);
}