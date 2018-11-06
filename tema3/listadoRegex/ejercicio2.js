{
    function init() {
        let resultado = document.getElementById('resultado');
        let re1 = /(aaa)/;
        let re2 = /(aaa)/g;

        let texto = 'let re1 = /(aaa)/;\nlet re2 = /(aaa)/g;\n';
        texto += 're1.global; // Resultado: ' + (re1.global);
        texto += '\nre2.global; // Resultado: ' + (re2.global);

        resultado.innerText = texto;
    }
    window.addEventListener("load", init);
}