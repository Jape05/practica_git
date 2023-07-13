// Actividad 1
// Escribe un codigo que recorra los números del 1 al 10 usando un bucle for. Por cada número, verifica si es par o
// impar utilizando una estructura condicional if. Imprime un mensaje indicando si el número es par o impar.


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} es PAR`);
//     } else { console.log(`${i} es IMPAR`); }
// };

// ---------------------------------------------------------------------------------------------------------------------

// Actividad 2
// Guardar un numero en una variable. Utiliza un bucle for para recorrer los números del 1 al 10 y muestra la tabla de
// multiplicar del número guardado. Utiliza un condicional if para verificar si el número es válido (entre 1 y 10).

// let numero = 7;

// if (numero >= 1 && numero <= 10) {
//     console.log(`La tabla del ${numero} es:`);
//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// } else {
//     console.log("El numero no es valido, debe ser un numero entre 1 y 10");
// }

// ---------------------------------------------------------------------------------------------------------------------

// Actividad 3
// Encontrar la palabra mas larga de una frase.Crear una funcion llamada encontrarPalabraMasLarga que reciba como
// parametro una frase(string) y usar el metodo split(más informacion) para dividir la frase en un array de palabras.
// Luego, recorrer el array y encontrar la palabra mas larga y retornarla o mostrarla por consola.

// function encontrarPalabraMasLarga(oracion) {
//     let arrayDePalabras = oracion.split(" ");
//     let palabraMasLarga = "";
//     for (let palabra of arrayDePalabras) {
//         if (palabra.length > palabraMasLarga.length) {
//             palabraMasLarga = palabra;
//         }
//     };
//     return palabraMasLarga;
// };

// ---------------------------------------------------------------------------------------------------------------------

// Actividad 4
// Crear dos objetos llamados persona1 y persona2 con los siguientes datos: nombre, edad. El primero con el nombre
// Pedro y edad 15 y el segundo con el nombre Ana y edad 28. Crear una funcion llamada esMayorDeEdad que reciba como
// parametro un objeto y muestre por consola el siguiente mensaje "NOMBRE es mayor de edad" en caso de que sea mayor o
// "NOMBRE no es mayor de edad" en caso de que no.

// let persona1 = {
//     nombre: "Pedro",
//     edad: 15,
// }
// let persona2 = {
//     nombre: "Ana",
//     edad: 28,
// }
// function esMayorDeEdad(persona) {
//     if (persona.edad >= 18) {
//         console.log(`${persona.nombre} es mayor de edad`)
//     } else {
//         console.log(`${persona.nombre} NO es mayor de edad`)
//     }
// };
// esMayorDeEdad(persona1);
// esMayorDeEdad(persona2);

// ---------------------------------------------------------------------------------------------------------------------

// Actividad 5
// Crear dos objetos, persona1 y persona2, ambos con la propiedad nombre y anioDeNacimiento. Crear una funcion
// agregarEdad que reciba como parametro una persona. En base a la fecha de nacimiento, agregar a esta persona la
// propiedad edad con el numero correspondiente. Al terminar mostrar por consola estos dos objetos

// let persona1 = {
//     nombre: "Jesus",
//     anioDeNacimiento: 1991,
// };
// let persona2 = {
//     nombre: "Pedro",
//     anioDeNacimiento: 1988,
// };
// function agregarEdad(persona) {
//     persona.edad = 2023 - persona.anioDeNacimiento;
// };
// console.log(persona1, persona2);
// agregarEdad(persona1);
// agregarEdad(persona2);
// console.log(persona1, persona2);

// ---------------------------------------------------------------------------------------------------------------------

// Actividad 6
// Filtrar mayores de edad. Crear una funcion llamada filtrarMayoresDeEdad que reciba como parametro un array de
// objetos personas y devuelva un array con las personas mayores de edad.

// let personas = [{
//     nombre: "Jesus",
//     edad: 31,
// }, {
//     nombre: "Pedro",
//     edad: 15,
// }, {
//     nombre: "Jose",
//     edad: 36,
// }]

// function filtrarMayoresDeEdad(personas) {
//     let mayorDeEdad = personas.filter(function (persona) {
//         return persona.edad >= 18;
//     })
//     console.log(mayorDeEdad);
// }
// filtrarMayoresDeEdad(personas);

// ---------------------------------------------------------------------------------------------------------------------

// Actividad 7
// Repetir la actividad 5 pero aplicando el método forEach. Crear una función agregarEdad que reciba como parámetro una
// matriz de personas. En base a la fecha de nacimiento, agregar a cada persona la edad de propiedad con el número
// correspondiente.

// let persona1 = {
//     nombre: "Jesus",
//     edad: 31,
// }

// let persona2 = {
//     nombre: "Pedro",
//     edad: 15,
// }

// let personas = [persona1, persona2]


// // function filtrarMayoresDeEdad (personasArray){
// //     let filtrados =[];
// //     for (let persona of personasArray){
// //         if(persona.edad >=18){
// //             filtrados.push(persona);
// //         }
// //     }
// //     console.log(filtrados)
// // }
// // filtrarMayoresDeEdad(personas);


// function filtrarMayoresDeEdad(personasArray) {
//     let filtrados = personasArray.filter(function (persona) {
//         return persona.edad >= 18;
//     })
//     console.log(filtrados)
// };
// filtrarMayoresDeEdad(personas);

// ---------------------------------------------------------------------------------------------------------------------