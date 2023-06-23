var readline = require('readline-sync')

var salario = 500
var bonus = 50
var produto = Number(readline.question("Informe quantos produtos foram vendidos: "))
var novoSalario = salario + (bonus * produto)

console.log(`O salario deste funcionario é ${novoSalario}`)