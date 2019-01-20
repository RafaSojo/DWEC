 $(()=>{
  $("#boton").click(function() {
    $("p i").css("color", "#66F");
  });
  $("table.mitabla td").css("background-color", "#55ff00");
  $("p.parraforojo > b").css("color", "red");
  $(".mitd > *").css("border", "1px solid #ff9900");
  $("i + b").css("font-size", "40px");
  $(".elemlista + li").css("opacity", 0.2);
  $("#a2 ~ div.clase").css("font-size", "180%");
  $("#miparrafo ~ table").css("border", "3px dotted #dd6600");
});