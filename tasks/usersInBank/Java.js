var id
var age
var balance

var users = []

function addUser() {
  var userId = prompt("Enter the id")
  var userAge = prompt("Enter the age")
  var userBalance =prompt("Enter the balance")
  if(( userId != "" && userId != null )&&( userAge != "" && userAge != null )&& ( userBalance != "" && userBalance != null ))
    users.push({
      id: userId,
      age: userAge,
      balance: userBalance
    })
  else
    alert("please enter all user information")
} 

function editUserBalanceById() {
  var userId = prompt("enter the id of the user you want to edit his balance")
  if(userId != "" && userId != null)
  {
    var ind = users.findIndex(ele => ele.id==userId)
    if(ind != -1) {  
      var newBalance = prompt("enter the new balance")
      if(newBalance || newBalance == 0)
        users[ind].balance = newBalance
      else
        alert("You did not enter the new balance properly")
    }
    else
      alert("there is no such a user with this id")
  }
  else 
    alert("you did not enter the id properly")
}


function deleteUserById() {
  var userId = prompt("enter the id of the user you want to delete")
  if(userId != "" && userId != null) {
    var ind = users.findIndex(ele => ele.id==userId)
    if(ind != -1)
      users.splice(ind, 1)
    else
      alert("there is no such a user with this id")
  }
  else 
    alert("you did not enter the id properly")
}

addUser()

addUser()

addUser()

addUser()

users.forEach(ele=>
  {
    console.log(ele)
  }
)

editUserBalanceById()

users.forEach(ele=>
  {
    console.log(ele)
  }
)

editUserBalanceById()

users.forEach(ele=>
  {
    console.log(ele)
  }
)

deleteUserById()

users.forEach(ele=>
  {
    console.log(ele)
  }
)

deleteUserById()

users.forEach(ele=>
  {
    console.log(ele)
  }
)