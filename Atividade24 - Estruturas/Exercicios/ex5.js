var readline = require('readline-sync')

var situacao = ""
var sexo = readline.question("Informe o sexo (m) Maculino e (f) Feminino: ")
var n1 = Number(readline.question("Nota 1: "))
var n2 = Number(readline.question("Nota 2: "))
var n3 = Number(readline.question("Nota 3: "))
var n4 = Number(readline.question("Nota 4: "))

var media = (n1 + n2 + n3 + n4)/4
if( sexo == "m"){
    if(media >= 6){
        situacao = (`Caro aluno, seu resultado é: Aprovado`)
    }else{
        situacao = (`Caro aluno, seu resultado é: Reprovado`)
    }
}else if( sexo == "f") {
    if(media >= 6 && sexo == "f"){
        situacao = (`Cara aluna, seu resultado é: Aprovada`)
    }else{
        situacao = (`Cara aluna, seu resultado é: Reprovada`)
    }
}else{
    console.log(`Inexistnte`)
}

console.log(`Media: ${media}`)
console.log(`Situação: ${situacao}`)