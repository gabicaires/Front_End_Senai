var readline = require('readline-sync')

var sexo = readline.question("Informe o sexo (m) Maculino e (f) Feminino: ")

if(sexo == "m"){
    console.log(`Sexo Valido`)
}else if(sexo == "f"){
    console.log(`Sexo Valido`)
}else{
    console.log(`Sexo Invalido`)
}