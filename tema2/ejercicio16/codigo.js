{
  window.addEventListener('click', muestraClick);
  const inicioMensaje = 'Se ha hecho click ';
  let pMensaje = document.getElementById('mensaje');

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

      pMensaje.textContent = inicioMensaje + posicionAA + ' ' + posicionID;

  }


}