/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // let result = 0;
  // nums.forEach(v => {
  //   result = result ^ v;
  //   console.log(result ^ v, result);
  // });

  // return result;
  //相同得0 不同得1
  //return nums.reduce((a,b)=>a^b)


  // let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (result.includes(nums[i])) {
  //     let index = result.indexOf(nums[i]);
  //     result.splice(index, 1);
  //   } else {
  //     result.push(nums[i])
  //   }
  // }
  // return result;



};

singleNumber([3, 3, 4, 4, 1, 1, 2]);
