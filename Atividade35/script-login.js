var email = document.querySelector('#email')
var senha = document.querySelector('#senha')
var btnLogin = document.querySelector('#login')
var btnTemaDark = document.querySelector('#tema-dark')

if(localStorage.getItem('dark')){
    localStorage.removeItem('claro')
    window.document.body.classList.add('tema-dark')
}else if(localStorage.getItem('claro')){
    localStorage.removeItem('dark')
    window.document.body.classList.remove('tema-dark')

}

btnLogin.addEventListener('click', ()=>{
    let emailRecuperado = localStorage.getItem('email')
    let senhaRecuperada = localStorage.getItem('senha')

    if(email.value == emailRecuperado && senha.value == senhaRecuperada){
        alert("Login efetuado com sucesso!")
        location.href = 'index.html'
    }else{
        alert("Login ou senha invalidos!")
        email.style.border = "1px solid red"
        senha.style.border = "1px solid red"
    }
})

btnTemaDark.addEventListener('click', ()=>{
    window.document.body.classList.add('tema-dark')
    localStorage.setItem('dark', 'escuro')
})

btnTemaDark.addEventListener('dbclick', ()=>{
    window.document.body.classList.remove('tema-dark')
    localStorage.setItem('claro', 'tema-claro')
})