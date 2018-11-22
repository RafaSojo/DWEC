{
    function init() {
        let alumno1 = {'nombre':"Antonio Jimenez Luque"};
        let alumno2 = {'nombre':"Juan Mendez Nuñez"};
        let alumno3 = {'nombre':"Pedro Garcia Aguado"};
        let alumno4 = {'nombre':"Enrique Jurado Espada"};
        let alumno5 = {'nombre':"Jose Lopez García"};

        let weakset = new WeakSet();
        weakset.add(alumno1);
        weakset.add(alumno2);
        weakset.add(alumno3);
        weakset.add(alumno4);
        weakset.add(alumno5);
        console.log('Está alumno 5: '+weakset.has(alumno5));
        console.log('Lo borramos');
        weakset.delete(alumno5);
        console.log('Está alumno 5: '+weakset.has(alumno5));
    }
    window.addEventListener("load", init);
}