/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let arr1 = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      arr1.unshift(A[i]);
    } else {
      arr1.push(A[i]);
    }
  }
  return arr1;
};
sortArrayByParity([3, 23, 2, 1, 3, 2, 4]);

var sortArrayByParity = function(A) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      arr1.push(A[i]);
    } else {
      arr2.push(A[i]);
    }
  }
  return arr1.concat(arr2);
};
