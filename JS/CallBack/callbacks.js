function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){
    var resultado = op1 + op2;
    funcionCallBack(`resultado: ${resultado}`);
}

sumar(10, 20, imprimir);

//Llamadas asincronas con el uso de setTimeout
function miFuncionCallBack(){
    console.log('Llamada asincrona despues de 3 seg');
}

setTimeout(miFuncionCallBack, 3000);

setTimeout(() => console.log('Llamada asincrona despues de 5 seg'), 5000);
setTimeout(function(){
    console.log('Llamada asincrona despues de 4 seg');
}, 4000);

//Llamadas asincronas con el uso de setInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${ fecha.getHours()} : ${fecha.getMinutes()} : ${ fecha.getSeconds()} `)
}

setInterval(reloj, 1000);