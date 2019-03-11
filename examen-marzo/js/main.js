$(init);

function init() {
    $('#articulo1')
        .efectos(['hola', 'adiós'])
        .css({
            "color": "red"
        });
    $('#articulo2')
        .efectos(["php", "javaScript", "CSS", "HTML", "java", "jQuery", "Materialize"], {
            "background-color": "#179fff",
            "border": "3px solid blue",
            "text-align": "center",
            "height": "150px",
            "width": "150px"
        });

}