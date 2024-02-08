// 4.20 (Tax Calculator) Develop a Java application that determines the total tax for each of three
// citizens. The tax rate is 15% for earnings up to 30,000 USD earned by each citizen and 20% for all
// earnings in excess of that ceiling. You are given a list with the citizens’ names and their earnings in
// a given year. Your program should input this information for each citizen, 
// then determine and display the citizen’s total tax. 
// Use class Scanner to input the data.


let prompt = require("prompt-sync")();

const taxCalculator = ()=>{

let name = prompt("Enter citizen's name: ");
let earning = prompt("Enter citizen's earning: ");
let taxRate = 0.15 * earning;
if(earning > 0 && earning <= 30000){
    taxRate = 0.15 * earning;
}
else if(earning > 30000){
        taxRate = (30000 * .015) + (earning - 30000) * .20;
}

return console.log(`The total tax for ${name} is $ ${taxRate }`)
}


module.exports = {taxCalculator};