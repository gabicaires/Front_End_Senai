var txtNum1 = document.querySelector('#numero1')

var txtNum2 = document.querySelector('#numero2')

var resultado = document.querySelector('#resultado')

var operacao = decument.getElementsByName('operacao')


function calcular(){
    let n1 = Number(txtNum1.value)
    let n2 = Number(txtNum2.value)
    let resultadoOperacao = 0;

    if(txtNum1.value == "" || txtNum2.value == ""){
        alert("Insira um valor para ser calculado")
        txtNum2.value
    }else{
        if(operacao[0].checked){
            resultadoOperacao = n1 + n2
        }else if(operacao[1].checked){
            resultadoOperacao = n1 - n2
        }else if(operacao[2].checked){
            resultadoOperacao = n1 * n2
        }else{
            resultadoOperacao = n1 / n2
        }
    }
   

    resultado.value = resultadoOperacao
}