function Reserva(nombre, correo, fechaLlegada, horaLlegada, numeroNoches, numeroPersonas, servicioRestaurante, edadCliente) {
    this.nombre = nombre;
    this.correo = correo;
    this.fechaLlegada = this.setFecha(fechaLlegada);
    this.horaLlegada = horaLlegada;
    this.numeroNoches = numeroNoches;
    this.numeroPersonas = numeroPersonas;
    this.servicioRestaurante = this.setServicioRestaurante(servicioRestaurante);
    this.edadCliente = edadCliente;
    this.id = this.incrementarId();
}

Reserva.prototype.incrementarId = (function () {
    let id = 1;
    return function () {
        return id++;
    };
})();

Reserva.prototype.setServicioRestaurante = function (servicioRestaurante) {
    if (servicioRestaurante.length > 1) {
        let salida = "";
        servicioRestaurante.forEach((element, index) => {
            (index === servicioRestaurante.length - 1) ? (salida += element.value) : (salida += element.value + ", ");
        });
        return salida;
    } else if (servicioRestaurante.length === 1) {
        return servicioRestaurante[0].value;
    } else {
        return "Ninguno";
    }
};

Reserva.prototype.mostrar = function () {
    let html = `<!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Reserva - Rafael Sojo</title>
      </head>
      <body>
          <main>
          <h1>Reserva - Rafael Sojo</h1>
            <div class="card">
              <p><b>ID Reserva: </b>${this.id}</p>
              <p><b>Nombre:</b> ${this.nombre}</p>
              <p><b>Correo electrónico:</b> ${this.correo}</p>
              <p><b>Fecha llegada:</b> ${this.formatoFecha()}</p>
              <p><b>Hora llegada:</b> ${this.horaLlegada}</p>
              <p><b>Numero noches:</b> ${this.numeroNoches} noche/s</p>
              <p><b>Numero personas:</b> ${this.numeroPersonas} persona/s</p>
              <p><b>Servicio restaurante:</b> ${this.servicioRestaurante}</p>
              <p><b>Edad cliente:</b>  ${this.edadCliente} años.</p>
              <p><b>Días para la reserva:</b> ${this.calcularDias()}  dia/s.</p>
            </div>
            </main>
      </body>
      </html>`;
    let ventana = window.open("", "", "width=300px,height=200px");
    ventana.document.open();
    ventana.document.write(html);
    ventana.document.close();
};

Reserva.prototype.setFecha = function (fechaLlegada) {
    if (!(fechaLlegada instanceof Date)) 
        throw new Error("Fecha no valida");
    return fechaLlegada;
};


Reserva.prototype.formatoFecha = function () {
    let opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return this.fechaLlegada.toLocaleDateString("es-ES", opciones);
};

Reserva.prototype.calcularDias = function () {
    let fechaActualEnMs = Date.now();
    let fechaLlegada = Date.parse(this.fechaLlegada);
    let fechaRestante = fechaLlegada - fechaActualEnMs;
    let diasSinTruncar = fechaRestante / 1000 / 60 / 60 / 24;
    let dias = Math.trunc(fechaRestante / 1000 / 60 / 60 / 24);
    if (dias < 0) 
        throw new Error("La fecha introducida es anterior a la fecha actual");
    if (diasSinTruncar > 0 && diasSinTruncar < 1) 
        return 1;
    return dias;
};