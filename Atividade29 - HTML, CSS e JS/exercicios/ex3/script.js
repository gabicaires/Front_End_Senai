var numero1 = document.querySelector('#numero1')
var numero2 = document.querySelector('#numero2')
var numero3 = document.querySelector('#numero3')
var numero4 = document.querySelector('#numero4')
var resultado = document.querySelector('#resultado')

function exibir(){
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    let n3 = Number(numero3.value)
    let n4 = Number(numero4.value)

    let media = (n1 + n2 + n3 + n4)/4

    resultado.value = media
}