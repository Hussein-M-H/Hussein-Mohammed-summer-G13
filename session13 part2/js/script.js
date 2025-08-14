// -- Dom ==> document object model 

// var h1Tags = document.getElementsByTagName("h1")

// console.log(h1Tags[0].innerText)
// h1Tags[0].innerText = "Html"

// // h1Tags.forEach((element , i) => {
// //     element.innerText = `h1 element index = ${i}`
// // });


// for(var i = 0 ; i< h1Tags.length ; i++){
//     h1Tags[i].innerText = `h1 element index = ${i}`
// }


// console.log(h1Tags)
// var h1Element = document.getElementById('h1-element')

// console.log(h1Element.innerText)

// var h1Class = document.getElementsByClassName('h1-class')

// console.log(h1Class)

// var element = document.querySelector('.h1-class')


// var elements = document.querySelectorAll('div p span')
// console.log(elements)

// for(var i = 0 ; i < elements.length ; i++){
//     elements[i].classList.add('text-danger')
// }

// var h2 = document.querySelector('#h2-id')

// h2.classList.remove('w-75')
// h2.classList.toggle('border')
// h2.classList.toggle('border-4')
// h2.classList.toggle('border-primary')


// h2.style.backgroundColor = "#CCCCCC";

// h2.title = "Description"

var img = document.getElementById('card-img')

img.width = "400"
img.alt = "natural image"

console.log(img.src)


function changeImg() {
    // if(img.src.includes('1.jpg')) img.src = "images/2.jpg"
    // else img.src= "images/1.jpg"
    (img.src.endsWith('1.jpg')) ? img.src = "images/2.jpg" : img.src = "images/1.jpg"

}

function handleMouseEnter(element) {
    console.log(element)
    element.classList.add('bg-secondary-subtle')
}

function handleMouseLeave(element) {
    element.classList.remove('bg-secondary-subtle')
}

function handleMouseMoving(element, type) {
    // console.log(element.className.includes('bg-secondary-subtle'))
    (type == 'mouseenter') ? element.classList.add('bg-secondary-subtle') : element.classList.remove('bg-secondary-subtle')
}

var inputElement = document.querySelector("#userName")
var h3 = document.getElementById('h3-element')
inputElement.addEventListener('input', () => {
    // console.log('typing')
    console.log(inputElement.value)
    h3.innerText = inputElement.value
})


var loginForm = document.getElementById('loginForm')

var users = []

var addUser = (name , email) => {
    var user = {
        name : name ,
         email
    }
    users.push(user)
    // users.push({name , email})
    console.table(users)
    console.log(users)
    
}
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitting')
    console.log(e)
    console.log(e.target.elements.userEmail.value)
    console.log(e.target.elements.userName.value)
    addUser(e.target.elements.userName.value , e.target.elements.userEmail.value)
})

