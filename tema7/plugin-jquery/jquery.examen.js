const patrones = {
    nombre: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    apellidos: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    correo: /^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/
}

jQuery.fn.examen = function (estilos2) {
    let estilos = {
        color: "#ff0000",
        "background-color": "#ffDEDE",
        border: "2px solid #ffD3D7"
    };

    $.extend(estilos, estilos2);
    
    let $inputs = $("input[type='text']", $(this));
    let $textArea = $('textarea', $(this));
    let $elementoFocus = "";
    $textArea.prop("disabled", true);
    focused = false;

    $(this).on('submit', function (e) {
        $textArea.text("");
        $textArea.css({'border':'1px solid rgb(169, 169, 169)'})
        e.preventDefault();

        focused = false;
        $elementoFocus = "";
        $inputs.blur();
        if ($elementoFocus != "")
            $elementoFocus.focus();
        if (focused == false) {
            $.post("https://daw.rafasojo.es/dwec/sugerencias/sugerencias.php", 
            $(this).serialize()+'&ejercicio=9',
            function (respuesta) {
                $textArea.text(respuesta);
            }).fail(function () {
                $textArea.text("No se pudo enviar el formulario.");
            });
            $textArea.css({'border':'4px solid green'})
        }
    });


    $inputs.blur(function (){
        let $input = $(this);
        if (!patrones[$input.attr("tipo")].test($input.val())) {
            $input.css(estilos);
            if (!focused) {
                $elementoFocus = $input;
                focused = true;
            }
        } else {
            $input.css({
                'border': '1px solid black',
                'background': 'white',
                'color': 'black'
            });
        }
    }).focus(function () {
        $(this).css({
            color: "initial",
            background: "initial",
            border: "initial"
        });
    });
    return this;
}