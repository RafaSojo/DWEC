{
    function Reserva(nombre, email, fecha, hora, noches, personas, desayuno, almuerzo, cena, edad) {
    this.id = this.incrementarId();
    this.nombre = this.checkNombre(nombre);
    this.email = this.checkEmail(email);
    this.fecha = fecha;
    this.hora = hora;
    this.noches = noches;
    this.personas = personas;
    this.desayuno = desayuno;
    this.almuerzo = almuerzo;
    this.cena = cena;
    this.edad = edad;
    this.diasRestantes = this.calcularDiasRestantes(fecha);
}

Reserva.prototype.id = 0;
Reserva.prototype.incrementarId = function () {
    return this.id++;
};

Reserva.prototype.checkNombre = function (nombre){
    if(nombre.length < 1)
     throw new Error("El nombre no es válido");
    return nombre;
}

Reserva.prototype.checkEmail = function (email){
    if(!/^([a-z]+@[a-z]+\.[a-z]{2,9})$/i.test(email))
        throw new Error("El email no es válido");
    return email;
}


Reserva.prototype.calcularDiasRestantes = function (fecha){
    // let fechaOrigen = new Date(fecha);
    // let fechaActual = new Date();
    // return ((fechaOrigen-fechaActual) / 1000/60/60/24);
    return 0;
}


// Función para crear un documento html y mostrarlo en una nueva ventana
// Reserva.prototype.mostrar = function (){
//     // document.open()
//     // a = new Document();

// }
}