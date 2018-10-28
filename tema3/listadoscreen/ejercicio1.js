{
    window.addEventListener("load", init);

    function init() {
        let ul = document.createElement('ul');
        ul.appendChild(getLi('window.outerHeight: ' + window.outerHeight));
        ul.appendChild(getLi('window.innerHeight: ' + window.innerHeight));
        ul.appendChild(getLi('window.screen.availHeight: ' + window.screen.availHeight));
        ul.appendChild(getLi('window.screen.height: ' + window.screen.height));
        ul.appendChild(getLi('window.document.clientHeight: ' + window.document.clientHeight));

        document.getElementById('contenido').appendChild(ul);
    }

    function getLi(texto) {
        elemento = document.createElement('li');
        elemento.innerText = texto;
        return elemento;
    }

}