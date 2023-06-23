var readline = require('readline-sync')

var n1 = readline.questionInt("Informe o numero para iniciar a contagem: ")
var n2 = readline.questionInt("Informe o numero para finalizar a contagem: ")

for(var c = n1; c <= n2; c++){
    console.log(c)
}