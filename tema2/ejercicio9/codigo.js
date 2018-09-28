/*
    Definir una función que muestre información sobre
    una cadena de texto que se le pasa como argumento.
    A partir de la cadena que se le pasa, la función
    determina si esa cadena está formada sólo por mayúsculas,
    sólo por minúsculas o por una mezcla de ambas.
*/

{
    function infoTexto(texto){
        let mensaje = "La cadena " + texto;
        if(texto.toUpperCase() == texto)
            return mensaje + " está formada sólo por mayúsculas.";
        else if(texto.toLowerCase() == texto)
            return mensaje + " está formado sólo por minúsculas.";
        else
            return mensaje + " está formado por mayúsculas y minúsculas."
    }
    alert(infoTexto(prompt("Introduce una cadena:")))
}