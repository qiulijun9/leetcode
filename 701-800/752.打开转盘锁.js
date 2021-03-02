/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set()
  const queue = []
  let step = 0
  queue.push('0000')
  visited.add('0000')

  while (queue.length > 0) {
    const sz = queue.length
    for (let i = 0; i < sz; i++) {
      const cur = queue.shift()

      if (deadends.includes(cur)) {
        continue
      }
      if (cur === target) {
        return step
      }

      // 将一个节点的未遍历相邻节点加入队列
      for (let j = 0; j < 4; j++) {
        const up = plusOne(cur, j)
        if (!visited.has(up)) {
          queue.push(up)
          visited.add(up)
        }

        const down = minusOne(cur, j)
        if (!visited.has(down)) {
          queue.push(down)
          visited.add(down)
        }
      }
    }
    step++
  }
  return -1
}

function plusOne(str, index) {
  const arr = str.split('')
  if (arr[index] === '9') {
    arr[index] = '0'
  } else {
    arr[index] = +arr[index] + 1 + ''
  }
  return arr.join('')
}
function minusOne(str, index) {
  const arr = str.split('')
  if (arr[index] === '0') {
    arr[index] = '9'
  } else {
    arr[index] = +arr[index] - 1 + ''
  }
  return arr.join('')
}
