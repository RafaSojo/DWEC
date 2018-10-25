window.addEventListener('load', init);

function init() {
    let contenido = document.getElementById('contenido');
    contenido.append(generarTabla());
  }

  function generarTabla(){
    let tabla = document.createElement("table");
    let tr = document.createElement('tr');
    let td = document.createElement('td');

    let tmpNodo;
    let tmpNodo2;

    // -----
    // Fila 1

    // Creamos el display
    tmpNodo2 = document.createElement('input');
    tmpNodo2.setAttribute('type','number')
    tmpNodo2.setAttribute('value','0')

    // Creamos el td que contiene el display
    tmpNodo = td.cloneNode();
    tmpNodo.setAttribute('colspan','4')

    // Añadimos el display al td
    tmpNodo.appendChild(tmpNodo2);

    // Creamos el primer tr
    tmpNodo2 = tr.cloneNode();
    tmpNodo2.appendChild(tmpNodo);

    // Lo añadimos a la tabla
    tabla.appendChild(tmpNodo2);


    // -----
    // Fila 2
    tmpNodo = tr.cloneNode();
    tmpNodo.appendChild(creaTDBoton('CE','CE'));
    tmpNodo.appendChild(creaTDBoton('Borrar','Borrar'));
    tmpNodo.appendChild(creaTDBoton('percent','%'));
    tmpNodo.appendChild(creaTDBoton('plus','+'));

    tabla.appendChild(tmpNodo);


    // -----
    // Fila 3
    tmpNodo = tr.cloneNode();
    tmpNodo.appendChild(creaTDBoton('7','7'));
    tmpNodo.appendChild(creaTDBoton('8','8'));
    tmpNodo.appendChild(creaTDBoton('9','9'));
    tmpNodo.appendChild(creaTDBoton('minus','-'));

    tabla.appendChild(tmpNodo);

    // -----
    // Fila 4
    tmpNodo = tr.cloneNode();
    tmpNodo.appendChild(creaTDBoton('4','4'));
    tmpNodo.appendChild(creaTDBoton('5','5'));
    tmpNodo.appendChild(creaTDBoton('6','6'));
    tmpNodo.appendChild(creaTDBoton('por','x'));

    tabla.appendChild(tmpNodo);

    // -----
    // Fila 5
    tmpNodo = tr.cloneNode();
    tmpNodo.appendChild(creaTDBoton('1','1'));
    tmpNodo.appendChild(creaTDBoton('2','2'));
    tmpNodo.appendChild(creaTDBoton('3','3'));
    tmpNodo.appendChild(creaTDBoton('dividir','/'));

    tabla.appendChild(tmpNodo);


    // -----
    // Fila 6
    tmpNodo = tr.cloneNode();
    tmpNodo.appendChild(creaTDBoton('0','0'));
    tmpNodo.appendChild(creaTDBoton('masmenos','+-'));
    tmpNodo.appendChild(creaTDBoton('coma',','));
    tmpNodo.appendChild(creaTDBoton('igual','='));

    tabla.appendChild(tmpNodo);

    return tabla;
}

function creaTDBoton(id,valor){
    let td = document.createElement('td');
    let buttonSimple = document.createElement('button');
    buttonSimple.setAttribute('id',id);
    buttonSimple.innerText = valor;
    td.appendChild(buttonSimple);
    return td;
}