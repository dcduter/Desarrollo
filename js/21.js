// arrow funtions

// al agregar => no es nesesario agragar "function"


/*const sumar2 = function (n1, n2){             
    console.log(n1 + n2); 
}*/  


const sumar2 =  (n1, n2) => {             
    console.log(n1 + n2); 
}  
sumar2 (2, 23);


// cuando son de una sola linea puede colocar en una sola linea de codigo

/*const aprendiendo = (tecnologia) => console.log(`Aprediendo ${tecnologia}`)

aprendiendo(`Javascript`)*/

const aprendiendo = (tecnologia) => {
    console.log(`Aprediendo ${tecnologia}`)
}
aprendiendo(`Javascript`)


// ARRAY METHODS

const meses =['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television de 40 pulgadas', precio: 800 },
    { nombre: 'Ipad pro', precio: 900 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];
// forEch

meses.forEach(mes => {
    if(mes =='Marzo') {
    console.log('Marzo si existe');
    }
});

//includes
let resultado;


//Some ideal para arreglo de objetos 

resultado = carrito.some(function(producto) {
    return producto.nombre ==='Celular PRO'

})

//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

//Filter
resultado = carrito.filter(producto => producto.precio > 400 );

resultado = carrito.filter(producto => producto.nombre !=='Celular');


