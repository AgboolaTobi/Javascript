// 4.18 (Credit Limit Calculator) Develop a Java application that determines whether any of several department-store customers has exceeded the credit limit on a charge account. For each customer, the following facts are available:
// a) account number 
// b) balance at the beginning of the month
// c) total of all items charged by the customer this month
// d) total of all credits applied to the customer’s account this month
// e) allowed credit limit.

// The program should input all these facts as integers,
//  calculate the new balance (= beginning balance + charges – credits),
//   display the new balance and determine whether the new balance exceeds the customer’s credit limit. 
//   For those customers whose credit limit is exceeded,
//   the program should dis-play the message  "Creditlimitexceeded".


let prompt = require("prompt-sync")();

const creditLimit = ()=>{
    let accountNumber = prompt("Enter your account number: ");

    console.log(accountNumber);

    let balance = prompt("Enter your balance at the beginning of the month: ");

    console.log(balance);

    let charge = prompt("Enter the total of items charged for the month: ");

    console.log(charge);

    let credit = prompt("Enter the total credit applied this month: ");

    console.log(credit);

    let allowedCreditLimit = prompt("Enter the allowed credit limit: ");

    console.log(allowedCreditLimit);

    let newBalance = (balance + charge - credit);

    console.log(newBalance);

    if(newBalance <= allowedCreditLimit);

    return console.log("Credit limit exceeded");

}



creditLimit()

