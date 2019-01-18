let inputDisplay;

let calculadora = {
    acumulador: 0,
    salida: null,
    operacion: "",
    generarDiv: function () {
        let div = document.createElement('div');
        div.setAttribute('class', 'calculator');
        let divBotones = document.createElement('div');
        divBotones.setAttribute('class', 'calculator-keys');

        let display = document.createElement('input');
        display.setAttribute('class', 'calculator-screen');
        display.setAttribute('disabled', 'true');
        display.setAttribute('value', '0');
        // display.innerText = '0';
        display.setAttribute('id', 'display');
        div.appendChild(display);

        ['CE', 'Borrar', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'x', '1', '2', '3', '/', '0', '+/-', ',', '='].forEach((valor) => {
            divBotones.appendChild(this.creaDivBoton(valor))
        });
        div.appendChild(divBotones);
        return div;
    },

    creaDivBoton: function (id) {
        let div = document.createElement('div');
        let buttonSimple = document.createElement('button');
        buttonSimple.setAttribute('id', id);
        buttonSimple.innerText = id;
        buttonSimple.addEventListener('click', listenerAccion);
        div.appendChild(buttonSimple);
        return buttonSimple;
    },

    accion: function (accion) {
        let caracter = accion.innerText;
        switch (caracter) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                mostrar(caracter);
                break;
            case 'CE':
                mostrar('0');
                break;
            default:
                console.log(caracter);
                console.log('No es un numero');
        }
    }


};



function mostrar(numeros) {
    // inputDisplay.innerText = numeros;
    inputDisplay.setAttribute('value', numeros);
}

function listenerAccion() {
    calculadora.accion(this);
}



function init() {
    document.getElementById('contenido').appendChild(calculadora.generarDiv());
    inputDisplay = document.getElementById('display');
}

window.addEventListener('load', init);