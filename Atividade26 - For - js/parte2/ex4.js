const readline = require('readline-sync')

var intervalo1 = 0
var intervalo2 = 0
var intervalo3 = 0
var intervalo4 = 0
var numero = 1

do{
    numero = readline.questionInt("Numero: ")

    if(numero >= 0 && numero <= 25){
        intervalo1 ++
    }else if(numero >=26 && numero <= 50){
        intervalo2 ++
    }else if(numero >=51 && numero <= 75){
        intervalo3 ++
    }else if(numero >=76 && numero <= 100){
        intervalo4 ++
    }
}while(numero > 0)

console.log(`Numeros no intervalo de 0-25: ${intervalo1}`)
console.log(`Numeros no intervalo de 26-50: ${intervalo2}`)
console.log(`Numeros no intervalo de 51-75: ${intervalo3}`)
console.log(`Numeros no intervalo de 76-100: ${intervalo4}`)