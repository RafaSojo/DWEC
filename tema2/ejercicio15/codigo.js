{
  window.addEventListener('mousemove', printMouseInfo);
  window.addEventListener('keypress', printKeyInfo);

  function printMouseInfo(e) {
    document.getElementById('infoRaton').innerHTML = '<h1>Ratón</h1><br>Coordenadas: X:' + e.pageX + ' - Y:' + e.pageY;
  }

  function printKeyInfo(e) {
    document.getElementById('infoTeclado').innerHTML = '<h1>Teclado</h1><br>Caracter: ' + e.key + '<br>Código:' + e.keyCode;
  }

}