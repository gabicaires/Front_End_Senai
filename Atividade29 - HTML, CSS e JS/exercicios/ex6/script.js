var base = document.querySelector('#base')
var altura = document.querySelector('#altura')
var resultado = document.querySelector('#area')

function calcular(){
    let b = Number(base.value)
    let h = Number(altura.value)

    let area = (b * h) / 2

    resultado.value = area
}