/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let needs = {}
  for (const c of s1) {
    needs[c] ? needs[c]++ : (needs[c] = 1)
  }
  let window = {}
  let left = 0
  let right = 0
  let count = 0
  // 同滑动窗口的模板
  while (right < s2.length) {
    const c = s2[right]
    right++
    if (needs[c]) {
      window[c] ? window[c]++ : (window[c] = 1)

      if (needs[c] === window[c]) {
        count++
      }
    }

    // 缩小滑动窗口
    while (right - left >= s1.length) {
      if (count === Object.keys(needs).length) {
        return true
      }
      const d = s2[left]
      left++

      console.log(needs, window, 1111)
      if (needs[d]) {
        if (window[d] === needs[d]) {
          count--
        }
        window[d]--
      }
      console.log(needs, window)
    }
  }

  return false
}

console.log(checkInclusion('ab', 'eidboaoo'))
