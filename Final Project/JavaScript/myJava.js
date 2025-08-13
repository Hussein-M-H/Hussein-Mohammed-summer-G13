const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      items: 5,
      loop: true,
      nav: true,
      navText: ['<i class="fa-solid text-primary fa-chevron-right arrow right"></i>', '<i class="fa-solid fa-chevron-left text-primary arrow left"></i>']
    }
  );
});

// const exampleEl = document.getElementById('example')
// const popover = new bootstrap.Popover(exampleEl, options)

// function numbers (start, end, breaknum, skip) {
//   if(start==undefined || end==undefined || breaknum==undefined || skip==undefined)
//     alert("please enter all numbers")
//   else  
//     for(var i = start ; i <= end; i++)
//     {
//       if(i==breaknum)
//         break
//       else if (i==skip)
//         continue
//       console.log(i)
//     }
// }

// var start = prompt("enter start:")
// var end = prompt("enter end:")
// var breaknum = prompt("enter break:")
// var skip = prompt("enter skip:")

// numbers(start,end,breaknum)


// var courses = ["html", "css", "java", "javascript"]
// courses.forEach((ele)=>{
// console.log(ele)
// }
// )
// var courseToDelete =prompt("enter the course You want to delete")
// var courseToDeleteIndex = courses.findIndex(ele => ele==courseToDelete)
// if(courseToDeleteIndex!=-1)
//   courses.splice(courseToDeleteIndex , 1)
// else
//   courses.push(courseToDelete)
// courses.forEach((ele)=>{
// console.log(ele)
// }
// )
