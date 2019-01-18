{
    function init(){
        console.log("Crear array y añadir 1000 elementos con push tarda: "+mideVelocidad(function () {let array = [];for(let i=0;i<1000;i++)array.push(i);return array}));
        console.log("Crear array y añadir 1000 elementos con unshift tarda: "+mideVelocidad(function () {let array = [];for(let i=0;i<1000;i++)array.unshift(i);return array}));
        console.log("Crear array con el constructor con 1000 elementos: "+mideVelocidad(function () {return new Array(1000);}));

        console.log("Borrar 1000 elementos de un array con pop tarda: "+mideVelocidadBorrar("pop"));
        console.log("Borrar 1000 elementos de un array con shift tarda: "+mideVelocidadBorrar("shift"));
        console.log("Borrar 1000 elementos de un array cambiando el tamaño tarda: "+mideVelocidadBorrar("tamanio"));

    }
    
    function mideVelocidad(funcion){
        let tiempoInicio = performance.now();
        funcion();
        let tiempoFin = performance.now();
        return tiempoFin - tiempoInicio;
    }

    function mideVelocidadBorrar(tipo){
        let array = new Array(1000);
        let tiempoInicio = performance.now();

        switch(tipo){
            case "pop":
            for(let i=0;i<1000;i++)
            array.pop();
            break;

            case "shift":
            array.shift();
            break;

            case "tamanio":
            array.length = 0;
            break;
        }
        let tiempoFin = performance.now();
        return tiempoFin - tiempoInicio;
    }
    window.addEventListener("load", init);
}