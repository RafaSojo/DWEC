 $(()=>{
    $("#boton").click(function() {
        let selectorEscrito = $("#camposelector").val();
        let $msg = $("#msg");
        if (selectorEscrito == "") {
          $msg.text("Escribe algo en el campo de texto");
          $msg.css("color", "red");
        } else {
          $msg.text("");
          $(selectorEscrito).fadeOut("slow", function() {
            $(selectorEscrito).fadeIn("slow");
          });
        }
      });
});