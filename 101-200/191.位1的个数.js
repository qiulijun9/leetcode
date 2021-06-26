/**
 * @param {number} n - a positive integer
 * @return {number}
 *
 * x =x &(x-1) 目的消除末尾的1
 */
var hammingWeight = function (n) {
  let count = 0

  while (n !== 0) {
    count++
    n = n & (n - 1)
  }

  return count
}

var hammingWeight2 = function (n) {
  let str = n.toString(2)
  const strSplit = str.split('1')
  return strSplit.length - 1
}
console.log(hammingWeight2(00000000000000000000000000001011))
