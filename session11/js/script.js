

// var , let , const

var firstName = "Nouran"
var age = 31
var lastName = "Fayez"

var fullName = firstName + " " + lastName

// template string
var fullName = `${firstName}
 ${lastName}`

var age = "bvjb"

// console.log(fullName)
// console.log(age)

var isGraduated = true

// console.log(isGraduated)

var g

// console.log(g)

var a = null

// console.log(a)

var h = ""

// var p = prompt("enter your name")
// console.log(p)


// mathematical operations = (+ - / * ** % ++ --)


var a = 30
var b = 10

var sum = a + b
// console.log(sum)

// ++ increment 

var h = 10

// console.log(h++) // 10
// console.log(++h) // 12
// console.log(h) // 12

// -- decrement

// console.log(h--)
// console.log(--h)
// console.log(h)


var num = 5

num = num + 5

// console.log(num+=20)

// console.log(num/=3)


var k = 10
var n = "str"

var m = k / n
// console.log(m) // NaN ==> Not a Number



// comparison operations (< , <= , > , >= , == , === , != , !==) ==> return boolean
var num = 10
var num2 = 20
var num3 = 10

// console.log(num < num2)
// console.log(num <= num3)

var g = 10
var h = "10"

// console.log(g == h) // value
// console.log(g === h) // value , data type


// console.log(g != h) // value
// console.log(g !== h) // value , data type


// console.log(typeof(g))
// console.log(typeof h)

//  logical operator (&& || !)

var num = 20
var str = "text"
var firstName = "Marwa"

// console.log(num == 20)
// console.log(firstName == "Marwa")
// console.log(typeof str == 'string')

// console.log(num == 40 && firstName == "Marwa" && typeof str == "string")
// console.log(num == 40 || firstName == "Nouran" || typeof str == "string")

// console.log(typeof num )
// console.log(!(typeof num == 'number')) 
// console.log(!firstName == 'Marwa')


// var userName = prompt('enter your name');

// (userName == "Tamer") ? console.log('welcome tamer') : console.log('invalid user');


// truthy value / false value
var address = "nasr city"; // true
var address = "  "; // true
var address = 2000; // true

var address = 0; // false
var address = ""; // false
var address = null; // false
var address = -0; // false
var address // undefined ==>  false

// // (address) ? console.log('correct') : console.log('wrong')
// console.log(typeof address);
// console.log(address);
// (address || typeof address == 'string' || address == -0) ? console.log('correct') : console.log('wrong')



// IF CONDITION 

// if(condition/s) {
//     true ...
// }
// else {
//     false ...
// }


// var job = prompt('enter your job')

// if (job == null) {
//     console.log('please enter your job')
// }
// else {

//     if (job == 'developer' || job == 'dev' || job == "DEVELOPER") console.log('developer')
//     else if (job == 'engineer') console.log('engineer')
//     else console.log('invalid user')

// }



// > 90 ==> A
// 80 : 90 ==> B 
// 70 : 80 ==> C 
// <70 ==> F    




// switch case 

// variable 
// switch(variable){
//     case 1 : code 
//     case 2 : code 
//     case 3 : code 
//     case 4 : code 
//     case 5 : code 
//     default : code 
// }



// var fullName = prompt('enter your name')

// strict mode ==> equality (===)
// switch (fullName) {
//     case "Tamer":
//     case "tamer":
//         console.log('welcome tamer')
//         break
//     case "Nouran":
//         console.log('welcome nouran')
//         break
//     case "zein":
//         console.log('welcome zein')
//         break
//     case "100":
//         console.log('100')
//         break
//     default: console.log('invalid user')
// }



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// looping ==> for , while , do-while 

// for(variable ; condition ; increment/decrement){
//     code ..
// }

for (var i = 1; i <= 10; i++) {

    if (i == 5) console.log('num = 5')

    else if (i == 8) break

    else if (i == 3) continue
    else console.log(i)


}


