{
    window.addEventListener("load", init);   
    function init(){
        document.getElementById('enlace').addEventListener('click',muestra)
        function muestra(){
            document.getElementById('textoEnlace').style.display = 'none';
            document.getElementById('textoMostrar').textContent = 'Este es el contenido que se muestra cuando has pulsado el enlace.'
        }
    }
}