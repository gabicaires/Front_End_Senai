var anoNascimento = document.querySelector('#ano')
var idadePessoa = document.querySelector('#idade')

function calcular(){
    let ano = Number(anoNascimento.value)
    let idade = 2023 - ano

    idadePessoa.value = idade
}