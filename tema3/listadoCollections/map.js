{
    function init() {
        let alumno1 = "Antonio Jimenez Luque";
        let alumno2 = "Juan Mendez Nuñez";
        let alumno3 = "Pedro Garcia Aguado";
        let alumno4 = "Enrique Jurado Espada";
        let alumno5 = "Jose Lopez García";

        let map = new Map();
        map.set('alumno1', alumno1);
        map.set('alumno2', alumno2);
        map.set('alumno3', alumno3);
        map.set('alumno4', alumno4);
        map.set('alumno5', alumno5);

        console.log(JSON.stringify(extraeValores(map)));

        map.delete('alumno5');
        console.log(JSON.stringify(extraeValores(map)));

        console.log(map.has('alumno1'));
        console.log(map.size);
    }

    function extraeValores(map) {
        let array = [];
        for (let [clave, valor] of map)
            array.push(clave + ': ' + valor);
        return array;
    }


    window.addEventListener("load", init);
}