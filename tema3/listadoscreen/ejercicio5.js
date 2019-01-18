{
    let divTiempo;
    function init(){
        divTiempo = document.getElementById('reloj');
        setInterval(pintaTiempo,800);
    }

    function pintaTiempo() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        divTiempo.innerText = ((h<10) ? "0"+h : h) + ":" + ((m<10) ? "0"+m : m) + ":" + ((s<10) ? "0"+s : s);
    }

    window.addEventListener("load", init);
}