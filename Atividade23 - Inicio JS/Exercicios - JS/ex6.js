var readline = require('readline-sync')

var base = Number(readline.question("Informe a bese do triangulo: "))
var altura = Number(readline.question("Informe a altura do triangulo: "))

var area = base * altura / 2

console.log(`A area desse triangulo é ${area}`)