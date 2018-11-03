{
    function init(){
        let ejemploArray1 = ["hola",1,2,3,NaN,"adios",undefined];
        ejemploArray1.forEach(muestraValor);

        let ejemploArray2 = [4,6,7,8,9,10];
        console.log("Every: "+ejemploArray2.every(masTres));
        console.log("Some: "+ejemploArray2.some(masSeis));
        console.log("Filter: "+ejemploArray2.filter(menosOcho));

    }
    
    function muestraValor(valor){
        console.log(valor);
    }
    
    function masTres(valor){
        return valor > 3;
    }
    
    function masSeis(valor){
        return valor > 6;
    }
    
    function menosOcho(valor){
        return valor < 8;
    }
    
    window.addEventListener("load", init);
}