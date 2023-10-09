document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');

    let totalIdade = 0;
    let idadeMaisNova = Infinity;
    let idadeMaisVelha = 0;
    let totalPessimo = 0;
    let totalOtimoBom = 0;
    let totalMulheres = 0;
    let totalHomens = 0;
    let totalPessoas = 0;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const idade = parseInt(document.getElementById('idade').value);
        const sexo = document.getElementById('sexo').value;
        const opiniao = parseInt(document.querySelector('input[name="opiniao"]:checked').value);

        totalIdade += idade;

        if (idade > idadeMaisVelha) {
            idadeMaisVelha = idade;
        }

        if (idade < idadeMaisNova) {
            idadeMaisNova = idade;
        }

        if (opiniao === 1) {
            totalPessimo++;
        } else if (opiniao === 4 || opiniao === 3) {
            totalOtimoBom++;
        }

        if (sexo === 'feminino') {
            totalMulheres++;
        } else {
            totalHomens++;
        }

        totalPessoas++;

        // Atualize os cálculos e exiba os resultados
    });

    function calcularMediaIdade() {
        return totalIdade / totalPessoas;
    }

    function getIdadeMaisNova() {
        return idadeMaisNova;
    }

    function getIdadeMaisVelha() {
        return idadeMaisVelha;
    }

    function getPessoasPessimo() {
        return totalPessimo;
    }

    function getPorcentagemOtimoBom() {
        return (totalOtimoBom / totalPessoas) * 100;
    }

    function getNumMulheres() {
        return totalMulheres;
    }

    function getNumHomens() {
        return totalHomens;
    }

    // Exemplo de como usar as funções:
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.clear();
        console.log(`Média da idade: ${calcularMediaIdade()}`);
        console.log(`Idade da pessoa mais nova: ${getIdadeMaisNova()}`);
        console.log(`Idade da pessoa mais velha: ${getIdadeMaisVelha()}`);
        console.log(`Quantidade de pessoas que responderam péssimo: ${getPessoasPessimo()}`);
        console.log(`Porcentagem de pessoas que responderam ótimo/bom: ${getPorcentagemOtimoBom()}%`);
        console.log(`Número de mulheres que responderam: ${getNumMulheres()}`);
        console.log(`Número de homens que responderam: ${getNumHomens()}`);
    });
});
