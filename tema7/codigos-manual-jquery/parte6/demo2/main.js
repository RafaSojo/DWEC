$(()=>{
  $(document).click(e => {
    $("#msg").text("X: " + e.pageX + " - Y: " + e.pageY);
  });
});