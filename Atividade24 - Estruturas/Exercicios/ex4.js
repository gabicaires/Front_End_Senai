var readline = require('readline-sync')

var situacao = ""
var n1 = Number(readline.question("Nota 1: "))
var n2 = Number(readline.question("Nota 2: "))
var n3 = Number(readline.question("Nota 3: "))
var n4 = Number(readline.question("Nota 4: "))

var media = (n1 + n2 + n3 + n4)/4

if(media >= 6){
    situacao = ("Aprovado")
}else{
    situacao = ("Reprovado")
}

console.log(`Media: ${media}`)
console.log(`Situação: ${situacao}`)