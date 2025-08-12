var img =document.images[0]
console.log(document)
img.width="300";
img.height="300"

function toggleImg( ){
  if(img.src.includes("2-1"))
    img.src="img2-4.png"
  else 
    img.src="img2-1.png"
} 

var items = document.getElementsByTagName("li")

var lastactivated = -1

console.log(items)

function activate(Ind) {
  items[Ind].classList.toggle("text-primary")
  if(lastactivated != -1)
  {
    items[lastactivated].classList.toggle("text-primary")
  }
  lastactivated = Ind
}

var id
var age
var balance

var users = []

var formLogin = document.getElementById('login')

function addUser() {
  var userName = document.getElementById('nameInput').value
  var userEmail = prompt("Enter the age")
  if(( userId != "" && userId != null )&&( userAge != "" && userAge != null )&& ( userBalance != "" && userBalance != null ))
    users.push({
      id: userId,
      age: userAge,
      balance: userBalance
    })
  else
    alert("please enter all user information")
}

formLogin.addEventListener('submit', addUser())