
const example = [1,4,9,16]
function mapper(anyAray){
    const map1 = anyAray.map((element)=> element ** 2 )
    return map1
}

console.log(mapper(example))


// const example2 = ["sola", "vera","daniel"]
// console.log(mapper(example2))

// const arr = [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//   console.log(i);
// }
// "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// Logs: 3 5 7
