{
    window.addEventListener("load", init);
    function init(){
        let enlaces = document.getElementsByTagName('a');
        for(i=0;i<enlaces.length;i++)
          document.getElementById(enlaces[i].id).addEventListener('click', muestraOculta);        
    }
    function muestraOculta() {
        let parrafo = document.getElementById('contenidos_' + this.id);
        switch(parrafo.style.display) {
          case 'none':
            parrafo.style.display = 'block';
            this.innerHTML = 'Ocultar contenidos';
            break;
          case 'block':
          case '':
            parrafo.style.display = 'none';
            this.innerHTML = 'Mostrar contenidos';
            break;
        }
      }
}

