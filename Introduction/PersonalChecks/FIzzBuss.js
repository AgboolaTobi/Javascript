// let numbers = Number in Range(0,100)

// for(number in numbers){
//     if(number % 3 == 0){
//         console.log("Fizz")
//     }
//     else if(number % 5 == 0 ){
//         console.log("Buzz");
//     }
//     else if(number % 3 == 0 && number % 5 == 0){
//         console.log("FizzBuzz")
//     }
// }

let myNumber = 100;
let number = 0;

for(number = 0; number < myNumber; number++){
    if(number % 3 === 0){
                console.log("Fizz")}

    if(number % 5 === 0 ){
                console.log("Buzz");
            }
    if (number / 3 === 0 & number / 5 === 0){
                console.log("FizzBuzz")
            }
}