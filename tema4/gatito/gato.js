{
  let gato, spanPeso, spanDurmiendo;

  function init() {
    document.getElementById('optionComer').addEventListener('click', comerGato);
    document.getElementById('optionJugar').addEventListener('click', jugarGato);
    document.getElementById('optionDormir').addEventListener('click', dormirGato);

    gato = new Gato('Juan', '15/08/2018', 'Persa', 8);

    // Cargamos span variables
    spanPeso = document.getElementById('spanPeso');
    spanDurmiendo = document.getElementById('spanDurmiendo');

    document.getElementById('spanNombre').innerText = gato.nombre;
    document.getElementById('spanFechaNacimiento').innerText = gato.fechaNacimiento;
    document.getElementById('spanRaza').innerText = gato.raza;

    mostrarNombreDurmiendo();

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
    this.peso += 1;
    if (this.peso > this.PESO_MAXIMO)
      this.morir();
  };

  Gato.prototype.jugar = function () {
    this.peso -= 1;
    if (this.peso < this.PESO_MINIMO)
      this.morir();
  };



  Gato.prototype.morir = function () {
    this.isVivo = false;
  };

  Gato.prototype.dormir = function () {
    this.isDurmiendo = true;
  }



  function comerGato() {
    gato.comer();
    mostrarNombreDurmiendo();
  }

  function jugarGato() {
    gato.jugar();
    mostrarNombreDurmiendo();
  }

  function dormirGato() {
    gato.dormir();
    mostrarNombreDurmiendo();
  }


  function mostrarNombreDurmiendo() {
    spanDurmiendo.innerText = gato.isDurmiendo;
    spanPeso.innerText = gato.peso;
  }


  window.addEventListener('load', init);
}