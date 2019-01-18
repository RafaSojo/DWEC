{
  window.addEventListener('load', init);

  function init() {
    document.getElementById('texto').addEventListener('keypress', limita);
    document.getElementById('texto').addEventListener('keyup', actualizaInfo);
  }

  const limiteCaracteres = 100;

  function limita(event) {
    let elemento = document.getElementById("texto");
    if (elemento.value.length >= limiteCaracteres)
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);

  }

  function actualizaInfo() {
    let elemento = document.getElementById("texto");
    let info = document.getElementById("info");
    if (elemento.value.length >= limiteCaracteres)
      info.innerHTML = "Máximo " + limiteCaracteres + " caracteres";
    else
      info.innerHTML = "Puedes escribir hasta " + (limiteCaracteres - elemento.value.length) + " caracteres adicionales";
  }
}