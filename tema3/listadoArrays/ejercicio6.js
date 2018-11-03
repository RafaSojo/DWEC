{
    function init(){
        let resultado = document.getElementById('resultado');
        let texto = "Funcion: \nfunction devuelveArgumentos(){\n\tlet array = [];\n\tfor(let i=0; i<arguments.length;i++)\n\tif(Array.isArray(arguments[i]))\n\t\tarray.push(...arguments[i]);\n\telse\n\t\tarray.push(arguments[i]);\n\treturn array;\n}\n\n";

        texto += "\nJSON.stringify(devuelveArgumentos(\"hola\",3,4,[1,2,3],\"adios\")): "+ (JSON.stringify(devuelveArgumentos("hola",3,4,[1,2,3],"adios")));
        resultado.innerText = texto;
    }
    window.addEventListener("load", init);

    function devuelveArgumentos(){
        let array = [];
        for(let i=0; i<arguments.length;i++)
            if(Array.isArray(arguments[i]))
                array.push(...arguments[i]);
            else
                array.push(arguments[i]);
        return array;
    }
}