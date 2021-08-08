//Declaracíon de funciones
function suma(a,b){
    return a+b;
}
let resta = function(a,b){
    return a-b;
}
//Llamada de funciones
console.log(suma(1,2));

console.log(resta(1,2));

//Factorial
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
//Funciones como Objetos
console.log(factorial.toString());

//Funcion Flecha
const sumarFuncionTipoFlecha = (a,b)=> a+b;
console.log(sumarFuncionTipoFlecha(1,2));
console.log(typeof sumarFuncionTipoFlecha);

//IMPORTANTE:

let sumar = function(a,b=10){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    return a+b;
}

sumar(3,2,5);