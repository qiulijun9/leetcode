let arr = [1,2,3,4,-1,2,-4,-6,-9,1];

function getMaxSum(arr){
  let maxSum = 0;
  let sum = 0;
  arr.forEach(num  => {
    sum = sum + num;
    maxSum = Math.max(maxSum,sum);
    if(sum <= 0){
      sum = 0;
    }
  });
  return maxSum;
}
console.log(getMaxSum(arr));