/**
 * @param {number[]} nums
 * @return {number[][]}
 * 暴力破解 时间复杂度 O(n3)
 */
var threeSum1 = function (nums) {
  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 暴力破解  + set 时间复杂度 O(n2)
 * 但是需要进行二维数组的去重，会要进行排序，还要多生成一个地址，不建议
 */
var threeSum2 = function (nums) {
  const set = new Set()
  const result = []
  const obj = {}
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let c = 0 - nums[i] - nums[j]

      if (set.has(c)) {
        result.push([nums[i], nums[j], c].sort())
      }
      set.add(nums[j])
    }
    set.clear()
  }

  return result.filter(item => {
    if (!obj[item.toString()]) {
      obj[item.toString()] = true
      return item
    }
  })
}

/**
 *
 * [-4,-1,-1,0,1,2] nlog n
 * 去重判断 nums[i] ===nums[i-1]
 * left 和小于0 left ++
 * right  和大于0 right --
 * 和===0 求解 left === right
 */

var threeSum3 = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      let lastLeft = nums[left]
      let lastRight = nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === lastLeft) left++
        while (left < right && nums[right] === lastRight) right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return result
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// -4, -1, -1, 0, 1, 2

function threeSum4(arr) {
  const result = []
  arr.sort((a, b) => a - b)
  const arrLen = arr.length
  let lastNum = undefined
  arr.forEach((num, index) => {
    if (index + 2 === arrLen || num === lastNum) return

    lastNum = num

    const currentNum = num
    let lastLeftNum = undefined
    let left = index + 1
    let right = arrLen - 1

    while (left < right) {
      const sum = currentNum + arr[left] + arr[right]
      if (sum === 0) {
        if (lastLeftNum === arr[left]) {
          left++
          right--
          continue
        }
        result.push([currentNum, arr[left], arr[right]])
        lastLeftNum = arr[left]
        left++
        right--
        continue
      }

      if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  })

  return result
}

console.log(threeSum3([-1, 0, 1, 2, -1, -4]))
