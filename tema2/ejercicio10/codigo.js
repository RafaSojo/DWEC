/*
    Definir una función que determine si la cadena de texto
    que se le pasa como parámetro es un palíndromo,
    es decir, si se lee de la misma forma desde la izquierda
    y desde la derecha. Ejemplo de palíndromo complejo:
    "La ruta nos aporto otro paso natural".
*/

function esPalidromo(frase){

    frase = eliminarCaracter(frase.toLowerCase(),' ');
    console.log(frase);
    fraseInvertida = reverseString(frase);
    console.log(fraseInvertida);

    return (frase == fraseInvertida);
}


function eliminarCaracter(frase, caracter){
    while(frase.indexOf(caracter) != -1)
        frase = frase.replace(caracter, '');
    return frase;
}


// source -> https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    // Step 3. Return the reversed string
    return newString; // "olleh"
}

alert(esPalidromo(prompt("Introduce una frase:")));
