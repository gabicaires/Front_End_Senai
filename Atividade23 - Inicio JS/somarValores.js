var readline = require('readline-sync')

var nome = readline.question("Qual seu nome: ")
var n1 = readline.questionFloat("Informe o primeiro numero: ")
var n2 = readline.questionFloat("Informe o segundo numero: ")

var soma = n1 + n2

console.log(`${nome} a soma dos valores informados é ${soma}`)