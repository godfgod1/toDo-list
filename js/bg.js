const images = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
const BgButton = document.querySelector('.BgButton')
const body = document.querySelector('body')

function changeBackground(){
    const chosenImg = images[Math.floor(Math.random()*images.length)]
body.style.backgroundImage = `url(img/${chosenImg})`
}

changeBackground()
setTimeout(function(){
    changeBackground()
    },1000 * 60 * 5);

BgButton.onclick = changeBackground



            // window.setTimeout('window.location.reload()',10000)
