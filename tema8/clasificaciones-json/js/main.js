{
    function pintaContenido(data) {
        let arrayKeys = Object.keys(data);
        let $contenedor = $('<div></div>');
        let $select = $('<select><option selected disabled> Selecciona una opción</option></select>');
        for (let i = 0; i < arrayKeys.length; i++)
            $select.append($('<option>' + arrayKeys[i] + '</option>').val(i));
        
        $contenedor.append($select);
        $contenedor.append('<div id="elementos"></div>')

        $select.on('change', function (e) {
            let html = '';
            let valor = $(e.target).val();
            elemento = data[arrayKeys[valor]];

            if (Array.isArray(elemento))
                elemento.forEach(elementoArray => html += '<input type="checkbox">' + elementoArray + '<br>');
            else
                html += '<p>' + elemento + '</p>';
            $('#elementos').html(html);

        });
        $select.change();
        $("#contenido").html($contenedor);

    }

    function init() {
        $("#json1").click(function () {
            $.getJSON('https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/json/habilidades-vida.json').done(data => pintaContenido(data));
        });
        $("#json2").click(function () {
            $.getJSON('https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/json/perfiles-it.json').done(data => pintaContenido(data));
        });
        $("#json3").click(function () {
            $.getJSON('https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/json/tipos-desarrolladores.json').done(data => pintaContenido(data));
        });
    }
    $(init);
}