{
    function init() {
        // Para ir para atrás
        document.getElementById('atras').addEventListener('click', irAtras);

        // Para resetear
        document.getElementById('resetear').addEventListener('click', resetear);

        let visita = window.localStorage.getItem('contador');

        incrementarVisita(visita);
        
        escribirMensaje(generaMensaje(visita));
    }

    function generaMensaje(visita) {
        if (visita == null || visita == 0)
            return "Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas.";
        if (visita == 1)
            return "Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?";
        return `Ya empiezas a ser pesado. Esta es la vez número ${parseInt(visita)+1} que entras. Sigue con tus cosas`;
    }

    function resetear() {
        localStorage.removeItem("contador");
        escribirMensaje("RESETEADO");
    }

    function incrementarVisita(visita) {
        if (visita == null || visita == 0)
            window.localStorage.setItem('contador', 1);
        else
            window.localStorage.setItem('contador', parseInt(visita) + 1);
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