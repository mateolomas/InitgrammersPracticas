
const arr = [1, 2, 3, 4, 5];
let arr2 = [...arr, 6, 7, 8];

const arr3 = arr2.map(function(x){
    return x * 2;
})

console.log(arr3);