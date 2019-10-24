/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let maxLength = Math.max(a.length, b.length) + 1;
  while (a.length !== maxLength) a = "0" + a;
  while (b.length !== maxLength) b = "0" + b;
  var c = [];
  for (var i = maxLength - 1; i >= 0; i--) {
    c[i] = c[i] ? c[i] + (a[i] - 0) + (b[i] - 0) : a[i] - 0 + (b[i] - 0);
    if (c[i] > 1) {
      c[i - 1] = c[i - 1] ? c[i - 1] + 1 : 1;
      c[i] = c[i] - 2;
    }
  }
  if (!c[0]) c.shift();
  return c.join("");
};
// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

function a() {
  var a = 333;
}
console.log(a);

function b() {
  let b = 333;
}
console.log(b);
