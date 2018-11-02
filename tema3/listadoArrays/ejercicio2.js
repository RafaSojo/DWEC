{
    function init(){
        let array = ['elemento1','elemento2','elemento3'];
        let resultado = document.getElementById('resultado');
        let texto;

        texto = "0 in array: "+ (0 in array);
        texto += "\n'elemento1' in array: "+('elemento1' in array);

        resultado.innerText = texto;
    }
    window.addEventListener("load", init);
}