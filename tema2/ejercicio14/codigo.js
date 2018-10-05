{
    window.addEventListener("load", init);
    function init(){
        let enlaces = document.getElementsByTagName('a');
        for(i=0;i<enlaces.length;i++)
          enlaces[i].addEventListener('click', muestraOculta);
    }
    function muestraOculta() {
        let parrafo = document.getElementById('contenidos_' + this.id);
        switch(parrafo.style.display) {
          case 'none':
            parrafo.style.display = 'block';
            this.textContent = 'Ocultar contenidos';
            break;
          case 'block':
          case '':
            parrafo.style.display = 'none';
            this.textContent = 'Mostrar contenidos';
            break;
        } 
      }
}

