
// var firstName = "Zein"
// var lastName = "Tamer"
var user = {
    firstName : 'Nouran',
    lastName : "Fayez",
    fullName :function(){
        return `${this.firstName} ${this.lastName}`
    },
    // fullUserName  : ()=>{
    //     console.log(this)
    //       return `${this.firstName} ${this.lastName}`
    // }
    addressList : function(){
        return {
            officeAddress:'Nasr city',
            homeAddress :"October",
            fakeAddress : function(){
                return 'new cairo'
            }
        }
    }


}

// console.log(user.fullUserName())
// console.log(user.addressList())
// console.log(user.addressList().homeAddress)
// console.log(user.addressList().fakeAddress())




///////////// string methods 
var str = "    Lorem ipsum dolor sit amet consectetur Lorem elit. Architecto, illum.     "


// console.log(str.length)
// console.log(str.trim())

// console.log(str.replace('Lorem' , 'javascript'))
// console.log(str.replaceAll('Lorem' , 'javascript'))

var test = "Javascript js" 
// console.log(test[0])

for(var i = 0 ; i< test.length ; i++){
    // console.log(test[i])
}

// test.forEach(item=>{
//     console.log(item)
// })

// console.log(test.includes('js'))


var num = 10
// NaN ==> Not a Number

// console.log(isNaN(num))
// console.log(isNaN(test))

// var p =prompt('enter a number')
// console.log(Number(p))
// console.log(parseInt(p))
// console.log(parseFloat(p))



console.log(Math.random()*100)

var num = 3.9

console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))


console.log(Math.max(2, 5, 100 , 5, 200))
console.log(Math.min(2, 5, 100 , 5, 200))

