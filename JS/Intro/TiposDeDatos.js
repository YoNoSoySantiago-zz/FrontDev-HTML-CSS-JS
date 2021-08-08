//Cadenas
var cadena = "Hola";
//Numericos
var numero = 1;
//Booleanos
var verdadero = true;
var falso = false;
//Numeros flotantes
var numero_flotante = 1.5;
//Objetos
var objeto = {
    nombre: "Juan",
    edad: 30,
    estado: "Buenos Aires"
};
//Funciones 
var funcion = function funcion(nombre) {
    console.log("Hola "+ nombre);
}
console.log(funcion("Juan"));
console.log(typeof funcion);

//Symbol VALOR UNICO DE UNA VARIABLE
var symbol = Symbol("variable");
console.log(typeof symbol);
//Ver tipo de dato
var tipo = "Hola";
console.log(typeof tipo);
tipo = 45;
console.log(typeof tipo);
console.log(typeof objeto);


//Clases
class Nombre {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}

//Undefined
var undefined;
console.log(typeof undefined);
//null aucencia de valor
var nula = null;
console.log( nula);
console.log(typeof nula);

//Arreglos
var arreglo = [1, 2, 3, 4, 5];
console.log( arreglo);
console.log(typeof arreglo);

//Concatenacion de cadenas
var cadena1 = "Hola";
var cadena2 = "Mundo";
console.log(cadena1 + cadena2);


//USAR VAR NO ES RECOMENDADO
nombre = "Juan";
console.log(nombre);
//USER LET ES LO MEJOR
let nombresito = "Juan";
console.log(nombresito);
//Const NO deja cambiar valor
const nombre3 = "Juan";
console.log(nombre3);
// nombre3 = "Pablo"; ERROR