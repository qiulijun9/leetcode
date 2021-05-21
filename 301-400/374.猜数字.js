/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 0
  let right = n

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    const target = guess(mid)

    console.log(target)
    if (target === 0) {
      return mid
    } else if (target === 1) {
      left = mid + 1
    } else if (target === -1) {
      right = mid - 1
    }
  }
  return -1
}
