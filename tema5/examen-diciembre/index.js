{
  let inputsText;
  let inputsMail;
  let inputsNumber;
  let inputsTime;
  let inputsDate;
  let spans;
  let form;
  let spanError;
  let allinputs;

  let init = function () {
    form = document.getElementsByTagName("form")[0];
    allinputs = Array.from(document.querySelectorAll("input:not([type='submit']):not([type='checkbox']):not([type='radio'])"));
    spanError = Array.from(document.getElementById("spanError"));
    spans = Array.from(document.querySelectorAll("body form span"));

    form.addEventListener("submit", ev => {
      ev.preventDefault();
      validaSubmit();
    });

    validarAction(); // valida inputs cuando se active el evento blur
  };

  let patrones = {
    nombre: [
      /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ]+[/\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])+[/\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])?$/g,
      "Al menos nombre y apellido"
    ],
    hora: [
      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g,
      "formato válido hh:mm"
    ],
    correo: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Formato de correo no válido"
    ],
    number: [/^[1-9]{1,}$/, "El número tiene que ser mayor que 0."],

    fecha: [
      /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/,
      "El formato de fecha es yyyy-mm-dd."
    ]
  };

  let validador = {
    test(patron, campo, elementoMostrarMensaje) {
      let regex = new RegExp(patron[0]);
      if (!regex.test(campo.value)) {
        elementoMostrarMensaje.textContent = patron[1];
      } else {
        validador.limpiar(elementoMostrarMensaje, spanError);
      }
    },
    limpiar(spanElemento, spanError) {
      spanElemento.textContent = "";
      spanError.textContent = "";
    }
  };

  let validateInputs = function (element, spanIndex) {
    if (element.getAttribute("class")) {
      validador.test(
        patrones[element.getAttribute("class")],
        element,
        spans[spanIndex]
      );
    }
  };

  let validarAction = function (action) {
    allinputs.forEach(function (element, index) {
      if (action === "trigger") {
        element.addEventListener(
          "blur",
          function () {
            validateInputs(element, index);
          }());
      } else {
        element.addEventListener(
          "blur", () => validateInputs(element, index));
      }
    });

  };

  let radioPulsado = function () {
    return Array.from(
      document.querySelectorAll("input[type='radio']:checked")
    )[0].value;
  };

  let checkPulsado = function () {
    return Array.from(
      document.querySelectorAll("input[type='checkbox']:checked")
    );
  };

  let obtenerIndiceLlenos = function () {
    let indiceSpanLlenos = [];
    spans.forEach((element, index) => {
      if (element.textContent !== "")
        indiceSpanLlenos.push(index);
      
    });
    return indiceSpanLlenos;
  }

  let validaSubmit = function () {
    validarAction("trigger")

    if (obtenerIndiceLlenos().length > 0) {
      allinputs[obtenerIndiceLlenos()[0]].focus();
      return;
    }

    spanError.textContent = "";

    try {
      let reserva = new Reserva(
        allinputs[0].value,
        allinputs[1].value,
        new Date(allinputs[2].value),
        allinputs[3].value,
        allinputs[4].value,
        allinputs[5].value,
        checkPulsado(),
        radioPulsado()
      );
      reserva.mostrar();
    } catch (e) {
      spanError.textContent = e.message;
    }
  };
  window.addEventListener("load", init);
}