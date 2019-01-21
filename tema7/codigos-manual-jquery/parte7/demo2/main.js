{
  //creo el plugin cuentaCaracteres
  jQuery.fn.cuentaCaracteres = function () {
    this.each(function () {
      elem = $(this);
      let contador = $(
        "<div>Contador caracteres: " + elem.val().length + "</div>"
      );
      elem.after(contador);
      elem.data("campocontador", contador);
      elem.keyup(function () {
        var elem = $(this);
        var campocontador = elem.data("campocontador");
        campocontador.text("Contador caracteres: " + elem.val().length);
      });
    });
    return this;
  };

  $(() => {
    $("textarea").cuentaCaracteres();
  });

}