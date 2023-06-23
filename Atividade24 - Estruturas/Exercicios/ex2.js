var readline = require('readline-sync')

var n1 = readline.questionInt("Informe um numero: ")
var n2 = readline.questionInt("Informe outro numero: ")

if(n1 > n2){
    console.log(`${n1} é maior que ${n2}`)
}else{
    console.log(`${n2} é maior que ${n1}`)
}