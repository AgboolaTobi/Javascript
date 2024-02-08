const {task} = require("./ThursdayTask")

test("test array", ()=>{
    let array = [[2,3],[4,5]];
    let result = task(array);
    let answer = [[2,4],[3,5]]
    expect(result).toEqual(answer)
})