function binarySearch (nums, target){
  let left = 0;
  let right = nums.length -1; 
  while(left <= right){
    let mid = Math.floor((right - left)/2) + left;
    if(nums[mid] === target) return mid;
    if(nums[mid] < target){
      left = mid + 1;
    }
    if(nums[mid] > target){
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1,2,3,4,5,6],4))