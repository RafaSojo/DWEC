{
    function init(){
        let resultado = document.getElementById('resultado');
        let texto = "Funcion: \nfunction eliminaUndefinied(array){\n\twhile(array.indexOf(undefined) != -1)\n\t\tarray.splice(array.indexOf(undefined), 1);\n\treturn array;\n}\n\n";
        texto += "\nJSON.stringify(eliminaUndefined([1,2,3,undefined,4,5])): "+ (JSON.stringify(eliminaUndefined([1,2,3,undefined,4,5])));
        resultado.innerText = texto;
    }
    window.addEventListener("load", init);

    function eliminaUndefined(array){
        while(array.indexOf(undefined) != -1)
            array.splice(array.indexOf(undefined), 1);
        return array;
    }
}