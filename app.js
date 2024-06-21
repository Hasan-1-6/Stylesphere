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

let womenList =[]
fetch('./shortwomen.json')
    .then(response => response.json())
    .then(data => {
        womenList = data
        addCardWomen()
    }
)

const container1 = document.querySelector('.container1')

const addCardWomen = () =>{
    container1.innerHTML = '';
    womenList.forEach(card =>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('gridcard')
        newDiv.innerHTML = `<img src="${card.img}">
            <h3>${card.name}</h3>
            <p>${card.company}</p>
            <p>$${card.price}</p>`
    container1.appendChild(newDiv)
    })
}

//////////


const container2 = document.querySelector('.container2')

let menList = []
fetch('./shortmen.json')
    .then(response => response.json())
    .then(data => {
        menList = data
        addCardMen()
    }
)

const addCardMen = () => {  
    container2.innerHTML = ''
    menList.forEach(card =>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('gridcard')
        newDiv.innerHTML = `<img src="${card.img}">
            <h3>${card.name}</h3>
            <p>${card.company}</p>
            <p>$${card.price}</p>`
    container2.appendChild(newDiv)
    })
}

