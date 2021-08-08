

let miFuncion = function(){
    console.log("Hola desde mi funcion");
}

// let miFuncionFlecha = () => {
//     console.log("Hola desde mi funcionFlecha");
// }

let miFuncionFlecha = () =>console.log("Hola desde mi funcionFlecha");

const regresaObjeto = () => { return ( {nombre: "Caro", apellido: "Pasuy"} ); }

miFuncion();
miFuncionFlecha();
console.log(regresaObjeto());