{
    window.addEventListener("load", init);
    function init(){
        document.getElementById('enlace').addEventListener('click',anade)
        function anade(){
            let elemento = document.createElement("li");
            elemento.appendChild(document.createTextNode("Texto del nuevo elemento"));
            let lista = document.getElementById("lista");
            lista.appendChild(elemento);    
        }
    }
}