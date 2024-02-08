// (Gas Mileage) Drivers are concerned with the mileage their automobiles get. One driver has
// kept track of several trips by recording the miles driven and gallons used for each tankful. Develop
// a Java application that will input the miles driven and gallons used (both as integers) for each trip.
// The program should calculate and display the miles per gallon obtained for each trip and print the
// combined miles per gallon obtained for all trips up to this point. All averaging calculations should
// produce floating-point results. Use class Scanner and sentinel-controlled iteration to obtain the data
// from the user.


const prompt = require("prompt-sync")();



const mileage = ()=>{
    let milesDriven = Number(prompt("Enter miles driven: "));
    let gallonUsed = Number(prompt("Enter the gallon used: "))

    let milesPerGallon = milesDriven / gallonUsed;
    console.log("The miles per gallon used = " ,milesPerGallon)

    let combinedMilesPerGallon = 0;

    combinedMilesPerGallon += milesDriven;

    let response = prompt("Do you wish to continue ?")
    
    while(response != "no"){
        milesDriven = Number(prompt("Enter miles driven: "))
        gallonUsed = Number(prompt("Enter the gallon used: "))

        milesPerGallon = milesDriven / gallonUsed;

        console.log(milesPerGallon)

        combinedMilesPerGallon += milesDriven;

        response = prompt("Do you wish to continue ? ")

    }

    return `The total miles per gallon = ${combinedMilesPerGallon}`;

}


module.exports = {mileage};
