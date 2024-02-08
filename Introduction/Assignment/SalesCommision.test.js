const {salesCommision} = require("./SalesCommision")

test("test for sales commision", ()=>{

    let basePay = 200;
    let priceOfItemSold = 5000;
    let totalEarning = salesCommision(basePay,priceOfItemSold);

    expect(totalEarning).toBe(650);
})