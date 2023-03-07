/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
(sólo hay que comprobar si lo es por uno de los cuatro)

*/

let number1 = parseInt(prompt("Ingrese un numero: "));

if(number1%2==0 || number1%3==0 || number1%5==0 || number1%7==0){
    document.write(`El numero es divisible por 2, 3, 5 o 7`);
}else{
    document.write(`El numero no es divisible por 2, 3, 5 o 7`);
}