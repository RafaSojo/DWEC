$(()=>{
    let numClics = 0;
    let numDobleClics = 0;

    $("#micapa").click(() => {
      numClics++;
      $("#mensaje").html("Clic " + numClics);
    });

    $("#micapa").dblclick(() => {
      numDobleClics++;
      $("#mensaje").html("Doble Clic " + numDobleClics);
    });
});