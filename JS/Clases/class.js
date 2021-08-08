class Persona{

    static contadorCantidadPersonas = 0;

    //Simular una constante statica
    static get MAX_PERSONAS(){
        return 100;
    }
    constructor(nombre,apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorCantidadPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    nombreCompleto(){
        return `${this.nombre}  ${this.apellido}`;
    }
    static saludar(){
        return "Hola desde metodo static";
    }
    static saludar2(persona){
        return "Hola " + persona.nombre;
    }
}

let persona1 = new Persona("Juan", "Perez", 25);
console.log(persona1);

let persona2 = new Persona("Carolina", "Pasuy", 20);
console.log(persona2);

persona1.nombre = "Santiago";
persona1.apellido = "Hurtado";
persona1.edad = 20;

console.log(persona1);

//CLASE HIJA
class Empleado extends Persona{
    constructor(deppartamento, nombre, apellido, edad, salario){
        super(nombre, apellido, edad);
        this._deppartamento = deppartamento;
        this._salario = salario;
    }
    get deppartamento(){
        return this._deppartamento;
    }
    set deppartamento(deppartamento){
        this._deppartamento = deppartamento;
    }
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }

    static 
}

let empleado1 = new Empleado("Dpto. de Ingenieria", "Carolina", "Pasuy", 20, 900000);
console.log(empleado1);
console.log(empleado1.nombreCompleto());
// persona1.saludar(); no es una funcion, dado que los metodos estaticos estan asociados a la clase no al objeto
console.log(Persona.saludar());
console.log(Persona.saludar2(empleado1));


//Atributos Staticos
console.log(Persona.contadorCantidadPersonas);
console.log(Empleado.contadorCantidadPersonas);
empleado69 = new Empleado("Dpto. de Ingenieria", "Santiago", "Hurtado", 20, 0);
console.log(Persona.contadorCantidadPersonas);
console.log(Empleado.contadorCantidadPersonas);