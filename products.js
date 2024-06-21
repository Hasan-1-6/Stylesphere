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
fetch('./women.json')
    .then(response => response.json())
    .then(data => {
        womenList = data
        addCardWomen()
        // addCardMen()
    }
)

const container1 = document.querySelector('.container1')

const addCardWomen = () =>{
    container1.innerHTML = '';
    womenList.forEach((card,key) =>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('gridcard')
        newDiv.innerHTML = `<img src="${card.img}">
            <h3>${card.name}</h3>
            <p>${card.company}</p>
            <p>$${card.price}</p>
            <button class="cartbutton" onclick="addToCart()">Add to Cart</button>`
    container1.appendChild(newDiv)
    })
}

//////////


const container2 = document.querySelector('.container2')

let menList = []
fetch('./men.json')
    .then(response => response.json())
    .then(data => {
        menList = data
        addCardMen()
    }
)

const addCardMen = () => {  
    container2.innerHTML = ''
    menList.forEach((card,key) =>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('gridcard')
        newDiv.innerHTML = `<img src="${card.img}">
            <h3>${card.name}</h3>
            <p>${card.company}</p>
            <p>$${card.price}</p>
            <button class="cartbutton" id = "cartclick" onclick="addToCart()">Add to Cart</button>`
    container2.appendChild(newDiv)
    })
}
const button1 = document.getElementById("cartclick")


    addToCart = () => {
    button1.style.color = "lawngreen"
    button1.innerHTML = "Item Added to Cart"
}

// button.addEventListener('click', () =>{
//     button.style.innerHTML = 'Item Purchased'
//     button.style.color = "lawngreen";
// })













    


let products = 
[
        {
            "img" : "pics/woman1.jfif",
            "name" : "Shrug",
            "company" : "sadar",
            "price" : "69.00"
        },
        {
            "img" : "pics/woman2.jfif",
            "name" : "Gown",
            "company" : "Lopa",
            "price" : "77.34"
        },
        {
            "img" : "pics/woman3.jfif",
            "name" : "Middi",
            "company" : "GoYo",
            "price" : "22.00"
        },
        {
            "img" : "pics/woman4.jfif",
            "name" : "Co-ord",
            "company" : "Kemo",
            "price" : "41.50"
        },
        {
            "img" : "pics/woman5.jfif",
            "name" : "Lehanga",
            "company" : "Manyavar",
            "price" : "120.00"
        },
        {
            "img" : "pics/woman6.jfif",
            "name" : "Kurti Set",
            "company" : "Mukka",
            "price" : "18.00"
        },
        {
            "img" : "pics/woman7.jfif",
            "name" : "Middi",
            "company" : "GoYo",
            "price" : "54.99"
        },
        {
            "img" : "pics/woman8.jfif",
            "name" : "Mini",
            "company" : "GoYo",
            "price" : "54.99"
        },
        {
            "img" : "pics/woman9.jfif",
            "name" : "Middi",
            "company" : "GoYo",
            "price" : "54.99"
        },
        {
            "img" : "pics/men1.jfif",
            "name" : "Sneakers",
            "company" : "Campa",
            "price" : "54.99"
        },
        {
            "img" : "pics/men2.jfif",
            "name" : "Pants",
            "company" : "Raymond",
            "price" : "76.29"
        },
        {
            "img" : "pics/men3.jfif",
            "name" : "Co-ord",
            "company" : "Kemo",
            "price" : "67.99"
        },
        {
            "img" : "pics/men4.jfif",
            "name" : "Sherwani",
            "company" : "Manyavar",
            "price" : "150.45"
        },
        {
            "img" : "pics/men5.jfif",
            "name" : "Sherwani",
            "company" : "Manyavar",
            "price" : "207.00"
        },
        {
            "img" : "pics/men6.jfif",
            "name" : "Sadri",
            "company" : "Manyavar",
            "price" : "127.33"
        },
        {
            "img" : "pics/men7.jfif",
            "name" : "Lungi",
            "company" : "Mukka",
            "price" : "25.99"
        },
        {
            "img" : "pics/men8.jfif",
            "name" : "Shrug",
            "company" : "Manyavar",
            "price" : "45.79"
        },
        {
            "img" : "pics/men9.jfif",
            "name" : "Formals",
            "company" : "Raymond",
            "price" : "72.99"
        }  
    
]


