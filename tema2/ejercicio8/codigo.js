/*
    Escribir el código de una función a la que
    se pasa como parámetro un número entero y
    devuelve como resultado una cadena de texto
    que indica si el número es par o impar.
    Mostrar por pantalla el resultado devuelto por la función.
*/

function parOImpar(numero){
    return (numero % 2 == 0) ? "par" : "impar";
}

alert(parOImpar(prompt("Introduce un número")))