/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 时间复杂度nlog(n)
 */
// var isAnagram = function (s, t) {
//  if (s.length !== t.length) return false
//   return s.split('').sort().toString() === t.split('').sort().toString()
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 时间复杂度O(n)
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let map1 = new Map()

  for (let i = 0; i < s.length; i++) {
    let count = map1.get(s[i])
    if (map1.get(s[i])) {
      map1.set(s[i], count + 1)
    } else {
      map1.set(s[i], 1)
    }
  }
  for (let i = 0; i < t.length; i++) {
    let count = map1.get(t[i])
    if (map1.get(t[i])) {
      map1.set(t[i], count - 1)
    }
  }

  return [...map1.values()].every(item => item === 0)
}

console.log(isAnagram('anagram', 'nagaram'))
