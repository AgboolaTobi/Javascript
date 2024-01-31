const shoppingList = [
    {name:"Apples",category:"Fruits",isHealthy:true},
    {name:"Potato Chips",category:"Snacks",isHealthy:false},
    {name:"Carrots",category:"Vegetables",isHealthy:true},
    {name:"Chocolate Bars",category:"Sweets",isHealthy:false},
    {name:"Greek Yoghort",category:"Dairy",isHealthy:true},
    {name:"Soda",category:"Beverages",isHealthy:false}
];

// first is to pass the shopping list into the filter function and check for items that are healthy,i.e ones that return true for healthy status check. 
const healthyItems = shoppingList.filter((check)=> check.isHealthy==true);

console.log(healthyItems)

healthyItems.forEach((items)=> console.log(items["name"]));


// function filterUsage(array,status,productName){
//     const result = array.filter((check)=> check== status);
//     result.forEach((element)=> console.log(element.productName) )
//     return result
// }

// console.log(filterUsage(shoppingList,false,productName))
