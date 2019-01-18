/*
    Definir una función que determine si la cadena de texto
    que se le pasa como parámetro es un palíndromo,
    es decir, si se lee de la misma forma desde la izquierda
    y desde la derecha. Ejemplo de palíndromo complejo:
    "La ruta nos aporto otro paso natural".
*/
{
    function esPalidromo(frase){
        frase = frase.toLowerCase().replace(/ /g, "");
        return (frase == reverseString(frase));
    }

    // source -> https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
    function reverseString(str) {
        let newString = "";
        for (var i = str.length - 1; i >= 0; i--) { 
            newString += str[i];
        }
        return newString;
    }
    window.addEventListener("load", init);
    function init(){
        document.getElementById('mensaje').textContent = "La frase "+((esPalidromo(prompt("Introduce una frase:")) == true) ? "si":"no" )+ " es un palídromo";
    }
}