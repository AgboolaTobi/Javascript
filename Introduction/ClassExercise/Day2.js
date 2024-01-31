// function user(name,age){
//     return (name,age)
// }

// let userOne = new user("chinedu", 20)
// let userTwo = new user("Ada", 13)

// console.log(userOne)
// console.log(userTwo)


let user = {
    firstName:"Agboola",
    lastName:"Tobi Samuel",
    age: 35,
}


let age = 24

if (age > 16){
    console.log(true)
}else{
    console.log(false)
}

let output = (age > 16) ? console.log:console.log(false)

let key = `firstName`
console.log(user[`firstName`])
console.log(user[`${key}`])

let cohortNumber = 18;

console.log(user.age)
console.log(user['lastName'])
console.log(`This is cohort ${cohortNumber}`)