{
    function init() {
        let resultado = document.getElementById('resultado');

        let re = /aa/gi;
        let texto = '\nre.source // ' + (re.source);
        texto += '\nre.toString() // ' + (re.toString());
        
        resultado.innerText += texto;
    }
    window.addEventListener("load", init);
}