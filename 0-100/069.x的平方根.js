/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x
  }
  let left = 1
  let right = x

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (mid === x / mid) return mid
    if (mid < x / mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
