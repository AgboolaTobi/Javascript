const prompt = require("prompt-sync")();

// const firstName = prompt("What is your first name ?");

// console.log(firstName);

const sum = (first,second)=>{
    let answer = first + second;
    return answer
}

const multiply = (first,second)=>{
    let result = first * second;
    return result;
}

const factorial = (number)=>{
    let result = (number - 1) * number;
    return result
}

const multiplyElementsByNumber = (array,givenNumber)=>{
    let result = [];
    for (const element of array) {
        let product = element * givenNumber;
        result.push(product);
    }
    return result;
    
 
}

const square = (number)=>{
    let result = number * number;
    return result;
}

module.exports = {sum,multiply,factorial, multiplyElementsByNumber,square}