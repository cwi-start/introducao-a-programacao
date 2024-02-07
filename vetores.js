/*
exemplo 01
[] Leitura de dados
[] Declaração de vetor
[] Declaração de função
[] Declaração de `Function Expression`
[] Declaração de `Arrow Function`
[] Saida de dados
[] Generator Functions
*/
const prompt = require('prompt-sync')();

function ordenarDescrescente(numeros) {
    for (i = 0; i < numeros.length; i++) {
        for (j = 0; j < numeros.length; j++) {
            if (numeros[i] > numeros[j]) {
                const temp = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = temp
            }
        }
    }
    return numeros
}

const lerNumeros = (itens) => {
    const numeros = []

    for (i = 0; i < itens; i++) {
        const numero = prompt('Digite um número inteiro: ');
        numeros.push(numero);
    }
    return numeros;
}

const escreverNumeros = function (numeros) {
    console.log("Voce digitou: ")
    for (i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

function* gerarNumeros(itens) {
    for (let i = 0; i < itens; i++) {
        yield prompt('Digite um número inteiro: ');
    }
}

//const numeros = lerNumeros(10)
const numeros = Array.from(gerarNumeros(10));
const numerosOrdenados = ordenarDescrescente(numeros);
escreverNumeros(numerosOrdenados)




