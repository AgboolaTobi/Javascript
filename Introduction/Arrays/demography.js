// let myArray = new Array()

let obj1 = null
let obj2 = {
    name: "Agboola",
    population: 10,
    temp: 5,
    currency:"$"
}
let obj3 = {
    name: "Tobi",
    population: 15,
    temp: 5,
    currency:"$" 
}
let obj4 = {
    name: "Samuel",
    population: 10,
    temp: 5,
    currency:"$"
}

let obj5 = {
    name: "Vera",
    population: 20,
    temp: 5,
    currency:"$"}

let obj6 = {
    name: "Divine",
    population: 25,
    temp: 5,
    currency:"$"
}

let obj7 = {
    name: "Joy",
    population: 25,
    temp: 5,
    currency:"$"   
}

let obj8 = null

let obj9 = {
            
    name: "Ope",
    population: 20,
    temp: 5,
    currency:"$"
    }

let obj10 = null

let obj11 = {
    name: "Precious",
    population: 20,
    temp: 5,
    currency:"$"
}

let obj12 = {
    name: "Phillip",
    population: 20,
    temp: 5,
    currency:"$"
}

let myArray = [
    [obj1,obj2,obj3,obj4],
    [obj5,obj6,obj7,obj8],
    [obj9,obj10,obj11,obj12]

]

function addPopulation(array){
let result = 0;

for(const key in array){
    for(const newKey in array[key]){
        if(array[key][newKey]!= null){        
        result = result + array[key][newKey].population
        }
    }
}
return result;   
}

console.log("The total population is ",addPopulation(myArray))