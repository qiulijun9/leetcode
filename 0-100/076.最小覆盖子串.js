/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  /*
  利用滑动窗口 定义left 和right 指针，右移动指针,扩大窗口，直到窗口中包含了所有的字符 needs
  开始移动left,缩小窗口

*/
  let start = 0
  let minLen = Infinity
  let left = 0
  let right = 0
  let count = 0
  let needs = {}
  let window = {}

  //在needs 中存入需要匹配的字符串及出现次数 {a:1,b:1}
  for (let i = 0; i < t.length; i++) {
    needs[t[i]] ? needs[t[i]]++ : (needs[t[i]] = 1)
  }
  //移动右指针
  while (right < s.length) {
    let c1 = s[right]
    if (needs[c1]) {
      //在window 中存入需要匹配的字符串及出现次数
      window[c1] ? window[c1]++ : (window[c1] = 1)

      if (window[c1] === needs[c1]) {
        count++
      }
    }
    right++
    //移动left,window中包含了所有所需的字符
    while (count === Object.keys(needs).length) {
      let c2 = s[left]
      if (needs[c2]) {
        window[c2]--
        if (window[c2] < needs[c2]) {
          count--
        }
      }
      console.log(right, left, start, minLen)
      //获取最小区间
      if (right - left < minLen) {
        start = left
        minLen = right - left
      }

      left++
    }
  }
  return s.substr(start, minLen)
}

// let s = 'ADOBECODEBANC'
// let t = 'ABC'
// console.log(minWindow(s, t))

var minWindow = function (s, t) {
  // 需要匹配的子字符串出现的次数
  let needs = {}
  for (let c of t) {
    needs[c] ? (needs[c] += 1) : (needs[c] = 1)
  }

  // 当前窗口中包含的字符串及出现的次数
  let window = {}
  let left = 0
  let right = 0
  let count = 0
  // 记录 子串开始的位置 和长度
  let start = 0
  let len = Infinity
  while (right < s.length) {
    const c = s[right]
    right++
    // { A: 1, B: 1, C: 1 } { A: 2, B: 2, C: 2}
    if (needs[c]) {
      // 只是做 统计需要包含的子串在window 中出现的次数
      if (window[c]) {
        window[c]++
      } else {
        window[c] = 1
      }

      if (needs[c] === window[c]) {
        count++
      }
    }
    // 当窗口中包含了所有需要匹配的字符串时，开始缩小窗口
    while (count === Object.keys(needs).length) {
      // console.log(start, len, count, needs)
      // 记录最小的覆盖子串
      if (right - left < len) {
        start = left
        len = right - left
      }
      // 即将移出的字符
      const d = s[left]
      left++

      // 移除多余的
      if (needs[d]) {
        if (window[d] === needs[d]) {
          count--
        }
        window[d]--
      }
    }
  }

  return t.length > s.length || len === Infinity ? '' : s.substr(start, len)
}

let s = 'aa'
let t = 'aa'
console.log(minWindow(s, t))
