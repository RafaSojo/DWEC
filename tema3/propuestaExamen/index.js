{
    function init() {
        document.getElementById('enlace1').addEventListener('click', abrir1);
        document.getElementById('enlace2').addEventListener('click', abrir2);
    }

    function abrir1(){
        window.open('pass.html','_self');
    }

    function abrir2(){
        window.open('tareas.html','_self');
    }

    window.addEventListener('load', init);
}