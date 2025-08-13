// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({

//         loop: true,
//         nav: true,
//         navText: ['<i class="fa-solid fa-angle-left text-primary bg-secondary-subtle"></i>', '<i class="fa-solid fa-angle-right"></i>'],
//         responsive: {
//             // breakpoint from 0 up
//             0: {
//                 items: 1
//             },
//             // breakpoint from 480 up
//             480: {

//             },
//             // breakpoint from 768 up
//             768: {
//                 items: 4
//             },
//             1200: {
//                 items: 5
//             }
//         }
//     });
// });



// var cardContainer = document.getElementById('card-container')

// < div class="card" >
//     <div class="card-body">
//         <h3>Lorem ipsum dolor sit amet.</h3>
//         <button class="btn btn-primary">Read More</button>
//     </div>
//         </div >



// var courses = ['Web design', 'Web develop', 'Network', 'Mobile']



// courses.forEach((item , i ) => {

//     var newDiv = document.createElement('div')
//     newDiv.classList.add('card')

//     var cardBody = document.createElement('div')
//     cardBody.classList.add('card-body')

//     var h3 = document.createElement('h3')
//     h3.innerText = item
//     var btn = document.createElement('button')
//     btn.classList.add('btn', 'btn-primary')
//     btn.innerText = "Read more"
//     btn.addEventListener('click' , ()=>{
//         console.log(`element = ${item} , index = ${i}`)
//     })
//     cardBody.appendChild(h3)
//     cardBody.appendChild(btn)

//     newDiv.appendChild(cardBody)

//     cardContainer.appendChild(newDiv)

//     console.log(newDiv)
//     console.log(cardBody)
//     console.log(h3)
//     console.log(btn)
// })


// var users = [
//     {name : 'Nouran' , email :'Email@email.com'},
//     {name : 'Nouran' , email :'Email@email.com'},
//     {name : 'Nouran' , email :'Email@email.com'},
// ]



var h2 = document.getElementById('counter')
var i = 0
var setTime = setTimeout(()=>{
    // console.log('js')
} , 3000)


var set = setInterval(()=>{
    h2.innerText = i
    if(i == 100) clearInterval(set)
    i+=10
 } , 200)

 console.log(setTime)
 console.log(set)


 var scrollDiv = document.getElementById('scroll-div')

 scrollDiv.addEventListener('scroll' , (e)=>{
    console.log(e.target.scrollTop)
    if(e.target.scrollTop > 200) scrollDiv.classList.add('text-primary')
 })


// Bom ==> browser object model
 window.addEventListener('scroll' , ()=>{
     var body = document.body
    if(document.documentElement.scrollTop > 200) {
        body.classList.add('bg-secondary-subtle')

    }
    else  body.classList.remove('bg-secondary-subtle')
 })


 //// var let const 

 console.log(firstName)
 var firstName = "Nouran"
 var firstName = "Marwa"
 firstName = 30
//  console.log(lastName)
//  let lastName = "Fayez"
//  let lastName = "Mohamed"
//  lastName = 30


//  console.log(fullName)
 const fullName = "Tamer Fayez"
//  fullName = 30
 console.log(fullName)
 
// var ==> global(window) & function scope
// let const ==> block scope
let r = 40
function getName(){
    var x = 20
    let y = 30

    if(true){
        var num = 100
        let num2 = 200
        num2 = "string"
        console.log(x)
        console.log(y)

    }
    console.log(num)
    // console.log(num2)
}

getName()

// console.log(num)



// localStorage.setItem('Address' , 'Nasr city')


var users = [
    {name : 'Nouran' , email :'Email@email.com'},
    {name : 'Nouran' , email :'Email@email.com'},
    {name : 'Nouran' , email :'Email@email.com'},
]

// localStorage.setItem('usersList' , JSON.stringify(users) )

// console.log(JSON.stringify(users))


// let usersLocalStorage = JSON.parse(localStorage.getItem('usersList'))
// console.log(usersLocalStorage)

// usersLocalStorage.push({name:'Ahmed' , email:'ahmed@email.com'})

// // localStorage.setItem('usersList' , usersLocalStorage)

// localStorage.removeItem('Address')



// sessionStorage.setItem('firstName' , "Tamer")


