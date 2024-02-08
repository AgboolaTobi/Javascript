// 4.19 (Sales Commission Calculator) A large company pays its salespeople on a commission basis.
// The salespeople receive $200 per week plus 9% of their gross sales for that week. For example, a
// salesperson who sells $5,000 worth of merchandise in a week receives $200 plus 9% of $5,000, or
// a total of $650. You’ve been supplied with a list of the items sold by each salesperson. The values of
// these items are shown in Fig. 4.33. Develop a Java application that inputs one salesperson’s items
// sold for last week and calculates and displays that salesperson’s earnings. There’s no limit to the 
// number of items that can be sold

//Item  Value
// 1    239.99
// 2    129.75
// 3    99.95
// 4    350.89

let prompt = require("prompt-sync")();

const salesCommision = ()=>{
    let basePay = 200;
    let totalCommision = 0;
    let totalEarnings = basePay + totalCommision;
    let itemsSold = prompt("Enter the price of item sold: ");
    
    
    totalCommision += itemsSold * 0.09;
    totalEarnings = basePay + totalCommision;
    console.log(totalCommision);
    let response = prompt("Do you wish to enter more items ?")
    while(response != "no"){

        itemsSold = prompt("Enter the price of item sold: ");

        totalCommision+= itemsSold * 0.09;
        totalEarnings = basePay + totalCommision;
        console.log(totalCommision);
        console.log("The total earning is ", totalEarnings)
        response = prompt("Do you wish to enter more items ?")
        
}

return `The total earnings is $ ${totalEarnings}`
    
}

module.exports = {salesCommision};