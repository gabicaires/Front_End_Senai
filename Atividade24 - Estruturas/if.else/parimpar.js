var readline = require('readline-sync')

var n1 = readline.questionInt("Informe um numero: ")

if(n1 % 2 == 0){
    console.log(`O numero ${n1} é par`)
}else{
    console.log(`O numero ${n1} é impar`)
}