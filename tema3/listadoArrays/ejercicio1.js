{
    function init(){
        let array = ['elemento1','elemento2','elemento3'];
        let resultado = document.getElementById('resultado');
        let texto = "";

        array.forEach((valor,indice,array) => {texto += 'Valor: '+valor+'\nIndice: '+indice+'\nArray: '+array+'\n-----------\n'});
        resultado.innerText = texto;
    }
    window.addEventListener("load", init);
}