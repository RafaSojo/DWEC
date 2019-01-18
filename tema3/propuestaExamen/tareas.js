{
    let inputNuevaTarea;
    let listaTareas = []; // Estructura -> {'valor':'Este es el valor de la tarea','realizada':false}
    let divPendientes, divRealizadas, pError;

    function init() {
        document.getElementById('atras').addEventListener('click', irAtras);
        document.getElementById('nuevaTarea').addEventListener('click', nuevaTarea);

        inputNuevaTarea = document.getElementById('textoNuevaTarea');
        divPendientes = document.getElementById('tareasPendientes');
        divRealizadas = document.getElementById('tareasRealizadas');
        pError = document.getElementById('mensajeError');
    }

    function nuevaTarea() {
        texto = inputNuevaTarea.value;
        try {
            comprobarQueNoEsta(texto);
            listaTareas.push({
                'valor': texto,
                'realizada': false
            });
            pintarTareas();
            inputNuevaTarea.value = ''; // Resetear input
            pError.innerText = '';
        } catch (error) {
            pError.innerText = error.message;
        }
    }

    // Comprobación si ya existe la tarea
    function comprobarQueNoEsta(texto) {
        for (let i = 0; i < listaTareas.length; i++)
            if (listaTareas[i].valor == texto)
                throw new Error("La tarea ya existe");
    }

    function pintarTareas() {
        let li = document.createElement('li');

        // Primero ponemos las pendientes
        let ulPendientes = document.createElement("ul");
        for (let i = 0; i < listaTareas.length; i++) {
            if (listaTareas[i].realizada == false) {
                let liTemporal = li.cloneNode();
                liTemporal.innerText = listaTareas[i].valor + '  ';
                let botonTemporal = document.createElement('button');
                botonTemporal.innerText = "Hacer tarea";
                botonTemporal.setAttribute('idTarea', i);
                botonTemporal.addEventListener('click', hacerTarea);
                liTemporal.appendChild(botonTemporal);
                ulPendientes.appendChild(liTemporal);
            }
        }
        // Reseteamos temporalmente así
        divPendientes.innerHTML = '';
        divPendientes.appendChild(ulPendientes);


        // Ahora podemos las realizadas
        let ulRealizadas = document.createElement("ul");
        for (let i = 0; i < listaTareas.length; i++) {
            if (listaTareas[i].realizada == true) {
                let liTemporal = li.cloneNode();
                liTemporal.innerText = listaTareas[i].valor;
                ulRealizadas.appendChild(liTemporal);
            }
        }

        // Reseteamos temporalmente así
        divRealizadas.innerHTML = '';
        divRealizadas.appendChild(ulRealizadas);
    }


    function hacerTarea() {
        listaTareas[this.getAttribute('idTarea')].realizada = true;
        pintarTareas();
    }

    function irAtras(event) {
        event.preventDefault()
        window.history.back();
    }

    window.addEventListener('load', init);

}