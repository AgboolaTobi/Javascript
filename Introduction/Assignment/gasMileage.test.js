const{mileage} = require("./gasMileage")


test("test for gas mileage", ()=>{

    let mileDriven = 20;
    let gallonUsed = 5;
    let result = mileage(mileDriven, gallonUsed);

    expect(result).toBe(4);
})
