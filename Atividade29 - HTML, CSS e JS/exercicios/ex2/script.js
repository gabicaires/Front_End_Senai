var numero1 = document.querySelector('#numero1')
var numero2 = document.querySelector('#numero2')
var resultado = document.querySelector('#resultado')

function calcular(){
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)

    let soma = n1 + n2

    resultado.value = soma
}