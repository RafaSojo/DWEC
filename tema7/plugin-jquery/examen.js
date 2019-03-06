const patrones = {
    nombre: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    apellidos: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    correo: /^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/
}

jQuery.fn.examen = function () {
    let $inputs = $("input[type='text']", $(this));
    let $textArea = $('#textarea');
    let $elementoFocus = "";
    let nombre, apellido, correo;
    $textArea.prop("disabled", true);
    focused = false;

    $('form').on('submit', (e) => {
        $textArea.text(""); // Resetear textarea
        e.preventDefault();
        focused = false;
        $elementoFocus = "";
        $inputs.blur();
        if ($elementoFocus != "")
            $elementoFocus.focus();
        if (focused == false) {
            $.post("https://daw.rafasojo.es/dwec/sugerencias/sugerencias.php", {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                ejercicio: '9' // -> Para funcionamiento interno del php
            }, function (respuesta) {
                $textArea.text(respuesta);
            }).fail(function () {
                $textArea.text("No se pudo enviar el formulario.");
            });
        }
    });
    $inputs.blur((e) => {
        if (!patrones[$(e.delegateTarget).attr("tipo")].test($(e.delegateTarget).val())) {
            $(e.delegateTarget).css({
                'border': '1px solid #ffD3D7',
                'background': '#ffDEDE',
                'color': '#ff0000'
            });
            if (!focused) {
                $elementoFocus = e.delegateTarget;
                focused = true;
            }
        } else {
            $(e.delegateTarget).attr("tipo") == 'nombre' ? nombre = $(e.delegateTarget).val() : "";
            $(e.delegateTarget).attr("tipo") == 'apellidos' ? apellido = $(e.delegateTarget).val() : "";
            $(e.delegateTarget).attr("tipo") == 'correo' ? correo = $(e.delegateTarget).val() : "";
            $(e.delegateTarget).css({
                'border': '1px solid black',
                'background': 'white',
                'color': 'black'
            });
        }
    });
    $inputs.focus((e) => {
        $(e.target).css({
            'border': '1px solid black',
            'background': '#f0f0f0',
            'color': 'black'
        });
    });
    return this;
}