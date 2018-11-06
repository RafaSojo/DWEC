{
    function init() {
        let resultado = document.getElementById('resultado');

        let re = /aa/gi;
        let texto = '\nre.options // ' + (re.options);
        texto += '\nre.flags // ' + (re.flags);
        
        resultado.innerText += texto;
    }
    window.addEventListener("load", init);
}