{
    function init() {

        $("#selectHabilidades").change(function () {
            let id = $($(this)[0].selectedOptions[0]).attr("id");
            let url;
            switch(id){
                case 'json1':
                    url = 'https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/habilidades-destrezas.json';
                    break;
                case 'json2':
                    url = 'https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/habilidades-vida.json';
                    break;
                case 'json3':
                    url = 'https://rafasojo.github.io/DWEC/tema8/clasificaciones-json/perfiles-it.json';
                    break;
            }
            $.getJSON(url).done(function (data){
                $listado = $('#listado');
                $listado.text('');
                data.array.forEach(function (elemento){
                    $listado.append($('<li></li>').text(elemento)[0]);
                });
            });        }).change();
    }


    $(init);
}