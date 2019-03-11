jQuery.fn.efectos = function (arrayElementos, estilosUsuario = {}) {
    let $elementoPadre = $(this);
    let estilos = {
        "background-color": "#17ff9f",
        "border": "1px solid white",
        "text-align": "center",
        "height": "90px",
        "width": "90px"
    };
    $.extend(estilos, estilosUsuario);
    $.each(arrayElementos, function (i, value) {
        $elementoPadre
            .append($('<div id="div-' + (i + 1) + '">' + value + '</div>')
                .css(estilos)
                .click(function (e) { //Al pulsar el botón izquierdo del ratón desaparecerá y aparecerá (con efectos jQuery, desaparece a la izquierda)
                    if (e.buttons === 2) return;
                    $(this).toggle(500).toggle(600);
                })
                .contextmenu(function (e) {
                    e.preventDefault();
                })
                .on('mousedown', function (e) {
                    let boton = e.buttons;
                    if (boton === 3) //ambos botones: Al pulsar ambos botones del ratón desaparecerá y aparecerá animando su opacidad(con efectos jQuery)
                        $(this).fadeToggle().fadeToggle();
                    else if (boton === 2) //botón derecho: Al pulsar el botón derecho del ratón desaparecerá y aparecerá con un movimiento deslizante (con efectos jQuery, sube)
                        $(this).slideToggle().slideToggle();
                })
                .click()
            );
    });

    return this;

}