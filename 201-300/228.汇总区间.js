/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let start = nums[0];
    let end = nums[0];
    let arr = []
    for (let i = 1; i < nums.length + 1; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            end++;
        } else {
            if (end === start) {
                arr.push(start)
            } else {
                arr.push(`${start}->${end}`)
            }
            start = end = nums[i]
        }
    }
    return arr
};
console.log(summaryRanges([1, 2, 3, 6, 7, 8, 10, 30, 32]))