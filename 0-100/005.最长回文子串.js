/**
 * @param {string} s
 * @return {string}
 */
//中心扩散法 分为 有中心和无中心两种情况
var longestPalindrome = function (s) {
  if (!s || s.length === 0) return s;
  if (s.length < 2) return s;
  let maxLength = 1;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    getIndex(i - 1, i + 1); //有中心 i
    getIndex(i, i + 1); //无中心
  }

  function getIndex(left, right) {
    //判断是否越界并符合回文
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("abccbaaccb"));
