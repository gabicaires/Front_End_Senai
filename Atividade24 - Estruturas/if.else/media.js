var readline = require('readline-sync')

var situacao = ""
var nome = readline.question("Nome: ")
var n1 = readline.questionFloat("Note 1: ")
var n2 = readline.questionFloat("Note 2: ")
var n3 = readline.questionFloat("Note 3: ")
var n4 = readline.questionFloat("Note 4: ")

var media = (n1 + n2 + n3 + n4)/4

if(media>= 7){
    situacao = "Aprovado"
}else if(media >= 4){
    situacao = "Recuperação"
}else{
    situacao = "Reprovado"
}

console.log(`Aluno: ${nome}`)
console.log(`Media: ${media}`)
console.log(`Situação: ${situacao}`)