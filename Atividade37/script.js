var inputUsuario = document.querySelector('#nome-usuario')
var btnPesquisa = document.querySelector('#pesquisar')
var nome = document.querySelector('#nome')
var bio = document.querySelector('#bio')
var followers = document.querySelector('#followers')
var following = document.querySelector('#following')
var img = document.querySelector('#img')

btnPesquisa.addEventListener('click', async()=>{
    let url = `https://api.github.com/users/${inputUsuario.value}`

    let resposta = await fetch(url)
    let json = await resposta.json()

    console.log(json)

    if(json.message){
        alert('Usuario nao encontrado')
    }else{
        nome.innerHTML = `${json.name}`
        img.src = `${json.avatar_url}`
        bio.innerHTML = `Biografia: ${json.bio}`
        followers.innerHTML = `Followers: ${json.followers}`
        following.innerHTML = `Following: ${json.following}`
    }

})