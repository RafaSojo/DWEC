{
    function init() {
        // let resultado = document.getElementById('resultado');
        // let texto = 'Date.parse("Jun 6, 1998") // '+ (Date.parse("Jun 6, 1998"));
        // resultado.innerText = texto;
    }
    window.addEventListener("load", init);

    function esFecha(argumento){
        return (Date.parse(argumento) != NaN);
    }
}