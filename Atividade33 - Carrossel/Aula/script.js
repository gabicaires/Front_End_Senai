var img = document.querySelectorAll('#img img')
var imgs = document.querySelector('#img')

var carrossel2 = document.querySelector('#carrossel2')
var slides = document.querySelectorAll  ('.slide')
var left = document.querySelector('#esquerda')
var right = document.querySelector('#direita')


var slideAtual = 0
var slideAtual2 = 0
var qtdSlides = slides.length

left.addEventListener('click', ()=>{
    slideAtual2--
    if(slideAtual2 < 0){
        slideAtual2 = qtdSlides - 1
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

right.addEventListener('click',()=>{
    slideAtual2++

    if(slideAtual2 > qtdSlides - 1){
        slideAtual2 = 0
    }
    
    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

function carrossel(){
    slideAtual ++

    if(slideAtual > img.length - 1){
        slideAtual=0

        // imgs.style.transition = 'none'
    }

    imgs.style.transform = `translateX(${-slideAtual * img[0].offsetWidth}px)`
}

setInterval(carrossel, 2000)