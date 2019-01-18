{
    let inputNombre, inputEmail, inputFecha, inputHora, inputNoches, inputPersonas, inputDesayuno, inputAlmuerzo, inputCena,
        inputsEdad, spanNombre, spanEmail, spanFecha, spanHora, spanNoches, spanPersonas, spanEdad, estructura;

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
        spanEdad = document.getElementById('spanEdad');

        // Ponemos los listeners
        document.getElementById('enviar').addEventListener('click', comprobarFormulario);
        // inputNombre.addEventListener('blur', testing.bind(undefined, 1, 2, 3, 4));
        // inputEmail.addEventListener('blur', checkEmail);
        // inputFecha.addEventListener('blur', checkFecha);
        // inputHora.addEventListener('blur', checkHora);
        // inputNoches.addEventListener('blur', checkNoches);
        // inputPersonas.addEventListener('blur', inputPersonas);

        // estructura = [
        //     [inputsEdad, spanEdad, Reserva.checkEdad],
        //     [inputPersonas, spanPersonas, Reserva.checkPersonas],
        //     [inputNoches, spanNoches, Reserva.checkNoches],
        //     [inputHora, spanHora, Reserva.checkHora],
        //     [inputFecha, spanFecha, Reserva.checkFecha],
        //     [inputEmail, spanEmail, Reserva.checkEmail],
        //     [inputNombre, spanNombre, Reserva.checkNombre]
        // ]
 
        // inputNombre.addEventListener('blur', testing.bind(undefined, 1, 2, 3, 4));
        inputNombre.addEventListener('blur', Reserva.comprobarNombre.bind(inputNombre, spanNombre));
        // inputEmail.addEventListener('blur', checkEmail);
        // inputFecha.addEventListener('blur', checkFecha);
        // inputHora.addEventListener('blur', checkHora);
        // inputNoches.addEventListener('blur', checkNoches);
        // inputPersonas.addEventListener('blur', inputPersonas);


    }

    // function testing(hola1, hola2, hola3, hola4){
    //     console.log(hola1);
    //     console.log(hola2);
    //     console.log(hola3);
    //     console.log(hola4);
    // }

    function comprobarFormulario(event) {
        event.preventDefault();
        let elementoFoco = false;

        // estructura.forEach(element => {
        //     // console.log(element);
        //     try {
        //         element[2](element[0]);
        //     } catch (error) {
        //         // console.log(error);
        //         element[1].innerText = error;
        //         if (element[1] === estructura[0][1])
        //             elementoFoco = element[0][0];
        //         else
        //             elementoFoco = element[0];
        //     }

        // });

        // En caso de error mostramos el foco, si no, todo ha ido correcto y creamos el objeto
        if (elementoFoco != false) {
            elementoFoco.focus();
            return;
        }

        let reserva = new Reserva(inputNombre.value, inputEmail.value, inputFecha.value, inputHora.value, inputNoches.value,
            inputPersonas.value, inputDesayuno.checked, inputAlmuerzo.checked, inputCena.checked, getEdad(inputsEdad));
            // console.log(getEdad(inputsEdad));
        // console.log(reserva); // ## DEBUG ##
        reserva.mostrar();
        resetInputs();
    }

    function resetInputs() {
        inputNombre.value = "";
        inputEmail.value = "";
        inputFecha.value = "";
        inputHora.value = "";
        inputNoches.value = "";
        inputPersonas.value = "";
        inputDesayuno.checked = false;
        inputAlmuerzo.checked = false;
        inputCena.checked = false;
        inputsEdad.forEach((e) => {
            e.checked = false;
        });
    }


    window.addEventListener('load', init);
}