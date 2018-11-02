
    window.addEventListener('load', init);
    let inputDisplay;
    
    function init() {
        let contenido = document.getElementById('contenido');
        contenido.appendChild(generarDiv());
        inputDisplay = document.getElementById('display');
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
        // display.innerText = '0';
        display.setAttribute('id','display');
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
    buttonSimple.addEventListener('click',operacion);
    div.appendChild(buttonSimple);
    return buttonSimple;
}

function mostrar(numeros){
    // inputDisplay.innerText = numeros;
    inputDisplay.setAttribute('value',numeros);
}

function operacion(){
    operacion = this.innerText;
    switch(operacion){
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            mostrar(operacion);
            break;
        case 'CE':
            mostrar('0');
            break;
        default:
            console.log('No es un numero');

    }
    
}

