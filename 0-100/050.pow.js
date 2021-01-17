var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return x
  }
  if (n < 1) {
    return 1 / myPow(x, -n)
  }
  //   奇数 转为偶次幂
  if (n % 2) {
    return myPow(x, n - 1) * x
  }

  // x 的 n次 = x 的 n/2 *  x 的 n/2 = x * x的 n/2
  return myPow(x * x, n / 2)

  // let result = x
  // for (let i = 0; i < n; i++) {
  //   console.log('-----')
  //   result = x * result
  // }
  // return result
}

var myPow2 = function (x, n) {
  // 负次方 为x 的倒数
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let pow = 1
  while (n) {
    // 位运算    偶数 x & 1 = 0  奇数 x & 1 =1
    if (n & 1) {
      pow *= x
    }
    x *= x
    // n>>> =1 = n = n/2
    n >>>= 1
  }
  return pow
}

console.log(myPow2(2, 4))
