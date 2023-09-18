function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3) / 3;

    if (!isNaN(media)) {
        alert("A média de " + nome + " é: " + media.toFixed(2));
    } else {
        alert("Por favor, insira notas válidas.");
    }
}

