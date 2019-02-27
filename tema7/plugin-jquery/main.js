{

    function init() {
        $('form').examen();
        console.log(tester.init('a', 'nombre'))
        console.log(tester.init('Juan', 'nombre'))
    }
    $(init);
    let tester = (function () {
        function init(texto, tipo) {
            if (patrones[tipo].test(texto)) 
                return texto+": Correcto"
            return texto+": Incorrecto";
        }
        return {
            init
        }
    })();
}