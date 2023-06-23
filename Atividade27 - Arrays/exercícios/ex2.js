const readline = require('readline-sync')

var n = []
var qtdN = 0
var qtdPo = 0
var qtdPa = 0
var qtdI = 0

for(let i = 0; i < 5; i++){
    var numero = n.push(readline.questionInt(`Numero: `)) 
}

for (let i = 0; i < n.length; i++){

    if(n[i] % 2 == 0){
        qtdPa++
    }else {
        qtdI++
    }

    if(n[i] > 0){
        qtdPo++
    }else{
       qtdN++
    }

}

console.log(`Quantidade de Positivos: ${qtdPo}`)
console.log(`Quantidade de Negativos: ${qtdN}`)
console.log(`Quantidade de Pares: ${qtdPa}`)
console.log(`Quantidade de Imapres: ${qtdI}`)