var readline = require('readline-sync')

var fahrenheit = Number(readline.question("Informe a temperatura em Fahrenheit: "))
var celsius = (5 * (fahrenheit-32) / 9)

console.log(`${fahrenheit} em Celsius é ${celsius}`)