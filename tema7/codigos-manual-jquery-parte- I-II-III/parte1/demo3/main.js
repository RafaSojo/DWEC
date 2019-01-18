$(()=>{
    $("a").click((evento)=>{
        alert("Has pulsado en el enlace pero se ha cancelado la acción por lo que no serás redirigido.");
        evento.preventDefault();
    });
});