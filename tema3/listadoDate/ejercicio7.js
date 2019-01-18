{
    function init() {

    }
    window.addEventListener("load", init);

    function diaDeLaSemana(){
        let dias=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let fecha = new Date(...arguments);
        return dias[fecha.getUTCDay()];
    }
}