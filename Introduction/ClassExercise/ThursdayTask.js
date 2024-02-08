const task = function(array){
let save = array[0][1];
array[0][1] = array[1][0];
array[1][0] = save;

return array

}



module.exports = {task}