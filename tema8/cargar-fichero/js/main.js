{
    let $estadoPeticion, $resultadoPeticion;
    $(function (){
        $estadoPeticion = $('#estadoPeticion');
        $resultadoPeticion = $('#resultadoPeticion');
        $('#cargar').click(function () {
            let cadena = "";
            $resultadoPeticion.val('');
            $.get({
                    url: $('#urlACargar').val(),    
                    error: function () {
                        cadena = " .error: no Inicializada\n";
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
                        cadena = " .beforeSend: antes de enviar\n";
                        $estadoPeticion.val(cadena);
                    }
                }).done(function () {
                    cadena += " .done: realizado\n";
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