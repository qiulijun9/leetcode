/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  //return str.toLocaleLowerCase()
  let str2 = "";
  for (i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (char > 65 && char < 90) {
      char += 32;
    }
    str2 += String.fromCharCode(char);
  }
  return str2;
};

toLowerCase("HELLO");
