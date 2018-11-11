{
    function init() {

    }
    window.addEventListener("load", init);

    function ingrementaDias(){
        let numeroDiasAumentar = arguments[0];
        let argumentos = arguments;
        argumentos.shift();
        let fecha = new Date(...argumentos);
        fecha.setDate(fecha.getDate() + numeroDiasAumentar);
        return fecha;
    }
}