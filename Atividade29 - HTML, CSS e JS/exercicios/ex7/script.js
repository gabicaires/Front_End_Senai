var nome = document.querySelector('#nome')
var idade = document.querySelector('#idade')
var salario = document.querySelector('#salario')
var textArea = document.querySelector('#dados')


function informar(){
    textArea.value = `O nome é ${nome.value}.\nA idade é ${idade.value}.\nE o salario é ${salario.value}`

}