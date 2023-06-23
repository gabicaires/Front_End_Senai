var readline = require('readline-sync')


var saldo = 500

console.log(`O saldo atual é ${saldo}`)
var cheque = Number(readline.question("Informe o valor do cheque: "))
var novoSaldo = saldo + cheque

console.log(`O novo saldo é de ${novoSaldo}`)