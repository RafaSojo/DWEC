{
    let inputNombre, inputEmail, inputFecha, inputHora, inputNoches, inputPersonas, inputDesayuno, inputAlmuerzo, inputCena,
        inputsEdad, spanNombre, spanEmail, spanFecha, spanHora, spanNoches, spanPersonas, spanEdad;

    function init() {
        // Cargamos los inputs
        inputNombre = document.getElementById('nombre');
        inputEmail = document.getElementById('email');
        inputFecha = document.getElementById('fecha');
        inputHora = document.getElementById('hora');
        inputNoches = document.getElementById('noches');
        inputPersonas = document.getElementById('personas');
        inputDesayuno = document.getElementById('desayuno');
        inputAlmuerzo = document.getElementById('almuerzo');
        inputCena = document.getElementById('cena');
        inputsEdad = document.getElementsByName('edad');

        // Cargamos los span
        spanNombre = document.getElementById('spanNombre');
        spanEmail = document.getElementById('spanEmail');
        spanFecha = document.getElementById('spanFecha');
        spanHora = document.getElementById('spanHora');
        spanNoches = document.getElementById('spanNoches');
        spanPersonas = document.getElementById('spanPersonas');
        // spanCena = document.getElementById('spanCena');
        spanEdad = document.getElementById('spanEdad');

        // Ponemos los listeners

        document.getElementById('enviar').addEventListener('click', comprobarFormulario);
        inputNombre.addEventListener('blur', checkNombre);
        inputEmail.addEventListener('blur', checkEmail);
        inputFecha.addEventListener('blur', checkFecha);
        inputHora.addEventListener('blur', checkHora);
        inputNoches.addEventListener('blur', checkNoches);
        inputPersonas.addEventListener('blur', inputPersonas);
        // inputsEdad.addEventListener('blur', checkEdad);


    }

    function comprobarFormulario(event) {
        event.preventDefault();
        let elementoFoco = false;

        // Primero mostramos los errores
        if (!checkEdad())
            elementoFoco = inputsEdad[0];
        if (!checkPersonas())
            elementoFoco = inputPersonas;
        if (!checkNoches())
            elementoFoco = inputNoches;
        if (!checkHora())
            elementoFoco = inputHora;
        if (!checkFecha())
            elementoFoco = inputFecha;
        if (!checkEmail())
            elementoFoco = inputEmail;
        if (!checkNombre())
            elementoFoco = inputNombre;

        // En caso de error mostramos el foco, si no, todo ha ido correcto y creamos el objeto
        if (elementoFoco != false) {
            elementoFoco.focus();
            return;
        }

        let reserva = new Reserva(inputNombre.value, inputEmail.value, inputFecha.value, inputHora.value, inputNoches.value,
            inputPersonas.value, inputDesayuno.checked, inputAlmuerzo.checked, inputCena.checked, getEdad(inputsEdad));

        console.log(reserva); // ## DEBUG ##

    }

    function checkEdad() {
        if (getEdad(inputsEdad) != undefined) {
            spanEdad.innerText = "";
            return true;
        }
        spanEdad.innerText = "Tienes que seleccionar un campo al menos";
        return false;
    }

    function checkPersonas() {
        if (parseInt(inputPersonas.value) > 0) {
            spanPersonas.innerText = "";
            return true;
        }
        spanPersonas.innerText = "Tienes que poner más de 0 personas";
        return false;
    }

    function checkNoches() {
        if (parseInt(inputNoches.value) > 0) {
            spanNoches.innerText = "";
            return true;
        }
        spanNoches.innerText = "Tienes que poner más de 0 noche";
        return false;
    }

    function checkHora() {
        if (/^[0-9]{2}:[0-9]{2}$/i.test(inputHora.value)) {
            spanHora.innerText = "";
            return true;
        }
        spanHora.innerText = "Hora no válida";
        return false;
    }

    function checkFecha() {
        let comprobacion = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/i.exec(inputFecha.value);
        if (comprobacion != null) {
            let fechaAComprobar = new Date(comprobacion[2] + "/" + comprobacion[1] + "/" + comprobacion[3]);
            if(fechaAComprobar != "Invalid Date" && fechaAComprobar > new Date()){
                spanFecha.innerText = "";
                return true;
            }
            spanFecha.innerText = "La fecha no puede ser del pasado";
            return false;
        }
        spanFecha.innerText = "Fecha no válida";
        return false;
    }

    function checkEmail() {
        if (/^([a-z]+@[a-z]+\.[a-z]{2,9})$/i.test(inputEmail.value)) {
            spanEmail.innerText = "";
            return true;
        }
        spanEmail.innerText = "Email inválido";
        return false;
    }

    function checkNombre() {
        if (inputNombre.value.length > 0) {
            spanNombre.innerText = "";
            return true;
        }
        spanNombre.innerText = "Tienes que introducir un nombre";
        return false;
    }

    // Para obtener el valor del radio button marcado
    function getEdad(inputs) {
        for (const elemento of inputs)
            if (elemento.checked)
                return elemento.value;
    }


    window.addEventListener('load', init);
}