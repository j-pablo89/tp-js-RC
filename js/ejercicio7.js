/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres
*/

let number1 = parseInt(prompt('Ingrese un numero: '));
let number2 = parseInt(prompt('Ingrese otro numero: '));
let number3 = parseInt(prompt('Ingrese otro numero: '));
if(number1>number2 && number1>number3){
    document.write(`El mayor es ${number1}`);
}else{
    if(number2>number1 && number2>number3){
        document.write(`El mayor es ${number2}`);
    }else{
        if(number3>number1 && number3>number2){
            document.write(`El mayor es ${number3}`);
        }else{
            document.write(`Dos o Tres numeros son iguales`);
        }
    }
}