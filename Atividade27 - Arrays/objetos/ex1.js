const readline = require('readline-sync')

var siturcao = ""
var alunos = []

for (let i = 0; i <= 3; i++){
    var nome = readline.question("Nome: ")
    var n1 = readline.questionFloat("Nota 1: ")
    var n2 = readline.questionFloat("Nota 2: ")
    var media = (n1 + n2)/2

    if(media >= 7){
        siturcao = "Aprovado"
    }else if(media >=4 ){
        siturcao = "Recuperacao"
    }else{
        siturcao = "Reprovado"
    }

    alunos.push(`{nome: ${nome}, nota1: ${n1}, nota2: ${n2}, media: ${media}, situacao: ${siturcao}}`)
}

console.log(alunos)