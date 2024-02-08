const { taxCalculator } = require("./TaxCalculator");

test("test tax calculator", ()=>{
    let earning = 30000;
    let totalTax = taxCalculator(earning);

    expect(totalTax).toBe(3750)
})