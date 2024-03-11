function addVal() {
    var valor = document.getElementById("valor").value;
    if (valor.trim() !== "") {
        valores.push(valor);
        valores.sort();
        exibicao();
    }
    document.getElementById("valor").value = "";
}

function exibicao() {
    var lista = "<ol>";
    for (var i = 0; i < valores.length; i++) {
        lista += "<li>" + valores[i] + "</li>";
    }
    lista += "</ol>";
    document.getElementById("val-lista").innerHTML = lista;
}
var valores = [];