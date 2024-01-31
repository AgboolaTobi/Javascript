let array = [2,3,5,6,7,2,3]


let result = array.find((element)=> element > 4);
console.log(result)

// /the findIndex methods returns the index of the element that satisfies the condition...


let position = array.findIndex((element)=> element > 4);
console.log("The " ,position)