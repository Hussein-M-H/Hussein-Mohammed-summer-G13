let backToNav = document.getElementById("backtonav") 
let mainNav = document.getElementById("main-nav") 

window.addEventListener("scroll" , () => {
  if(window.scrollY > 200) {
    backToNav.classList.add("opacity-1")
    mainNav.classList.add("position-sticky")
  }
  else {
    backToNav.classList.remove("opacity-1")
    mainNav.classList.remove("position-sticky") 
  }
})
let CARDS = document.querySelectorAll('.card-2')
CARDS.forEach(ele => {
  ele.addEventListener('click', ()=> {
    let anchor = document.createElement("a")
    anchor.href="singleProduct.html"
    anchor.click()
  })
})

let CARDS2 = document.querySelectorAll('.card-3')
CARDS2.forEach(ele => {
  ele.addEventListener('click', ()=> {
    let anchor = document.createElement("a")
    anchor.href="singleProduct.html"
    anchor.click()
  })
})