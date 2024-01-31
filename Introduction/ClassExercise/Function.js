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