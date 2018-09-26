let numero = prompt("Introduce un número y se mostrará su factorial");
let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado *= i;
}
alert(resultado);