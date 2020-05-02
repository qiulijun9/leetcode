/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jump = 0;
  let end = 0;
  let maxlength = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    //开始为0 时 jump +1了,到末尾nums.length  不用在加1 ,所以到nums.length -1
    //贪心算法找到能够跳到的最远的
    maxlength = Math.max(maxlength, i + nums[i]);
    console.log(maxlength, end, i);
    if (end === i) {
      //下一次跳的最远距离
      jump++;
      end = maxlength;
    }
  }
  //   return jump;
};

console.log(jump([2, 3, 1, 1, 4]));
