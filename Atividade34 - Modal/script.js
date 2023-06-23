var fade = document.querySelector('#fade')
var modal = document.querySelector('#modal')
var abrirModal = document.querySelector('#abrir-modal')
var garantirVaga = document.querySelector('#garantir-vaga')

var ativaModal = [fade,abrirModal]

var toggleModal = ()=>{
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

ativaModal.map((el)=>{
    el.addEventListener('click', ()=>toggleModal())
})

garantirVaga.addEventListener('click',()=>{
    alert("Sua vaga foi garantida")
    toggleModal()
})