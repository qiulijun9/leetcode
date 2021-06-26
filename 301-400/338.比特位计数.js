/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i & (i - 1)] + 1
  }
  console.log(bits)
  return bits
}
