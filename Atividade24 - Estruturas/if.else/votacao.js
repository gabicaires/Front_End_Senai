var readline = require('readline-sync')

var data = new Date()

var anoAtual = data.getFullYear()

var anoInformado = readline.questionInt("Ano de nascimento: ")

var idadeAtual = anoAtual - anoInformado

console.log(`Idade atual: ${idadeAtual}`)

if(idadeAtual < 16){
    console.log(`Não pode votar`)
}else if(idadeAtual >= 16 && idadeAtual < 18){
    console.log(`O voto é opcional`)
}else if(idadeAtual >= 18 && idadeAtual <= 70){
    console.log(`O voto é obrigatorio`)
}else {
    console.log(`O voto é opcional`)
}