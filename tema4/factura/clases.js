function Cliente(nombre, cif, direccion, telefono, email) {
    this.nombre = nombre;
    this.cif = cif;
    this.direccion = direccion;
    this.email = email;
    this.telefono = telefono;
}

function Linea(descripcionProducto, unidades, precio, iva, importe) {
    this.descripcionProducto = descripcionProducto;
    this.unidades = unidades;
    this.precio = precio;
    this.iva = iva;
    this.importe = importe;
}

function Emisor(nombre, cif, direccion, telefono, email) {
    this.nombre = nombre;
    this.cif = cif;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
}

function Factura(fecha, moneda, emisor, cliente, lineas, observaciones) {
    this.fecha = fecha;
    this.moneda = moneda;
    this.emisor = emisor;
    this.cliente = cliente;
    this.lineas = lineas;
    this.observaciones = observaciones;
    this.total = this.calculaTotal();
    this.id = this.incrementaId();
}

Factura.prototype.id = 0;

Factura.prototype.incrementaId = function () {
    return this.id++;
};

