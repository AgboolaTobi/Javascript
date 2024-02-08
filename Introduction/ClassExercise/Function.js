const  humus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = factor * amount;
        if(ingredientAmount > 1){
            unit += "s"
        }
        return `${ingredientAmount} ${unit} of ${name}`
    }
    return ingredient(1, "cup", "juice")
}

const showCalculation = humus(1);

console.log(showCalculation);

const showCalculation2 = humus(15);


console.log(showCalculation2);


let newArray = [[], [], []]

for(const key in array){
    newArray[0].push(array[key][0])
    newArray[1].push(array[key][1])
    newArray[2].push(array[key][2])
}