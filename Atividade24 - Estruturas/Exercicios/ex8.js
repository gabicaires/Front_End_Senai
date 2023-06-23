var readline = require('readline-sync')

var nivel = readline.questionInt("Nivel: ")
var horas = readline.questionFloat("Horas de aula: ")
var salario = 0

if(nivel == 1){
    salario = horas * 12
}else if(nivel == 2){
    salario = horas * 17
}else if(nivel == 3){
    salario = horas * 25
}else{
    console.log(`Nivel não encontrado`)
}

console.log(`Horas trabalhadas: ${horas}`)
console.log(`Salario: $${salario}`)
