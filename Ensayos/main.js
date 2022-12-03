const saludo = 'Hola mundo';
console.log(saludo.charAt(1));
console.log(saludo.substring(0, 10));
console.log(saludo.length);

// Los arreglos son listas ordenadas de valores, de cualquier tipo.
var miArreglo = ["Hola", 45, true];
console.log(miArreglo);
console.log(miArreglo[1]);

miArreglo.push('Miguel');
console.log(miArreglo);

// Los objetos en JavaScript son equivalentes a los 'diccionarios' o 'mapas' en otros
// lenguajes: una colección de pares llave/valor desordenada.
var miObjeto = {llave1: "Hola", llave2: "Mundo"};
console.log(miObjeto.llave1);

var miObjeto2 = {miLlave: "miValor", "mi otra llave": 4};
console.log(miObjeto2["mi otra llave"]);

var myCars = [];

myCars.push( { modelo: 'mazda', año: 2022, condicion: 'nuevo' } );

console.log(myCars);
