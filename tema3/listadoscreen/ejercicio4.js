{
    function init(){
        let location = document.location;

        document.getElementById('servidor').innerText = location.host;
        document.getElementById('protocolo').innerText = location.protocol;
        document.getElementById('ruta').innerText = location.href;

    }

    window.addEventListener("load", init);
}