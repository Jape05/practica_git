// let numero = 5;

// if (numero >= 11) {
//     console.log("El numero no es valido, debe ser un numero entre 1 y 10")
// } else if (numero <= 10) {
//     console.log(`La tabla del $.(numero)es la siguiente:`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(numero + " x " + i, " = " + numero * i)
//     }
// }

// ----------------------------------------------------------------------------------

// -- ARRAYS --

// let miArray = [20,30,40,50,60,70];
// console.log(miArray);
// console.log(miArray[2]);
// console.log(miArray.length);
// console.log(miArray[miArray.length -1]);
// console.log(miArray.pop());


// //  -- FOR OF -- 

// for(let miItem of miArray){
//     console.log(miItem);
// }


// --------------------------------------------------------------------------------------

// EJERCICIO 1:

// let numeros = [10, 20, 30, 40];
// let suma = 0;

// for (let item of numeros) {
//     suma = item + suma
// };

// console.log("El resultado es: ", suma);

// // -----------------------------------------------------------------------------------------

// // EJERCICIO 2:

// let numeros = [10, 5, 8, 20, 30];
// let maximo = 0;

// for (let item of numeros) {
//     if (item > maximo) {
//         maximo = item
//     }
// };
// console.log("Valor maximo encontrado: ", maximo);

// // ------------------------------------------------------------------------------------------------


// // EJERCICIO 3:
// Filtrar el elemento de un array


// let arrayDeNumeros = [1, 2, 3, 4, 5];
// let numerosPares = [];

// for (let item of arrayDeNumeros) {
//     if (item % 2 === 0) {
//         numerosPares.push(item)
//     }
// }
// console.log(numerosPares)

// ------------------------------------------------------------------------------------------------------


// // -- FUNCIONES --

// // ¿como declaro una funcion?

// function saludar() {
//     console.log("hola");
// }

// let saludar2 = function () {
//     console.log("hola");
// }

// let saludar3 = () => {
//     console.log("hola");
// }


// // ACTIVIDAD 1:
// Calculadora basica

// const calculadora = function (num1, num2, operador) {
//     if (operador === "+") {
//         console.log(num1 + num2)
//     }
//     if (operador === "-") {
//         console.log(num1 - num2)
//     }
//     if (operador === "*") {
//         console.log(num1 * num2)
//     }
//     if (operador === "/") {
//         console.log(num1 / num2)
//     }

// }


// -------------------------------------------------------------------------------------


// Actividad - mostrar pares o impares:


// const filtrarArray = function (array, tipoDeNumero) {
//     let arrayFiltrado = [];
//     if (tipoDeNumero === "par") {
//         for (let item of array) {
//             if (item % 2 === 0) {
//                 arrayFiltrado.push(item)
//             }
//         } console.log(arrayFiltrado)
//     };
//     if (tipoDeNumero === "impar") {
//         for (let item of array) {
//             if (item % 2 !== 0) {
//                 arrayFiltrado.push(item)
//             }
//         } console.log(arrayFiltrado)
//     };

//     if (tipoDeNumero !== "par" && tipoDeNumero !== "impar") {
//         console.log("No se pudo aplicar ningun fitro")
//     };

// };


// ACTIVIDAD - Calcular promedio

// const calcularPromedio = function (array) {
//     let suma = 0;
//     for (let item of array) {
//         suma = item + suma
//     };
//     let promedio = suma / array.length;
//     console.log(promedio);
// };



// ----------------------------------------------------------------------------------------------


// -- OBJETOS --

// ¿COMO SE DECLARA UN OBJETO?

// const persona = {
//     nombre: "Jesus",
//     edad: 31,
//     profesion: "programador"
// }


// let persona = {
//     nombre: "Jesus",
//     apellifo: "Perdomo",
//     edad: 30,
//     saludar: function(){
//         console.log("hola");
//     }
// }

// ACTIVIDAD:

// const pelicula = {
//     titulo: "Matrix",
//     director: "Jesus Perdomo",
//     genero: "Accion",
//     duracion: "90 min",
//     mostrarInformacion: function () {
//         console.log(this.titulo, this.director, this.genero, this.duracion)
//     }
// }

// ACTIVIDAD: Crear un objeto llamado calculadora

// const calculadora = {
//     sumar: function (num1, num2) {
//         console.log(num1 + num2)
//     },
//     restar: function (num1, num2) {
//         console.log(num1 - num2)
//     },
//     multiplicar: function (num1, num2) {
//         console.log(num1 * num2)
//     },
//     dividir: function (num1, num2) {
//         console.log(num1 / num2)
//     },
// };

// ---------------------------------------------------------------------------------------------------------

// EJERCICIOS DE PRACTICA!!!

// let calificaciones = {
//     nombre: "Jesus Perdomo",
//     ingles: 9,
//     programacion: 10,
//     html: 7,
// };
// let promedio = (calificaciones.ingles + calificaciones.programacion + calificaciones.html) / 3;
// console.log("El promedio de ", calificaciones.nombre, "es: ", promedio);

// ------------------------------------------------------------------------------------------------------------

// -- CALLBACKS --

// // let numeros = [1,2,3,4,5];
// numeros.forEach(function(numero){
//     console.log(numero)
// })

// let numeros = [1,2,3,4,5];
// let numerosDuplicados = numeros.map(function(numero){
//     return numero = 2;
// })
// console.log(numerosDuplicados)


// let numeros = [1,2,3,4,5];
// let numerosDuplicados = numeros.filter(function(numero){
//     return numero % 2 === 0;
// })
// console.log(numerosDuplicados)


// ---------------------------------------------------------------------------------------------------------------





