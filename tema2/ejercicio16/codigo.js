{
  window.addEventListener('click', muestraClick);

  function muestraClick(e) {
    let posicionAA, posicionID;
    if (e.pageX < window.innerWidth / 2)
      posicionID = 'izquierda';
    else
      posicionID = 'derecha';

    if (e.pageY < window.innerHeight / 2)
      posicionAA = 'arriba';
    else
      posicionAA = 'abajo';

    document.getElementById('mensaje').textContent = 'Se ha hecho click ' + posicionAA + ' ' + posicionID;

  }


}