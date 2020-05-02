// function missingNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(i) === -1) {
//       return i;
//     }
//   }
// }
//利用异或 求值 异或可以满足交换率 和结合率 a ^a =0  a^ 0 =a
// function missingNumber2(arr) {
//   let res = 0;
//   res ^= arr.length;
//   console.log(res, 0 ^ arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     res ^= i ^ arr[i];
//   }
//   return res;
// }

//加法满足交换率和结合率
function missingNumber3(arr) {
  let res = 0;
  res += arr.length;
  for (let i = 0; i < arr.length; i++) {
    res += i - arr[i];
  }
  return res;
}
console.log(missingNumber3([3, 0, 1]));
