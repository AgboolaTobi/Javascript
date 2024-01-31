

function operate(right_operand,left_operand,operator){

    let answer;
if (operator == "+"){

answer = left_operand + right_operand
}
else if (operator == "-"){
answer = right_operand - left_operand
}
else if(operator == "*"){
answer = left_operand * right_operand
}
else if(operator == "/"){
answer = left_operand / right_operand
}

return answer
}

console.log("The result = " ,operate(5,5,"+"))

console.log("The result = " ,operate(5,5,"-"))

console.log("The result = " ,operate(5,5,"*"))

console.log("The result = " ,operate(5,5,"/"))