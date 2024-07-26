// this
window.nombre = "Un Nombre";

const reservacion = {
    nombre: 'Juan',
    informacion: function () {
        console.log(`${this.nombre}`);
            
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
    console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
}
}
reservacion.informacion();
reservacion.informacion2();