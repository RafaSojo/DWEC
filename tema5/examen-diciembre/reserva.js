{
    function Reserva(nombre, email, fecha, hora, noches, personas, desayuno, almuerzo, cena, edad) {
        this.id = Reserva.id++;
        this.nombre = Reserva.checkNombre(nombre);
        this.email = Reserva.checkEmail(email);
        this.fecha = Reserva.checkFecha(fecha);
        this.hora = Reserva.checkHora(hora);
        this.noches = Reserva.checkNoches(noches);
        this.personas = Reserva.checkPersonas(personas);
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
        this.edad = Reserva.checkEdad(edad);
        this.diasRestantes = Reserva.calcularDiasRestantes(this.fecha);
    }

    // Primer id
    Reserva.id = 0;

    // En esta función como está diseñado requiere que se le pasen varios inputs (los de name edad) como entrada
    Reserva.checkEdad = function (edad) {
        if (edad == undefined)
            throw new Error("Tienes que seleccionar una edad");
        return edad;
    }


    Reserva.checkNoches = function (noches) {
        // Para controlar si se introduce un input o una cadena de texto
        if (noches.value != undefined)
            noches = noches.value;

        if (parseInt(noches) <= 0)
            throw new Error("Tienes que introducir un número positivo");
        return parseInt(noches);
    }

    Reserva.checkPersonas = function (personas) {
        // Para controlar si se introduce un input o una cadena de texto
        if (personas.value != undefined)
            personas = email.value;

        if (parseInt(personas) <= 0)
            throw new Error("Tienes que introducir un número positivo");
        return parseInt(personas);
    }

    Reserva.checkNombre = function (nombre) {
        // Para controlar si se introduce un input o una cadena de texto
        if (nombre.value != undefined)
            nombre = nombre.value;

        if (nombre.length < 1)
            throw new Error("El nombre no es válido");
        return nombre;
    }

    Reserva.checkEmail = function (email) {
        // Para controlar si se introduce un input o una cadena de texto
        if (email.value != undefined)
            email = email.value;

        if (!/^([a-z0-9]+@[a-z]+\.[a-z]{2,9})$/i.test(email))
            throw new Error("El email no es válido");
        return email;
    }


    Reserva.checkHora = function (hora) {
        // Para controlar si se introduce un input o una cadena de texto
        if (hora.value != undefined)
            hora = hora.value;

        if (!/^[0-9]{2}:[0-9]{2}$/i.test(hora))
            throw new Error("La hora no es válida");
        return hora;
    }

    Reserva.checkFecha = function (fecha) {
        // Para controlar si se introduce un input o una cadena de texto
        if (fecha.value != undefined)
            fecha = fecha.value;

        let dia, mes, anio;
        try {
            [, dia, mes, anio] = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/i.exec(fecha);
        } catch {
            throw new Error("Formáto de fecha no válida");
        }
        let fechaAComprobar = new Date(mes + "/" + dia + "/" + anio);
        if (fechaAComprobar == "Invalid Date")
            throw new Error("Números de fecha inválidos");
        if (fechaAComprobar < new Date())
            throw new Error("La fecha no puede ser del pasado");
        return fecha;


    }

    Reserva.calcularDiasRestantes = function (fecha) {
        let fechaArray = fecha.split('/');
        let fechaActual = Date.now();
        let fechaLlegada = Date.parse(fechaArray[1] + '/' + fechaArray[0] + '/' + fechaArray[2]);
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


// Para obtener el valor del radio button marcado
function getEdad(inputs) {
    for (const elemento of inputs)
        if (elemento.checked)
            return elemento.value;
}




/* ------------------------------------------------------------------------------------------- */


Reserva.comprobarNombre = function (spanNombre){

};








