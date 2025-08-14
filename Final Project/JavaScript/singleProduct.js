let productImg = document.getElementById('productImg')

let posesButtons = document.querySelectorAll('.product-pose')

posesButtons.forEach(ele => {
  ele.addEventListener('click' , function() {
    posesButtons.forEach(ele => {ele.classList.remove('active')})
    this.classList.add('active')
    switch(this.id){
      case "B1" : productImg.src ="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-5.jpg"
      break
      case "B2" : productImg.src ="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-20-5.jpg"
      break
      case "B3" : productImg.src ="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-20-4.jpg"
      break
      case "B4" : productImg.src ="	https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-20-3.jpg"
      break
    };
  })
})

let plusButton  = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let numberInp   = document.getElementById("numberInpWithBtn");

console.log(numberInp)

plusButton.addEventListener('click',  () => numberInp.stepUp());
minusButton.addEventListener('click', () => numberInp.stepDown());


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl1 = $(".Owl").owlCarousel({
    items: 5,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true
});

$("#nextBtn").click(function() {
    owl1.trigger("next.owl.carousel");
});

$("#prevBtn").click(function() {
    owl1.trigger("prev.owl.carousel");
});