var readline = require ('readline-sync')

var ano = Number(readline.question("Informe o ano que nasceu: "))
var idade = 2023 - ano

console.log(`A sua idade é ${idade} anos`)