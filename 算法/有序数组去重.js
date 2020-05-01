let arr = [1,2,3,4,4,5,5,6,7,8,9,9,11,23,45,45,60];

function removeDuplicates(arr){
  let slow = 0 ; let fast = 1;
  while(fast < arr.length){
    
    if(arr[fast] !== arr[slow]){
      slow++;
      arr[slow] = arr[fast];
    }
    fast++;
  }
 return arr.splice(0,slow + 1);
}
console.log(removeDuplicates(arr));