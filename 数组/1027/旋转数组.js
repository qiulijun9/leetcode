let arr = [2, 4, 5, 6, 6];

let arr1 = arr.splice(2, 5 - 2);
let arr2 = arr.splice(0, 2);
let result =arr1.concat(arr2)
console.log(arr1, arr2,result);
