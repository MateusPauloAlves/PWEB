function obterMaior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordenarNumeros(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
        return a - b;
    });
    return numeros;
}


const maiorNumero = obterMaior(10, 5, 8);
const numerosOrdenados = ordenarNumeros(30, 10, 20);

console.log(`O maior número é: ${maiorNumero}`);
console.log(`Os números em ordem crescente são: ${numerosOrdenados}`);
