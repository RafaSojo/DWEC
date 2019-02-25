{
    let $estadoPeticion, $resultadoPeticion;
    $(function (){
        $estadoPeticion = $('#estadoPeticion');
        $resultadoPeticion = $('#resultadoPeticion');
        $resultadoPeticion.html('');
        $('#cargar').click(function () {
            let cadena = "";
            $.get({
                    url: $('#urlACargar').val(),    
                    error: function () {
                        cadena = " .error: No Inicializada\n";
                        $estadoPeticion.val(cadena);
                    },
                    success: function (data) {
                        cadena += " .success: éxito\n";
                        $estadoPeticion.val(cadena);
                        $resultadoPeticion.val(data);
                    },
                    complete: function () {
                        cadena += " .complete: completada\n";
                        $estadoPeticion.val(cadena);
                    },
                    beforeSend: function () {
                        cadena = " .beforeSend: Antes de enviar\n";
                        $estadoPeticion.val(cadena);
                    }
                }).done(function () {
                    cadena += " .done: Realizado\n";
                    $estadoPeticion.val(cadena);
                })
                .fail(function () {
                    cadena += " .fail: fallo\n";
                    $estadoPeticion.val(cadena);
                })
                .always(function () {
                    cadena += " .always: finalizado\n";
                    $estadoPeticion.val(cadena);
                })
        
        });
    });


    
}