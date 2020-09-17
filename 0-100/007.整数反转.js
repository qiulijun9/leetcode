/**
 * @param {number} x
 * @return {number}
 * 321 - 123
 */
// var reverse = function (x) {
//   let target = ''
//   for (let i = String(x).length; i > 0; i--) {
//     target += String(x)[i - 1]
//   }

//   if (Math.abs(parseInt(target)) > 2 ** 31 - 1) {
//     return 0
//   }

//   return String(x)[0] === '-' ? -parseInt(target) : parseInt(target)
// }

// 位运算   %10 求出最后一位，依次往前拼   target | 0 判断溢出
//  x   result
// 123   0
// 12    3
// 1     32
// 0     321
var reverse = function (x) {
  let target = ''
  while (x !== 0) {
    target = target * 10 + (x % 10)
    x = (x / 10) | 0
  }

  return (target | 0) === target ? target : 0
}
console.log(reverse(1534236469))
