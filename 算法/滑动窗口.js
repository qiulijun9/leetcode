function slidingWindow(s, t) {
  let window = {}
  let needs = {}
  //  需要匹配的各个字符出现的次数
  for (const c of t) {
    needs[c] ? (needs[c] += 1) : (needs[c] = 1)
  }
  let left = 0
  let right = 0

  while (right < s.length) {
    // 增加滑动窗口
    // 即将移入窗口的字符
    const c = s[right]
    right ++

    while(window needs shrink){
      // 缩小滑动窗口
      // 即将移出窗口的字符
     const d  = s[left]
      left++
    }
  }

  console.log(needs)
}

console.log(slidingWindow('fdfdfa', 'abcc'))
