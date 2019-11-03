/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  nums.forEach(v => {
    result = result ^ v;
    console.log(result ^ v, result);
  });

  return result;
  //return nums.reduce((a,b)=>a^b)
};

singleNumber([3, 3, 4, 4, 1, 2, 3, 4, 5]);
