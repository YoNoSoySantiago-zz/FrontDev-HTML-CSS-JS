//Operadores
a = 5;
b = 3;

//suma
c = a + b;
console.log(c);
//resta
c = a - b;
console.log(c);
//multiplicacion
c = a * b;
console.log(c);
//division
c = a / b;
console.log(c);
//modulo
c = a % b;
console.log(c);
//potencia
c = a ** b;
console.log(c);

//incremento
a++;
console.log(a);
//decremento
a--;
console.log(a);


//Comparaciones
a = 5;
b = 3;
c = a == b;
console.log(c);
d = "5";
console.log(d == a);
console.log(d === 5);//Incluye el tipo de dato
console.log(d !== 5);//Incluye el tipo de dato

//Convertir
a = "5";
b = parseInt(a);
console.log(a===b);

a = "5x";
b = parseInt(a);
console.log(b);
console.log(isNaN(b));
b = Number(a);
console.log(b);
console.log(isNaN(b));