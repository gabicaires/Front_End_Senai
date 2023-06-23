var readline = require('readline-sync')

var nome = readline.question("Informe seu nome: ")
var idade = Number(readline.question("Informe a sua idade: "))
var salario = Number(readline.question("Informe seu salario: "))

console.log(`Nome: ${nome}\nIdade: ${idade}\nSalario: ${salario.toFixed(3)}`)