function verificarPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function main() {
    var numero = parseInt(prompt("Digite um número inteiro positivo:"));
  
    if (isNaN(numero) || numero <= 0) {
      alert("O valor digitado não é um número inteiro positivo!");
      return;
    }
  
    var resultado = verificarPrimo(numero);
  
    if (resultado) {
      alert("O número " + numero + " é primo!");
    } else {
      alert("O número " + numero + " não é primo!");
    }
  }
  