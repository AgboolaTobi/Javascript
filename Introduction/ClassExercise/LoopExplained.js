function loop(array){
    let result;
    for(const number of array){
        result = number
    }
    return number
}


let myArray = [1,2,3,4,5]

for(number in myArray)
console.log(number)

for(number of myArray)
console.log(number)


let user = {
    firstName: "Agboola",
    lastName: "Tobi",
    age: 22
}
// I can edit the value of the key
user.firstName = "Samuel" 
for(const key in user){
    console.log(user[key])
}



// For/of cannot be used for objects
// Your for/of can only be used