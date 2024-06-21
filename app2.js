const hamburger = document.querySelector('.hamburger')
const offscreen = document.querySelector('.offscreenitems')
hamburger.addEventListener('click', () =>{

    offscreen.classList.toggle('active')
})

function changeIcon(){
    let icon = document.getElementById('menuicon')
    if(icon.src.match('hamburger.png')){
        icon.src = 'close.png'
    }
    else{
        icon.src = 'hamburger.png'
    }
}
