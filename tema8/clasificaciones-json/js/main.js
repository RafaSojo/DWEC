{
    function init() {

        $("#selectHabilidades").change(function () {
            // let arrayHabilidades = [];
            // $("ul").css("display", "none");
            let id = $($(this)[0].selectedOptions[0]).attr("id");
            console.log(id);
            let json = getFicheroJSON(id);
            mostrarHabilidades(json);
        });
    }

    function mostrarHabilidades(json){
        console.log(json);

    };

    
    function mensaje(data, arrayHabilidades, msg) {
        $(msg).css("display", "block");
        $.each(data, function (clave, valor) {
            arrayHabilidades.push("<li>" + "<b>" + clave + "</b>" + ": " + valor + "</li>");
        });
        $(msg).html(arrayHabilidades);
    }


    function getFicheroJSON(id) {
        let url;

        switch(id){
            case 'json1':
                url = 'habilidades-destrezas.json';
                break;
            case 'json2':
                url = 'habilidades-vida.json';
                break;
            case 'json3':
                url = 'perfiles-it.json';
                break;
        }
        return $.getJSON(url);
    }
    $(init);
}