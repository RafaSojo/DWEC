{
    function init(){
        let resultado = document.getElementById('resultado');
        let array = creaArray(10);

        let texto;
        texto = "Funcion: \nfunction creaArray(longitud){\n\tlet array = [];\n\tfor(let i=0; i<longitud;i++)\n\t\tarray.push(i);\n\treturn array;\n}\n\n";

        texto += "let array = creaArray(10);\n";
        texto += "\nJSON.stringify(array, null, 2): "+ (JSON.stringify(array));

        resultado.innerText = texto;
    }
    window.addEventListener("load", init);

    function creaArray(longitud){
        let array = [];
        for(let i=0; i<longitud;i++)
            array.push(i);
        return array;
    }
}