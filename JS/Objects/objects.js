let x = 10;
console.log(x.length);//ERROR

function Persona(nombre, apellido, email, edad, idioma) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    this.idioma = idioma;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
}

let persona = new Persona("Juan", "Perez", "jperez@gmail.com", 25, "ES");

// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     email: "jperez@gmail.com",
//     edad: 30,
//     idioma: "es",
//     get lang() {
//         return this.idioma.toUpperCase();
//     },
//     set lang(value) {
//         this.idioma = value.toUpperCase();
//     },
//     nopmbreCompleto: function () {
//         return this.nombre + " " + this.apellido;
//     }
// }

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
//ALL
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido = "Hernandez";
persona2.email = "chernandez@gmail.com";
persona2.edad = 30;
persona2.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
}

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.email);
console.log(persona2.edad);

//ALL
console.log(persona2);
console.log(persona2.nombreCompleto());

//Otra manera de acceder a los atributos
console.log(persona["nombre"]);
console.log(persona["apellido"]);
console.log(persona["email"]);
console.log(persona["edad"]);

//for in
for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//Agreagar y eliminar atributos
persona.teléfono = "55555555";

console.log(persona.teléfono);
console.log(persona);

delete persona.teléfono;
console.log(persona.teléfono);
console.log(persona);

//Listar
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//GET Y SET

console.log(persona.lang);
persona.lang = "EN";
console.log(persona.lang);

//Agregar una nueva propiedad a todos
Persona.prototype.tel = '4324123123';