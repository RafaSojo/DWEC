{
  let $resultado;
  $(function () {
    $('#buscador').on('input', function () {
      let valor = this.value;
      if (valor.length == 0) {
        $resultado.removeClass('fondo-gris');
        $resultado.html('');
        return;
      } else {
        $resultado.addClass('fondo-gris');
      }
  
      $.ajax({
        type: "POST",
        url: 'https://daw.rafasojo.es/dwec/sugerencias/sugerencias.php',
        data: {
          'texto': valor
        },
      }).done(function (data) {
        $resultado.html(data);
      });
    });
    $resultado = $('#resultado');
  });


}