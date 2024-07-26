const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television de 40 pulgadas', precio: 800 },
    { nombre: 'Ipad pro', precio: 900 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

//ForEach
carrito.forEach(function(producto) {

    console.log(producto.nombre)

});

const arreglo2 = carrito.map(function(producto) {

    console.log(producto.nombre)

});


//map 