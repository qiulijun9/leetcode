/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const newArr = arr.sort((a, b) => a - b)
  return newArr.slice(0, k)
}
