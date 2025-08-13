$(document).ready(function () {
    $(".owl-carousel").owlCarousel({

        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left text-primary bg-secondary-subtle"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {

            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
});



var cardContainer = document.getElementById('card-container')

// < div class="card" >
//     <div class="card-body">
//         <h3>Lorem ipsum dolor sit amet.</h3>
//         <button class="btn btn-primary">Read More</button>
//     </div>
//         </div >



var courses = ['Web design', 'Web develop', 'Network', 'Mobile']



courses.forEach((item , i ) => {

    var newDiv = document.createElement('div')
    newDiv.classList.add('card')

    var cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    var h3 = document.createElement('h3')
    h3.innerText = item
    var btn = document.createElement('button')
    btn.classList.add('btn', 'btn-primary')
    btn.innerText = "Read more"
    btn.addEventListener('click' , ()=>{
        console.log(`element = ${item} , index = ${i}`)
    })
    cardBody.appendChild(h3)
    cardBody.appendChild(btn)

    newDiv.appendChild(cardBody)

    cardContainer.appendChild(newDiv)

    console.log(newDiv)
    console.log(cardBody)
    console.log(h3)
    console.log(btn)
})


var users = [
    {name : 'Nouran' , email :'Email@email.com'},
    {name : 'Nouran' , email :'Email@email.com'},
    {name : 'Nouran' , email :'Email@email.com'},
]
