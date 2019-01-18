{
  let gato, spanPeso, spanDurmiendo, imgGato;

  function init() {
    document.getElementById('optionComer').addEventListener('click', comerGato);
    document.getElementById('optionJugar').addEventListener('click', jugarGato);
    document.getElementById('optionDormir').addEventListener('click', dormirGato);

    // Nombres by -> http://www.mundoanimalia.com/nombres_de_gatos
    let nombresGato = ['Tom', 'Kira', 'Simba', 'Felix', 'Coco', 'Silvestre'];

    let razasGato = ['Persa', 'Ragdoll', 'Siamés', 'Abisinio', 'Bengala', 'Siberiano'];

    gato = new Gato(nombresGato[Math.floor(Math.random() * nombresGato.length)], generateRandomNumber(1,30)+'/'+generateRandomNumber(1,12)+'/'+generateRandomNumber(2000,2018), razasGato[Math.floor(Math.random() * razasGato.length)], generateRandomNumber(4,12));

    // Cargamos span variables
    spanPeso = document.getElementById('spanPeso');
    spanDurmiendo = document.getElementById('spanDurmiendo');
    imagenGato = document.getElementById('imagenGato');

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
  // Gato.prototype.isDurmiendo = false;
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
    document.getElementById('contenido').innerHTML = '<h1>El gato murió</h1><img src="http://worldartsme.com/images/dead-cat-clipart-1.jpg" alt="Gato muerto" />';
  };

  // Gato.prototype.dormir = function () {
  //   this.isDurmiendo = true;
  // }



  function comerGato() {
    gato.comer();
    mostrarNombreDurmiendo();
    imagenGato.src = "https://www.gatosphera.com/wp-content/uploads/2013/10/que-come-gato.jpg";
  }

  function jugarGato() {
    gato.jugar();
    mostrarNombreDurmiendo();
    imagenGato.src = "https://st2.depositphotos.com/4278641/6309/i/950/depositphotos_63096459-stock-photo-cat-playing-ball.jpg";
  }

  function dormirGato() {
    // gato.dormir();
    mostrarNombreDurmiendo();
    imagenGato.src = "https://sectorviral.com/wp-content/uploads/2018/05/gato-durmiendo.jpg";
  }


  function mostrarNombreDurmiendo() {
    // spanDurmiendo.innerText = gato.isDurmiendo;
    spanPeso.innerText = gato.peso;
  }

  function generateRandomNumber(min_value, max_value) {
    return parseInt(Math.random() * (max_value - min_value) + min_value);
  }

  window.addEventListener('load', init);
}