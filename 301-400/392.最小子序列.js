/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * 判断s 是否在t 中， abc  ---> abcd  true    cba ---->abcd false
 *
 */
var isSubsequence = function (s, t) {
  let i = 0
  let j = 0

  while (i < s.length && j < t.length) {
    console.log(i, s[i], t[j], s[i] === t[j])
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === s.length
}

console.log(isSubsequence('aaaaaa', 'bbaaaa'))
