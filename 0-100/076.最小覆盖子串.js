
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
/*
  利用滑动窗口 定义left 和right 指针，右移动指针,扩大窗口，直到窗口中包含了所有的字符 needs
  开始移动left,缩小窗口

*/
  let start = 0 ;
  let minLen =Infinity;
  let left = 0;
  let right =0;
  let count = 0;
  let needs ={};
  let window ={};
  
  //在needs 中存入需要匹配的字符串及出现次数 {a:1,b:1}
  for(let i = 0;i < t.length;i++){
    needs[t[i]] ? needs[t[i]]++ : needs[t[i]] = 1;
  }
  //移动右指针
  while(right < s.length){
    let c1 = s[right];
    if(needs[c1]){
      //在window 中存入需要匹配的字符串及出现次数 
      window[c1]? window[c1]++ : window[c1] = 1
      
      if(window[c1] === needs[c1]){
        count++;
      }
    }
    right++;
    //移动left,window中包含了所有所需的字符
    while(count === Object.keys(needs).length){
      
      let c2 = s[left];
      if(needs[c2]){
        window[c2]--;
        if(window[c2]< needs[c2]){
         count --;
        }
      }
      console.log(right,left,start,minLen);
      //获取最小区间
      if(right - left< minLen){
        start = left;
        minLen = right -left;
        
      }
      
      left++;
    }
    

  }
  return s.substr(start,minLen);
}

let s = "ADOBECODEBANC";let t= "ABC"
console.log(minWindow(s,t))