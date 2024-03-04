
function calcularFatorial(numero) {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
var numero = parseInt(prompt("Digite um número natural:"));
var fatorial = calcularFatorial(numero);
document.write("O fatorial de " + numero + " é: " + fatorial);
  