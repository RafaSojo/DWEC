{
    function Reserva(nombre, email, fecha, hora, noches, personas, desayuno, almuerzo, cena, edad) {
        this.id = this.uniqueID();
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

    Reserva.prototype.uniqueID = (function () {
        let id = 0;
        return function () {
            return id++;
        };
    })();

    Reserva.prototype.checkNombre = function (nombre) {
        if (nombre.length < 1)
            throw new Error("El nombre no es válido");
        return nombre;
    }

    Reserva.prototype.checkEmail = function (email) {
        if (!/^([a-z]+@[a-z]+\.[a-z]{2,9})$/i.test(email))
            throw new Error("El email no es válido");
        return email;
    }

    Reserva.prototype.calcularDiasRestantes = function (fecha) {
        let fechaActual = Date.now();
        let fechaLlegada = Date.parse(fecha);
        let fechaRestante = fechaLlegada - fechaActual;
        let diasSinTruncar = fechaRestante / 1000 / 60 / 60 / 24;
        let dias = Math.trunc(fechaRestante / 1000 / 60 / 60 / 24);
        if (diasSinTruncar > 0 && diasSinTruncar < 1) {
            return 1;
        }
        return dias;
    }

    // Función para crear un documento html y mostrarlo en una nueva ventana
    Reserva.prototype.mostrar = function () {
        let html = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/estilos.min.css" />
        <meta author="Rafael Sojo">
        <title>Reserva</title>
    </head>
    <body>
        <main>
        <h1>Reserva - Rafael Sojo</h1>
        <div>
        <p>ID: ${this.id}</p>
        <p>Nombre: ${this.nombre}</p>
        <p>Email: ${this.email}</p>
        <p>Fecha llegada: ${this.fecha}</p>
        <p>Hora llegada: ${this.hora}</p>
        <p>Número de personas: ${this.personas}</p>
        <p>Número de noches: ${this.noches}</p>
        <p>Desayuno: ${(this.desayuno == "true" ? "Si":"No")}</p>
        <p>Almuerzo: ${(this.almuerzo == "true" ? "Si":"No")}</p>
        <p>Cena: ${(this.cena == "true" ? "Si":"No")}</p>
        <p>Edad: ${this.edad}</p>
        <p>Dias restantes: ${this.diasRestantes}</p>
        </div>
          <noscript>
            Tu navegador no es compatible con JavaScript.
          </noscript>
        </main>
    </body>
    </html>`;
        let ventana = window.open("", "", "width=300px,height=200px");
        ventana.document.open();
        ventana.document.write(html);
        ventana.document.close();
    }
}