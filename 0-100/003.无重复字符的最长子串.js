/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left =0;
  let right = 0;
  let window ={};
  let res = 0;

  while(right < s.length){
    let c1 = s[right];
    window[c1] ? window[c1]++ : window[c1] = 1;
    right ++;
    //如果出现重复的字符
    while(window[c1] >1 ){
      let c2 = s[left];
      window[c2] --;
      left ++;
    }
    res = Math.max(res,right-left);
  }

  return res;
};