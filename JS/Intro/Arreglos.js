//Arreglos
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.push("Hola");
console.log(array);
array[array.length] = "Adios";
console.log(array);
array[20] = "Nuevo";
console.log(array);

//objeto
const obj = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    estado: "Buenos Aires",
    nacionalidad: "Argentina"
};
console.log(typeof obj);
console.log(typeof array);
console.log(Array.isArray(obj));
console.log(Array.isArray(array));
