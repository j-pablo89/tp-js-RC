/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

*/

let cadena = prompt('Ingrese una frase: ');

for(let i=0;i<cadena.length;i++){
    if(cadena.charAt(i) === 'a' || cadena.charAt(i) === 'e' || cadena.charAt(i) === 'i' 
    || cadena.charAt(i) === 'o' || cadena.charAt(i) === 'u'){
        document.write(cadena.charAt(i));
    }
}
