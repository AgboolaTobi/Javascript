const array = [1,2,3];
console.log(array.length);

array.length = 5;
console.log(array)
// looping through an array using a for loop
const example = [1,2,3,4,5]
// for(count = 0; count < example.length; count++){
//     array[count] *=2;
// }

// looping through an array using a while loop


// looping through an array usng a for loop;


let thisExample = [1,2,3,4,5,6,7];
// let result  = 0;
// let length = thisExample.length;
// for(let count = 0;count < length; count++){
//     result += thisExample[count];

// }
// console.log(result)
// An array can also be shortened  i.e say...

// if(thisExample.length > 3){
//     thisExample.length = 3;
// }

// console.log(thisExample)


// You can also make an array object a read only,such that it cannot be updated;
let copied = [1, 2, 3, 4, 5]
Object.defineProperty(copied,"length", {writable:false})
copied.length = 8;
copied.pop();
copied.push(5);
console.log(thisExample);


// "use strict";

// let copied = [1, 2, 3, 4, 5];
// Object.defineProperty(copied, "length", {writable:false});
// copied[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
// copied.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
