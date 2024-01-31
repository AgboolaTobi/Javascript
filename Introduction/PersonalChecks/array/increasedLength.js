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

const count = 0;
while(count < 5){
    example.forEach(element => {
   element*=2;  
      
    });
    count+1;
    console.log(example)   
}


console.log(example)