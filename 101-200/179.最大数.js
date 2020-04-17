var largestNumber = function(nums) {
  const targetString = nums
    .sort((a, b) => {
      String(b) + String(a) - (String(a) + String(b));
    })
    .join("");
  if (-targetString === 0) return "0";
  return targetString;
};

largestNumber([0, 0]);

var compare = function(x, y) {
  //比较函数
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

var largestNumber = function(nums) {
  const str = nums
    .map(String)
    .sort((a, b) => b.concat(a) - a.concat(b))
    .join("");
  if (-str === 0) return "0";
  return str;
  //    等同于 nums.map(String) nums.map(a => { return "a";})
  //     .sort((a, b) => b.concat(a) - a.concat(b))     str.concat(str1)等同于str + str1
};
