let length = 3;
let width = 3;

let obj = [
    {row: 0, col: 0, value: "X"},
    {row: 0, col: 1, value: "X"},
    {row: 0, col: 2, value: "0"},

    {row: 1, col: 0, value: "0"},
    {row: 0, col: 0, value: " "},
    {row: 1, col: 2, value: "X"},

    {row: 2, col: 0, value: "X"},
    {row: 2, col: 1, value: "0"},
    {row: 2, col: 2, value: "0"}
]

// let result = [[],[],[]];
// for(const key in obj){
//     for(const newKey in obj[key]){
//         result[key].push(obj[key][newKey]['value'])
//     }
// }
// console.log(result);


function generate (obj,length,width){
    var array = generate2D(length,width);
    for(let value of obj){
        array[value.row][value.col] = value.value;
    }
    return array;
}


let generate2D = (length,width) =>{
    let result = [[],[],[]];
    for(let count = 0; count < length; count++){
        for(let counter = 0; counter < width; counter++){
            result[count].push(" ");
        }
    }
    return result;
}


let newArray = generate(obj,length,width)
console.log(newArray)


