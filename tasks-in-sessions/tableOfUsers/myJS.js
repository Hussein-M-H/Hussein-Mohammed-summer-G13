var users
if(localStorage.length() === 0)
 users = JSON.parse(localStorage.getItem('users')) 

var tableBody = document.getElementById("usersTable")

users.forEach((ele)=>{

  var tableRow = document.createElement("tr")
  var userName = document.createElement("td")
  userName.innerText = ele.name
  var userEmail = document.createElement("td")
  userEmail.innerText = ele.email
  tableRow.appendChild(userName)
  tableRow.appendChild(userEmail)
  
  tableBody.appendChild(tableRow)  
}
)