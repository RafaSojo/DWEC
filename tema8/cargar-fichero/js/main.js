{
    let $estadoPeticion, $resultadoPeticion;
    $(function (){
        $estadoPeticion = $('#estadoPeticion');
        $resultadoPeticion = $('#resultadoPeticion');
        $('#cargar').click(function () {
            let cadena = "";
            $.get({
                    url: $('#urlACargar').val(),    
                    error: function () {
                        cadena = "No Inicializada";
                        $estadoPeticion.val(cadena);
                    },
                    success: function (data) {
                        cadena += ", Éxito";
                        $estadoPeticion.val(cadena);
                        $resultadoPeticion.val(data);
                    },
                    complete: function () {
                        cadena += ", Completada";
                        $estadoPeticion.val(cadena);
                    },
                    beforeSend: function () {
                        cadena = "Antes de enviar";
                        $estadoPeticion.val(cadena);
                    }
    
    
                }).done(function () {
                    cadena += ", Realizado (done)";
                    $estadoPeticion.val(cadena);
                })
                .fail(function () {
                    cadena += ", Fallo (fail)";
                    $estadoPeticion.val(cadena);
                })
                .always(function () {
                    cadena += ", Finalizado (always)";
                    $estadoPeticion.val(cadena);
                })
        
        });
    });


    
}