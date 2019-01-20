$(()=>{
    $("#enlaceajax").click(function(evento){
        evento.preventDefault();
        $("#destino").load("index.html", {nombre: "Juan", edad: 32}, ()=> alert("Datos enviados por ajax."));
    });
});