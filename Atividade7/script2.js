function realizarOperacoes() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var produto = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;

    var resultado = "Soma: " + soma + "<br>" +
                    "Subtração: " + subtracao + "<br>" +
                    "Produto: " + produto + "<br>" +
                    "Divisão: " + divisao + "<br>" +
                    "Resto: " + resto;

    document.getElementById("resultadoOperacoes").innerHTML = resultado;
}
