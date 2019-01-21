$(()=>{
  $("#mitexto").keypress(e => {
    e.preventDefault();
    $("#loescrito").html(e.which + ": " + String.fromCharCode(e.which));
  });
});