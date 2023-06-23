var readline = require('readline-sync')

var n1 = readline.questionInt("Informe um numero: ")


if(n1 > 0){
    if(n1 % 2 == 0){
        console.log(`O numero ${n1} é positivo e par`)
    }else{
        console.log(`O numero ${n1} é positivo e impar`)
    }
}else{
    if(n1 % 2 == 0){
        console.log(`O numero ${n1} é negativo e par`)
    }else{
        console.log(`O numero ${n1} é negativo e impar`)
    }
}