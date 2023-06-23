const readline = require('readline-sync')

var alunos = []
var maiorMedia = 0
var alunoMaiorMedia = ""

for (let i = 0; i < 10 ; i++){
    var nome = readline.question("Nome: ")
    var n1 = readline.questionFloat("Nota 1: ")
    var n2 = readline.questionFloat("Nota 2: ")
    var media = (n1 + n2)/2

    if(maiorMedia < media){
        maiorMedia = media
        alunoMaiorMedia = nome
    }else{}

    alunos.push({nome: nome, nota1: n1, nota2: n2, media: media}) 
}

console.log(alunos)

console.log(`O aluno ${alunoMaiorMedia} teve a maior media que é ${maiorMedia}`)

