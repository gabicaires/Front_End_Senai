var fahrenheit = document.querySelector('#fahrenheit')
var celsius = document.querySelector('#celsius')

function calcular(){
    let f = Number(fahrenheit.value)
    let c = (5*(f-32)/9)

    celsius.value = c
}