
$(function () {
 $('#buscador').bind('input',sugerencia);
});


function sugerencia(event){
    let valor = this.value;

    $resultado = $('#resultado');

    if(valor.length == 0){
        $resultado.removeClass('fondo-gris');
        $resultado.html('');
        return;
    }else{
        $resultado.addClass('fondo-gris');
    }

    $.ajax({
        type: "POST",
        url: 'https://daw.rafasojo.es/dwec/sugerencias/sugerencias.php',
        data: {'texto':valor},
        // success: success,
        // dataType: 'text/html'
      }).done(function (data){
        $resultado.html(data);
      });
}
