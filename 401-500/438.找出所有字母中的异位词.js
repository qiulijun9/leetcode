/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let res =[];
  let left = 0;
  let right = 0;
  let needs = {};
  let window = {};
  let count =0;
   //在needs 中存入需要匹配的字符串及出现次数 {a:1,b:1}
 for(let i = 0;i < p.length;i++){
   needs[p[i]] ? needs[p[i]]++ : needs[p[i]] = 1;
 }

  while(right < s.length){
     let c1 = s[right];
     if(needs[c1]){
       window[c1]? window[c1]++ :window[c1] =1;
       if(window[c1] === needs[c1]){
         count ++;
       }
       
     }
     right ++;

     while(count === Object.keys(needs).length){
       if(right - left === p.length){
         res.push(left);
       }
       let c2 = s[left];
       if(needs[c2]){
         window[c2]--;
         if(window[c2] < needs[c2]){
           count --;
         }
       }
       left ++;
       
     }
  }
  return res;
};

let s = "cbaebabacd"
let p ="abc";

console.log(findAnagrams(s,p))