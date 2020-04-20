//一般实现 // 返回区间 [2, n) 中有几个素数 

function getPrime(n){
  let count = 0;
  for(let i= 2;i< n;i++){
    if(isPrime(i)){
      count ++;
    }
  }
  return count;
}

function isPrime(n){
  for(let i= 0;i< n;i++){
   if(n%2 ===0 ){
     return false;
   }
   return true;
  }
}
console.log(getPrime(10))

//优化实现
function getPrime2(n){
  let isPrime =[];
  isPrime.length =n;
  isPrime.fill(true);
  for(let i =2; i*i <n; i++){
    if(isPrime[i]){
      //如果该数为素数，那么它的倍数都是素数
      for(let j = i*i; j<n ;j+=i){
        isPrime[j]=false;
      }
    }
  }
  let count = 0;
  for(let i=2;i<n; i++){
    if(isPrime[i]){count++}
  }
  return count;
}
console.log(getPrime2(10))