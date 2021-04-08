function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 同right + left / 2 为了防止较大树相加溢出
    let mid = Math.floor((right - left) / 2) + left
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      left = mid + 1 //区间变成[mid+1,right]
    }
    if (nums[mid] > target) {
      right = mid - 1 //区间变成[left,mid-1]
    }
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))

function left_bound(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      // 收缩左侧边界
      right = mid - 1
    }
  }

  if (left >= nums.length || nums[left] !== target) {
    return -1
  }
  return left
}

function right_bound(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      left = mid + 1
    }
  }

  if (right < 0 || nums[right] !== target) {
    return -1
  }
  return right
}
