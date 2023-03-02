/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
(hay que decir todos por los que es divisible)


*/

let number1 = parseInt(prompt("Ingrese un numero: "));

if(number1%2==0 || number1%3==0 || number1%5==0 || number1%7==0){
    if(number1%2==0){
        document.write(`Es divisible por 2 <br>`);
    }
    if(number1%3==0){
        document.write(`Es divisible por 3 <br>`);
    }
    if(number1%5==0){
        document.write(`Es divisible por 5 <br>`);
    }
    if(number1%7==0){
        document.write(`Es divisible por 7 <br>`);
    }
}else{
    document.write(`No es divisible por 2, 3, 5 o 7`);
}


