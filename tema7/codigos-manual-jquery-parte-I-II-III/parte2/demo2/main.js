$(()=>{
    $("#capa").data("nombre","Rafael Sojo Ruiz");
    alert($("#capa").data("nombre"));
    $("#capa").removeData("nombre");
});