// Solución temporal
{

    function init(){
        pintarMenu();
    }

    function pintarMenu() {

        document.getElementById('menu').innerHTML = `
    <ul>
        <li><a href="https://rafasojo.github.io/DWEC/">Inicio</a></li>
        <li>
            <a href="tema2/index.html">Tema 2</a>
            <ul>
                <li><a href="tema2/ejercicio1/ejercicio.html">Ejercicio 1</a></li>
                <li><a href="tema2/ejercicio2/ejercicio.html">Ejercicio 2</a></li>
                <li><a href="tema2/ejercicio3/ejercicio.html">Ejercicio 3</a></li>
                <li><a href="tema2/ejercicio4/ejercicio.html">Ejercicio 4</a></li>
                <li><a href="tema2/ejercicio5/ejercicio.html">Ejercicio 5</a></li>
                <li><a href="tema2/ejercicio6/ejercicio.html">Ejercicio 6</a></li>
                <li><a href="tema2/ejercicio7/ejercicio.html">Ejercicio 7</a></li>
                <li><a href="tema2/ejercicio8/ejercicio.html">Ejercicio 8</a></li>
                <li><a href="tema2/ejercicio9/ejercicio.html">Ejercicio 9</a></li>
                <li><a href="tema2/ejercicio10/ejercicio.html">Ejercicio 10</a></li>
                <li><a href="tema2/ejercicio11/ejercicio.html">Ejercicio 11</a></li>
                <li><a href="tema2/ejercicio12/ejercicio.html">Ejercicio 12</a></li>
                <li><a href="tema2/ejercicio13/ejercicio.html">Ejercicio 13</a></li>
                <li><a href="tema2/ejercicio14/ejercicio.html">Ejercicio 14</a></li>
                <li><a href="tema2/ejercicio15/ejercicio.html">Ejercicio 15</a></li>
                <li><a href="tema2/ejercicio16/ejercicio.html">Ejercicio 16</a></li>
                <li><a href="tema2/ejercicio17/ejercicio.html">Ejercicio 17</a></li>
                <li><a href="tema2/ejercicio18/ejercicio.html">Ejercicio 18</a></li>
                <li><a href="tema2/ejercicio19/ejercicio.html">Ejercicio 19</a></li>
            </ul>
        </li>
        <li>
            <a href="tema3/index.html">Tema 3</a>
            <ul>
                <li><a href="tema3/calculadora/ejercicio.html">Calculadora GUI</a></li>
                <li><a href="tema3/calculadoraFuncional/ejercicio.html">Calculadora Funcional</a></li>
                <li><a href="tema3/comprobandodni/ejercicio.html">Comprobador DNI</a></li>
                <li>
                    <a href="#">Listado Arrays</a>
                    <ul>
                        <li><a href="tema3/listadoArrays/ejercicio1.html">Ejercicio 1</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio2.html">Ejercicio 2</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio3.html">Ejercicio 3</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio4.html">Ejercicio 4</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio5.html">Ejercicio 5</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio6.html">Ejercicio 6</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio7.html">Ejercicio 7</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio8.html">Ejercicio 8</a></li>
                        <li><a href="tema3/listadoArrays/ejercicio9.html">Ejercicio 9</a></li>
                    </ul>
                </li>
                <li>
                <a href="#">Listado Collections</a>
                <ul>
                    <li><a href="https://rafasojo.github.io/DWEC/tema3/listadoCollections/map.html">Map</a></li>
                    <li><a href="https://rafasojo.github.io/DWEC/tema3/listadoCollections/set.html">Set</a></li>
                    <li><a href="https://rafasojo.github.io/DWEC/tema3/listadoCollections/weakset.html">WeakSet</a></li>
                </ul>
            </li>
            </ul>
        </li>
    </ul>
                `;
    }

    window.addEventListener('load',pintarMenu);
}