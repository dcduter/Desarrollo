// Foor loop

/*for( let i = 1; i <= 100; i++) {
	if( i % 2 === 0) {
		console.log(`El numero  ${i} es PAR`);

	} else {
		console.log(`El numero  ${i} es IMPAR`)
	}
}*/

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television de 40 pulgadas', precio: 800 },
    { nombre: 'Ipad pro', precio: 900 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

for (let i = 0; i < carrito.length; i++ ) {
	console.log( carrito[i].nombre); 
}

// While loop

/*let i = 20; //indice

while(i < 10) {
	console.log('Desde el while loop');
	i++; // incremento
}*/




// Do while loop

let i = 100;
do { 
	console.log(i);

}while (i < 10 );