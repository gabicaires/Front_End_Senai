var readline = require('readline-sync')

var n1 = Number(readline.question("Informe um numero: "))
var n2 = Number(readline.question("Informe outro numero: "))
var soma = n1 + n2

console.log(`A soma de ${n1} e ${n2} é ${soma}`)