{

    function init() {
        $('form').revisaFormulario();
        console.log(tester.init('nombre', 'nombre'))
    }
    $(init);
    let tester = (function () {
        let mensaje;

        function init(texto, tipo) {
            mensaje = "Incorrecto";
            if (patrones[tipo].test(texto)) {
                mensaje = "Correcto"
            }
            return mensaje;
        }
        return {
            init
        }
    })();
}