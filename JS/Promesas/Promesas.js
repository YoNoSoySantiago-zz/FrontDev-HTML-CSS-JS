// let miPromesa = new Promise((resolved, rejected) => {
//     let expression = false;
//     if (expression) {
//         resolved('Resoved correctly');
//     }else{
//         rejected('Error');
//     }
// });

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa
// .then(
//     valor => console.log(valor)
// ).catch(
//     error => console.log(error)
// );

let promise = new Promise((resolver) =>{
    // console.log("Inicio de la promesa");
    setTimeout( ()=> resolver('saludos con promesa y timeout'),3000);
    // console.log("Fin de la promesa");
});

// promise.then(valor => console.log(valor));


//Async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return "saludos con primesa y async";
}

// miFuncionConPromesa().then(valor => console.log(valor));


//async/await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver("saludos con promesa y async/await");
    });

    console.log(await miPromesa);
}

// funcionConPromesaYAwait();

//Promesas, await  async y setTimeout

async function funcionConPromesaAwaitYsetTimeout(){
    console.log("Inicio de la funcion");
    let miPromesa = new Promise( resolver => {
        setTimeout(()=> resolver("saludos con promesa y async/await y setTimeout"),3000);
    });
    console.log(await miPromesa);
    console.log("Fin de la funcion");
}

funcionConPromesaAwaitYsetTimeout();