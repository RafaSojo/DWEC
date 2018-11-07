{
    function init() {
        let resultado = document.getElementById('resultado');

        let re = /(aa)/i;
        let text = "111aa222aa333aa";
        re.exec(text);
        
        let texto = '\nrRegExp.lastMatch // ' + (RegExp.lastMatch);
        
        resultado.innerText += texto;
    }
    window.addEventListener("load", init);
}