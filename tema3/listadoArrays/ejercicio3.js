{
    function init(){
        let array = ['elemento1','elemento2','elemento3'];
        let objeto1 = "hola";
        let resultado = document.getElementById('resultado');
        let texto;

        texto = "let array = ['elemento1','elemento2','elemento3'];\nlet objeto1 = 'hola';\n\n";
        texto += "\nArray.isArray(array): "+ (Array.isArray(array));
        texto += "\nArray.isArray(objeto1): "+ (Array.isArray(objeto1));

        resultado.innerText = texto;
    }
    window.addEventListener("load", init);
}