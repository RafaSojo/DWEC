{
    function init(){
        document.getElementById("inicioDocumento").addEventListener("click", () => { window.scrollTo(0,0) });
        document.getElementById("finalDocumento").addEventListener("click", () => { window.scrollTo(0,document.body.clientHeight) });
        document.getElementById("bajarLinea").addEventListener("click", () => { scrollByLines(1) });  
        document.getElementById("subirLinea").addEventListener("click", () => { scrollByLines(-1) });
        document.getElementById("bajarPagina").addEventListener("click", () => { window.scroll(0, window.scrollY + window.innerHeight) });
        document.getElementById("subirPagina").addEventListener("click", () => { window.scroll(0, window.scrollY - window.innerHeight) });
    }

    window.addEventListener("load", init);
}