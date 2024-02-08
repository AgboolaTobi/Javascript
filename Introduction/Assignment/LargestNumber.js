let prompt = require("prompt-sync")();

const largestNumber = () =>{
    let largestNumber = Number (prompt("Enter number: "));

    for(let number = 0; number < 10; number++){
        let secondNumber = Number(prompt("Enter number: "));
        if(secondNumber > largestNumber) largestNumber = secondNumber;
    }

    return `Largest number = ${largestNumber}`;
}

console.log(largestNumber);