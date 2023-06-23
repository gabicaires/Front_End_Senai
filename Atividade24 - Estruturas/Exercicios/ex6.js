var readline = require('readline-sync')

var sexo = readline.question("Informe o sexo (m) Maculino e (f) Feminino: ")
var altura = readline.questionFloat("Informe sua altura: ")

var pesoF = (62.1 * altura) - 44.7
var pesoM = (72.7 * altura) - 58

if(sexo == "m"){
    console.log(`O seu peso é ${pesoM}`)
}else if(sexo == "f"){
    console.log(`O seu peso é ${pesoF}`)
}else{
    console.log(`Inexistente`)
}
