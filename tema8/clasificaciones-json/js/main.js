{
    // $contenido = $("#contenido");
// var a;
    function pintaContenido(data) {
        // $contenido.html('');
        // a = data;
        let arrayKeys = Object.keys(data);
        let html = '';
        for(let i=0;i<arrayKeys.length;i++){
            elemento = data[arrayKeys[i]];
            console.log(elemento);
            html += '<h1>' + arrayKeys[i] + '</h1>';
            if (Array.isArray(elemento)) {
                html += '<ul>';
                elemento.forEach(elementoArray => html +='<input type="checkbox">' + elementoArray + '<br>');
               html += '</ul>';
            } else
                html += '<p>' + elemento + '</p>';
            $("#contenido").html(html);
        }

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