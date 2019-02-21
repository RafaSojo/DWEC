{
    $contenido = $("#contenido");

    function pintaContenido(json) {
        $contenido.html('');
        json.array.forEach(function (element, index) {
            $contenido.push('<h1>' + index + '</h1>');
            if (Array.isArray(element)) {
                $contenido.push('<ul>');
                element.forEach(elementoArray => $contenido.push('<li>' + elementoArray + '</li>'));
                $contenido.push('</ul>');
            } else
                $contenido.push('<p>' + element + '</p>');
        });
    }

    function init() {


        $("#json1").click(function () {
            pintaContenido($.getJSON('https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/json/habilidades-vida.json'));
        });
        $("#json2").click(function () {
            pintaContenido($.getJSON('https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/json/perfiles-it.json'));
        });
        $("#json3").click(function () {
            pintaContenido($.getJSON('https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/json/tipos-desarrolladores.json'));
        });

    }


    $(init);
}