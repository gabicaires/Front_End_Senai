var nome1 = document.querySelector('#nome')

var nome2 = document.querySelector('#nomeInserido')

var numero1 = document.querySelector('#nota1')

var numero2 = document.querySelector('#nota2')

var numero3 = document.querySelector('#nota3')

var informeMedia = document.querySelector('#informeMedia')

var situacao = document.querySelector('#situacao')


function calcular(){
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    let n3 = Number(numero3.value)
    let name = nome1.value

    let media = (n1 + n2 + n3)/3

    nome2.value = name
    informeMedia.value = media.toFixed(1)
    
    calcularMedia(media)

}

function calcularMedia(media){

    if(media>=7){
        situacao.value = "Aprovado"
    }else if(media >=4){
        situacao.value = "Recuperação"
    }else{
        situacao.value = "Reprovado"
    }
}