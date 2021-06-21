/**
 * @param {number} n
 * @return {boolean}
 * 2 的幂次 只有一个1  eg 000100
 */
var isPowerOfTwo = function (n) {
  if (n === 0) {
    return false
  }

  if (n === 1) {
    return true
  }
  if (n % 2 !== 0) {
    return false
  }
  return isPowerOfTwo(n / 2)
}

var isPowerOfTwo = function (n) {
  return n && (n & (n - 1)) === 0
}
console.log(isPowerOfTwo(88))
