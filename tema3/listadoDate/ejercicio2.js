{
    function init() {
        let resultado = document.getElementById('resultado');
        let texto = 'Date.now() // '+ (Date.now());

        resultado.innerText = texto;
    }
    window.addEventListener("load", init);
}