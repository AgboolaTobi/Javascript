const {largestNumber} = require("./LargestNumber")

test("test for largest number", ()=>{
    let numbers = [1,2,3,4,5];
    let result = largestNumber(numbers);

    expect(result).toBe(5);
})