/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
};

var twoSum2 = function(nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const index = hashMap.get(target - nums[i]);
    if (index !== undefined) {
      return [index, i];
    }
    hashMap.set(nums[i], i);
  }
};

// 重新做
//暴力破解法 时间复杂度 O(n^2)

const getSumIndex = function (nums, target){
  for(let i= 0; i< nums.length; i++){
    for(let j= i+1 ; j< nums.length; j++){
      if(nums[i] + nums [j] === target){
        return [i,j]
      }
    }
  }
}

/*
  采用map结够，存以[value,index]的结构,
  每次从map中查找有没有target - nums[i]的数(两数之差)
  return 出map中命中的索引，和当前索引
  
  求和转为求差，利用map 空间换时间 ，时间复杂度将为O(1)

*/
const getSumIndex2 = function (nums, target){
  const map = new Map();
  for(let i= 0 ;i< nums.length; i++){
    const a = target - nums[i];
    if(map.has(a)){
      return [map.get(a),i];
    }
    map.set(nums[i],i);
  }
}

console.log(getSumIndex2([2,5,7,6,4],6))