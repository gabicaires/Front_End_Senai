var readline = require('readline-sync')

var data = new Date()

var anoAtual = data.getFullYear()
var anoInformado = readline.questionInt("Ano de nascimento: ")

var idadeAtual = anoAtual - anoInformado

console.log(idadeAtual)