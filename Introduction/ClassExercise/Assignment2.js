//#1



// #2
function evenNumber(array){
    const result = array.filter((element)=> element % 2 == 0)
    return result;
}
// #3
function usingForEach(array){
let result = [];
array.forEach((element) => {
    let newElement = element *2;
    result.push(newElement);
})

return result
}

function square(aray){
    const map1 = aray.map((element)=> element ** 2 )
    return map1
}

const question = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(evenNumber(question))

console.log(square(question))

console.log(usingForEach(question))