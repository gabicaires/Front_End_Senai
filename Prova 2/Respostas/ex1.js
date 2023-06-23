var readline = require('readline-sync')

var nome = readline.question("Nome: ")
var n1 = Number(readline.questionFloat("Nota1: "))
var n2 = Number(readline.questionFloat("Nota2: "))
var n3 = Number(readline.questionFloat("Nota3: "))
var n4 = Number(readline.questionFloat("Nota4: "))
var situacao = ""

var media = (n1 + n2 + n3 + n4) / 4

    if(media >= 6){
        situacao = (`Aprovado`)
    }else if(media >= 4 && media < 6){
        situacao = (`Recuperação`)
    }else{
        situacao = (`Reprovado`)
    }
    
console.clear()

console.log(`Aluno: ${nome}\nMedia: ${media.toFixed(1)}\nSituação: ${situacao}`)