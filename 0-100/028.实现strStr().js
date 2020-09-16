// 方法一
// var strStr = function (haystack, needle) {
//   // 字符串indexOf方法 ,检查某个字符串在原字符串中首次出现的位置，如果在返回下标，如果不在返回-1 同数组的indexOf 方法相同
//   return haystack.indexOf(needle)
// }

// 方法二
// var strStr = function (haystack, needle) {
//   if (!needle) {
//     return 0
//   }
//   let flag = false
//   for (let i = 0; i < haystack.length; i++) {
//     // 第一个匹配之后
//     if (haystack[i] === needle[0]) {
//       flag = true
//       // 查看后面是否匹配
//       for (let j = 1; j < needle.length; j++) {
//         if (haystack[i + j] !== needle[j]) {
//           flag = false
//           break
//         }
//       }
//       if (flag) return i
//     }
//   }
//   return -1
// }

// 方法三

var strStr = function (haystack, needle) {
  if (!needle) return 0
  let table = new Array(needle.length).fill(0)

  {
    let i = 1
    let j = 0
    while (i < needle.length) {
      // 如果匹配，则各自自增
      if (needle[i] === needle[j]) {
        ++i
        ++j
        table[i] = j
      } else {
        if (j > 0) {
          // j 还没找到开头，回退继续尝试
          j = table[j]
        } else {
          // j 已经找到开头了，说明当前无匹配，主串自增,table[i] 无需赋值，为0
          ++i
        }
      }
    }
  }

  {
    let i = 0
    let j = 0
    while (i < haystack.length) {
      if (haystack[i] === needle[j]) {
        i++
        j++
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          i++
        }
      }
      if (j === needle.length) {
        return i - j
      }
    }
    return -1
  }
}

console.log(strStr('hello', 'll'))
console.log(strStr('aaa', 'aaa'))
console.log(strStr('aaa', 'a'))
