let arr = new Array()
raw_arr = [[200, 50, 300, 5,],
[10,25,7,100],
[25, 20, 70, 45],
[500,170,11,35]]

let result = raw_arr[1].pop();

// console.log(raw_arr[1])


function removeElement(array, index){

    array[index].pop()

    return array[index];
}

console.log(removeElement(raw_arr, 2))

