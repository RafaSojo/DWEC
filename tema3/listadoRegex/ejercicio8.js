{
    function init() {
        let resultado = document.getElementById('resultado');

        let re = /(aa)/i;
        let text = "111aa222aa333aa";
        
        let texto = '\nre.exec(text) // ' + (JSON.stringify(re.exec(text)));
        
        resultado.innerText += texto;
    }
    window.addEventListener("load", init);
}