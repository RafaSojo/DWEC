{
  let gato;

  function init() {
    document.getElementById('optionComer').addEventListener('selected', comerGato);
    document.getElementById('optionJugar').addEventListener('selected', jugarGato);
    document.getElementById('optionDormir').addEventListener('selected', dormirGato);

    gato = new Gato('Juan', '15/08/2018', 'Persa', 8);

  }



  // Creamos el contructor de Gato
  function Gato(nombre, fechaNacimiento, raza, peso) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.raza = raza;
    this.peso = peso;
  }

  // Ahora empezamos a ponerle los campos y los métodos

  Gato.prototype.isVivo = true;
  Gato.prototype.isDurmiendo = false;
  Gato.prototype.PESO_MAXIMO = 15;
  Gato.prototype.PESO_MINIMO = 2;

  Gato.prototype.comer = function () {
    this.incrementarPeso();
  };

  Gato.prototype.incrementarPeso = function () {
    this.peso += 1;
    if (peso > this.PESO_MAXIMO)
      morir();
  };

  Gato.prototype.decrementarPeso = function () {
    this.peso -= 1;
    if (peso < this.PESO_MINIMO)
      morir();
  }

  Gato.prototype.morir = function () {
    this.isVivo = false;
  };

  Gato.prototype.dormir = function () {
    this.isDurmiendo = true;
  }



  function comerGato() {
    gato.comer();
  }

  function jugarGato() {
    gato.jugar();
  }

  function dormirGato() {
    gato.dormir();
  }


  window.addEventListener('click', init);
}