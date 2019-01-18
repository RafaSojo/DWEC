window.addEventListener('load', init);

function init() {
    let contenido = document.getElementById('contenido');
    contenido.appendChild(generarDiv());
  }

function generarDiv(){
    let div = document.createElement('div');
    div.setAttribute('class','calculator');

    let divBotones = document.createElement('div');
    divBotones.setAttribute('class','calculator-keys');

    let display = document.createElement('input');
    display.setAttribute('class','calculator-screen');
    display.setAttribute('disabled','true');
    display.setAttribute('value','0');

    div.appendChild(display);

    let valores = ['CE','Borrar','%','+','7','8','9','-','4','5','6','x','1','2','3','/','0','+/-',',','='];
    valores.forEach((valor) => {divBotones.appendChild(creaDivBoton(valor))});

    div.appendChild(divBotones);
    
    return div;
}

function creaDivBoton(id){
    let div = document.createElement('div');
    let buttonSimple = document.createElement('button');
    buttonSimple.setAttribute('id',id);
    buttonSimple.innerText = id;
    div.appendChild(buttonSimple);
    return buttonSimple;

}
