let arr = [
  2,
  4,
  5,
  6,
  6,
  3,
  432,
  4234,
  2342,
  4324,
  325,
  3,
  3,
  1,
  13,
  3,
  4,
  1,
  1
];

var fun1 = function(nums, k) {
  let len = nums.length;
  let arr1 = nums.splice(k, len - k);
  let arr2 = nums.splice(0, k);
  let result = arr1.concat(arr2);
  nums = result;
  return nums;
};

console.log(fun1(arr, 20));

var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }
