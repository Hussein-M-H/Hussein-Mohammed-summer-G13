const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $(".Owl").owlCarousel({
    items: 8,
    loop: true,
    dots: false,
    margin:15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    responsive: {
      0:{
        items:4
      }
      ,
      576: {
       items:5 
      }
      ,
      768: {
        items:6
      }
      ,
      992:{
        items:7
      }

    }
});

var owl1 = $(".firstOwl").owlCarousel({
    items: 5,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    responsive: {
      0:{
        items:2
      }
      ,
      576: {
       items:3 
      }
      ,
      768: {
        items:4
      }
      ,
      992:{
        items:5
      }

    }
});

$("#nextBtn").click(function() {
    owl1.trigger("next.owl.carousel");
});

$("#prevBtn").click(function() {
    owl1.trigger("prev.owl.carousel");
});

var owl2 = $(".secondOwl").owlCarousel({
    items: 5,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    responsive: {
      0:{
        items:2
      }
      ,
      576: {
       items:3 
      }
      ,
      768: {
        items:4
      }
      ,
      992:{
        items:5
      }

    }
});

$("#nextBtn2").click(function() {
    owl2.trigger("next.owl.carousel");
});

$("#prevBtn2").click(function() {
    owl2.trigger("prev.owl.carousel");
});


var owl3 = $(".thirdOwl").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    responsive: {
      0:{
        items:1
      }
      ,
      576: {
       items:2 
      }
      ,
      768: {
        items:3
      }

    }
});

$("#nextBtn3").click(function() {
    owl3.trigger("next.owl.carousel");
});

$("#prevBtn3").click(function() {
    owl3.trigger("prev.owl.carousel");
});

window.addEventListener("scroll" , () => {
  if(window.scrollY > 700)
  {
    let hours = document.getElementById("hours")
    let mins = document.getElementById("mins")
    let secs = document.getElementById("secs")


    const endTime = new Date("2025-08-18T15:00:00").getTime(); // in ms

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const remaining = endTime - now;

      if (remaining <= 0) {
        clearInterval(timer);
        console.log("Time's up!");
        return;
      }

      hours.innerText = Math.floor(remaining / (1000 * 60 * 60));
      mins.innerText = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      secs.innerText = Math.floor((remaining % (1000 * 60)) / 1000);

    }, 1000);
  }
}) 



