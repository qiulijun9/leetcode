/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 遍历两个数组，把相同的放入一个新数组
  const result = []
  for (let i = 0; i < nums1.length; i++) {
    const targetIndexOf = nums2.indexOf(nums1[i])

    if (targetIndexOf > -1) {
      result.push(nums1[i])
      // 去掉匹配成功的, 防止nums1 中有相同的再添加result 中
      nums2.splice(targetIndexOf, 1)
    }
  }

  return result
}

var intersect2 = function (nums1, nums2) {
  // 利用map { '1': 2, '2': 2 }
  let map = {}
  const result = []
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]] += 1
    } else {
      map[nums1[i]] = 1
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      result.push(nums2[i])
      map[nums2[i]] -= 1
    }
  }

  console.log(map)
  return result
}
// [4,9,4,9,5]
// [9,4,8]

// [1,2,2,1]
// [2,2]

//[1,2,2,1]
//[2]
console.log(intersect2([9, 4, 8], [4, 9, 4, 9, 5]))
