var readline = require('readline-sync')

var n1 = readline.questionInt("Informe um numero: ")

var resultado = n1 % 2 == 0 ? "par" : "impar" //? seria o if e o : seria o else. Isso se aplica apenas a um caso simples de if else

console.log(`O numero é ${resultado}`)
