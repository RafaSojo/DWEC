{
    function init() {
        let alumno1 = "Antonio Jimenez Luque";
        let alumno2 = "Juan Mendez Nuñez";
        let alumno3 = "Pedro Garcia Aguado";
        let alumno4 = "Enrique Jurado Espada";
        let alumno5 = "Jose Lopez García";

        let set = new Set();
        set.add(alumno1);
        set.add(alumno2);
        set.add(alumno3);
        set.add(alumno4);
        set.add(alumno5);

        console.log(JSON.stringify(extraeValores(set.entries())));

        set.delete(alumno5);
        console.log(JSON.stringify(extraeValores(set.entries())));

        console.log(set.has('alumno1'));
        console.log(set.has(alumno1));
        console.log(set.size);
    }

    function extraeValores(set) {
        let array = [];
        for (let [valor] of set)
            array.push(valor);
        return array;
    }


    window.addEventListener("load", init);
}