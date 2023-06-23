var nome = document.querySelector("#nome")
var email = document.querySelector("#email")
var senha = document.querySelector("#senha")
var confirmarSenha = document.querySelector("#confirmar-senha")
var data = document.querySelector("#data")
var senhaInformada = document.querySelector("#senhaInf")

var validarSenha = ()=>{
    if(senha.value == confirmarSenha){
        senhaInformada.innerHTML = "Senhas conferem"
        senhaInformada.style.color = 'green'
        return true
    }else{
        senhaInformada.innerHTML ="senhas não conferem"
        senhaInformada.style.color = 'red'
        return false
    }
}

confirmarSenha.addEventListener('focusout', validarSenha())

function validarCadastro(){
    let data = new Date()
    let anoAtual = date.getFullYear()
    let anoNasc = Number(data.value.split('-',1))
    let idade = anoAtual - anoNasc;
    validarSenha()

    if(idade < 18){
        alert("Não pode acessa, menor de 18 anos")
        return false
    }else if(!validarSenha()){
        alert("Senhas nao conferem!")
    }else{
        alert("Cadastro efetuado com sucesso!")
        localStorage.setItem('email', email.value)
        localStorage.setItem('senha', senha.value)
        localStorage.setItem('nome', nome.value)
        location.href = 'login.html'
        return true
    }
}
