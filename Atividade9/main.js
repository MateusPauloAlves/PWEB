var matrizObj = new Array(3);
var somaIdades = 0;


document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const idade = document.getElementById('idade').value;
        const sexo = document.getElementById('sexo').value;
        const opiniao = document.querySelector('input[name="opiniao"]:checked').value;

        somaIdades += idade;

        var obj = {
            idade,
            sexo,
            opiniao
        }
        matrizObj.push(obj);

        if(matrizObj.length == 3){
            mostraTudo();
        }


        console.log(`Idade: ${idade}, Sexo: ${sexo}, Opinião: ${opiniao}`);
    });
});

function mediaIdade(numeroPessoasTotal, somaIdades) {
    return somaIdades/numeroPessoasTotal;
}

function maisVelha(pessoas) {
    maisVelho = pessoas[0].idade;
    for(i = 1; i < pessoas.lenght; i++){
        if(maisVelho < pessoas[i].idade){
            maisVelho = pessoas[i].idade;
        }
    }

    return maisVelho
}

function maisNova(pessoas) {
    maisNovo = pessoas[0].idade;
    for(i = 1; i < pessoas.lenght; i++){
        if(maisNovo > pessoas[i].idade){
            maisNovo = pessoas[i].idade;
        }
    }

    return maisNovo
}

function qtdePessima(pessoas) {
    qtdePessimo = 0
}

function mostraTudo(){
    alert("A média de idade é: " + mediaIdade(matrizObj.length, somaIdades) +
    "\nA pessoa mais velha é: " + mediaIdade(matrizObj) +
    "\nA pessoa mais nova é: " + mediaIdade(matrizObj))
}