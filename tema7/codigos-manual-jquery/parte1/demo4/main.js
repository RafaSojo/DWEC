$(()=>{
    $("a#enlaceDemo").mouseover(()=>{
        $("#capa").addClass("jQuery-demo-4-clasecss");
    });
    $("a#enlaceDemo").mouseout(()=>{
        $("#capa").removeClass("jQuery-demo-4-clasecss");
    });
    $("a#enlaceDemo").click((evento)=>evento.preventDefault());
});