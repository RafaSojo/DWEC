{
    window.addEventListener("load", init);
    function init(){
        document.getElementById('boton').addEventListener('click',muestraVentanas)
    }
    function muestraVentanas(){
        for(let i=0;i<5;i++){
            let ventana = window.open("", "MsgWindow"+i, "width=300,height=200");
            ventana.document.write("<!DOCTYPE html><head><title>Ventana de prueba</title></head><body><p>Se han utilizado las siguientes propiedades:<ul><li>height=200</li><li>width=3000</li></ul></p></body></html>");
        }
    }
}