
// you'll write a description and a callback function
const {sum,multiply, factorial,multiplyElementsByNumber,square} = require("./Practical1")

test("sum any two numbers a and b", ()=>{
    // given that==>

   let first = 2;
   let second = 4;
   let result = sum(first,second);

   expect (result).toBe(6)



})

test("product of any two numers", ()=>{
    let first = 2;
    let second = 4;
    let result2 = multiply(first,second)
   expect (result2).toBe(8)

})


test("the fsctorial of a number", ()=>{
    let number = 4;
   let result3 = factorial(number)

   expect (result3).toBe(12)

})


test("elemnts of an array can be multiplied by a given number",()=>{
    let array = [1,2,3,4,5];
   let givenNumber = 2;

   let result4 = multiplyElementsByNumber(array,givenNumber);
   let answer = [2,4,6,8,10]

   expect (result4).toEqual(answer)
})


test("square of any number n",()=>{
    let number = 9;
    let result = square(number);

    expect(result).toBe(81)
})