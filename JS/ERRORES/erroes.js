"use strict"
try{
    x = 10;
}catch(e){
    console.log(e);
}
finally{
    console.log("Finally");
}
console.log("continuamos...");

try{
    let x = "10x";
    if( isNaN(x)){
        throw "x is NaN";
    }
    console.log(x);
}catch(e){
    console.log(e);
}
finally{
    console.log("Finally");
}