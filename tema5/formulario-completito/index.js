{
    let nombre, dni, sexo, email, fechaNacimiento, telefono, cuentaCorriente, web, terminos;
    let spanNombre, spanDNI, spanSexo, spanEmail, spanFechaNacimiento, spanTelefono, spanCuentaCorriente, spanWeb, spanTerminos;

    function init() {

        // Inputs
        nombre = document.getElementById('nombre');
        dni = document.getElementById('dni');
        sexo = document.getElementsByName('sexo');
        email = document.getElementById('email');
        fechaNacimiento = document.getElementById('fechaNacimiento');
        telefono = document.getElementById('telefono');
        cuentaCorriente = document.getElementById('cuenta');
        web = document.getElementById('web');
        terminos = document.getElementById('terminos');

        // Spans
        spanNombre = document.getElementById('spanNombre');
        spanDNI = document.getElementById('spanDni');
        spanSexo = document.getElementById('spanSexo');
        spanEmail = document.getElementById('spanEmail');
        spanFechaNacimiento = document.getElementById('spanFechaNacimiento');
        spanTelefono = document.getElementById('spanTelefono');
        spanCuentaCorriente = document.getElementById('spanCuentaCorriente');
        spanWeb = document.getElementById('spanWeb');
        spanTerminos = document.getElementById('spanTerminos');

        // Listeners
        document.getElementById('enviar').addEventListener('click', validar);

        nombre.addEventListener('blur', checkNombre);
        dni.addEventListener('blur', checkDni);
        email.addEventListener('blur', checkEmail);
        fechaNacimiento.addEventListener('blur', checkFecha);
        telefono.addEventListener('blur', checkTelefono);
        cuentaCorriente.addEventListener('blur', checkCuenta);
        web.addEventListener('blur', checkWeb);
        terminos.addEventListener('blur', checkTerminos);

    }

    function validar() {
        event.preventDefault();
        let elementoFoco = false;

        // Primero mostramos los errores
        if (!checkTerminos())
            elementoFoco = terminos;
        if (!checkWeb())
            elementoFoco = web;
        if (!checkCuenta())
            elementoFoco = cuentaCorriente;
        if (!checkTelefono())
            elementoFoco = telefono;
        if (!checkFecha())
            elementoFoco = fechaNacimiento;
        if (!checkEmail())
            elementoFoco = email;
        if (!checkSexo())
            elementoFoco = sexo[0];
        if (!checkDni())
            elementoFoco = dni;
        if (!checkNombre())
            elementoFoco = nombre;

        if (elementoFoco != false) {
            elementoFoco.focus();
            return;
        }

    }

    function checkEmail() {
        if (/^([a-z]+@[a-z]+\.[a-z]{2,9})$/i.test(email.value)) {
            spanEmail.innerText = "";
            return true;
        }
        spanEmail.innerText = "Email inválido";
        return false;
    }

    function checkTelefono() {
        if (/^[67]{1}[0-9]{8}$/i.test(telefono.value)) {
            spanTelefono.innerText = "";
            return true;
        }
        spanTelefono.innerText = "Teléfono no válido";
        return false;
    }

    function checkCuenta() {
        if (/^([0-4][1-9]|[5][0-2])([0-9][1-9][0]|[0-9]{2}[1-9])$/i.test(cuentaCorriente.value)) {
            spanCuentaCorriente.innerText = "";
            return true;
        }
        spanCuentaCorriente.innerText = "Cuenta corriente inválida";
        return false;
    }

    function checkWeb() {
        if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(web.value)) {
            spanWeb.innerText = "";
            return true;
        }
        spanWeb.innerText = "Dirección web inválida";
        return false;
    }

    function checkNombre() {
        if (nombre.value.length > 0) {
            spanNombre.innerText = "";
            return true;
        }
        spanNombre.innerText = "Tienes que introducir un nombre";
        return false;
    }

    function checkFecha() {
        let comprobacion = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/i.exec(fechaNacimiento.value);
        if (comprobacion != null) {
            let fechaAComprobar = new Date(comprobacion[2] + "/" + comprobacion[1] + "/" + comprobacion[3]);
            if (fechaAComprobar != "Invalid Date" && fechaAComprobar < new Date()) {
                spanFechaNacimiento.innerText = "";
                return true;
            }
            spanFechaNacimiento.innerText = "La fecha no puede ser del futuro";
            return false;
        }
        spanFechaNacimiento.innerText = "Fecha no válida";
        return false;
    }

    function checkTerminos() {
        if (terminos.checked) {
            spanTerminos.innerText = "";
            return true;
        }
        spanTerminos.innerText = "Tienes que aceptar los términos";
        return false;
    }

    function checkDni() {

        if (/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(dni.value)) {
            spanDNI.innerText = "";
            return true;
        }
        spanDNI.innerText = "El DNI no es válido";
        return false;
    }


    function checkSexo() {
        if (getSexo(sexo) != undefined) {
            spanSexo.innerText = "";
            return true;
        }
        spanSexo.innerText = "Tienes que seleccionar un campo al menos";
        return false;
    }

    function getSexo(inputs) {
        for (const elemento of inputs)
            if (elemento.checked)
                return elemento.value;
    }


    window.addEventListener('load', init);
}