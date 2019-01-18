{
    function init(){
        let resultado = document.getElementById('resultado');
        let texto = "Funcion: \nfunction devuelveArgumentos(){\n\tlet array = [];\n\tfor(let i=0; i<arguments.length;i++)\n\t\tarray.push(arguments[i]);\n\treturn array;\n}\n\n";

        texto += "\nJSON.stringify(devuelveArgumentos(\"hola\",3,4,\"adios\")): "+ (JSON.stringify(devuelveArgumentos("hola",3,4,"adios")));
        resultado.innerText = texto;
    }
    window.addEventListener("load", init);

    function devuelveArgumentos(){
        let array = [];
        for(let i=0; i<arguments.length;i++)
            array.push(arguments[i]);
        return array;
    }
}