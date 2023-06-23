var img = document.querySelectorAll('#img img')
var imgs = document.querySelector('#img')

function carrossel(){
    slideAtual ++

    if(slideAtual > img.length - 1){
        slideAtual=0

        // imgs.style.transition = 'none'
    }

    imgs.style.transform = `translateX(${-slideAtual * img[0].offsetWidth}px)`
}

setInterval(carrossel, 2000)