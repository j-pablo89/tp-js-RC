/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let number1 = parseInt(prompt('Ingrese un numero: '));
let number2 = parseInt(prompt('Ingrese otro numero: '));
if(number1>number2){
    document.write(`El mayor es ${number1}`);
}else{
    if(number1<number2){
        document.write(`El mayor es ${number2}`);
    }else{
        document.write(`Son iguales`);
    }
}