function arr(){

}
let newArray = function(){

}
// this works like lambda in python
const myArr = (x,y) =>{
    const sum = x + y;
    console.log(sum)
}

myArr(4,5)

// A function as an argument is also called a callback function

let birthYears = [2000,1972,1999,2001];
let currentYear = 2024;

const getResultArray = (anArray, funct)=>{

    const result = [];
    for(let element  of anArray){
        let value = funct(element)
        result.push(value);
    }
    return result;
}

const calculateAge = (element) =>{
    let age = currentYear - element;
    return age;
}


console.log(getResultArray(birthYears,calculateAge))


function questions(role){
    switch(role){
        case 'manager':
            return function(name){
                return `Hi ${name},what is the core value of the company ?`;
            };

        case 'native':
            return function(name){
                return `Hi ${name}, what is your favourite language ?`;
            };

        case 'elders':
            return function(name){
                return `Hi ${name}, do you love your job ?`;
            };

        default:
            return function(name){
            return `Hi ${name}, your selection is unavailable`;

            };
    }
}

let response = questions('sola');
// console.log(response)
console.log(response('John'));