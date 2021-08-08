let person1 = {
    name: "John",
    lastName: "Doe",
    fullName: function () {
        return this.name + " " + this.lastName;
    },
    info: function (tiltulo, tel) {
        return tiltulo + ": " + this.name + " " + this.lastName + ", " + tel;
    }
};
let person2 = {
    name: "Jane",
    lastName: "Doe"
};
//USO DE CALL
console.log(person1.fullName()); 
// console.log(person2.fullName()); //ERROR NO EXISTE FUNCION fullName()

console.log(person1.fullName.call(person2));

console.log(person1.info("Nombre", "987654321"));
// console.log(person2.info("Nombre", "987654321")); //ERROR NO EXISTE FUNCION info()
console.log(person1.info.call(person2, "Nombre", "987654321"));

//USO DE APPLY
console.log(person1.fullName());
console.log(person1.fullName.apply(person2));

//con atributos
console.log(person1.info("ing", "1293871"));

let persona2Array =  ["doc","29389283"];
console.log(person1.info.apply(person2,persona2Array)) ;