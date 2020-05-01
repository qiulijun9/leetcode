var quickSort = function(arr) {
  　　if (arr.length <= 1) { return arr; }
  　　var pivotIndex = Math.floor(arr.length / 2);
  　　var pivot = arr.splice(pivotIndex, 1)[0];
     console.log(pivotIndex,arr.splice(pivotIndex, 1),pivot);
  　　var left = [];
  　　var right = [];
  　　for (var i = 0; i < arr.length; i++){
  　　　　if (arr[i] < pivot) {
  　　　　　　left.push(arr[i]);
  　　　　} else {
  　　　　　　right.push(arr[i]);
  　　　　}
  　　}
  　　return quickSort(left).concat([pivot], quickSort(right));
  };
  
let arr = [3,5,6,7,3,6,8,1,9];
console.log(quickSort(arr));