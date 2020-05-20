/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
https://leetcode-cn.com/problems/valid-parentheses

 */

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
// 	let arr = [];
// 	if (s.length % 2) return false;
// 	for (let i = 0; i < s.length; i++) {
// 		switch (s[i]) {
// 			case '(':
// 				arr.push(')');
// 				break;
// 			case '[':
// 				arr.push(']');
// 				break;
// 			case '{':
// 				arr.push('}');
// 				break;
// 			default:
// 				if (arr.pop() !== s[i]) {
// 					return false;
// 				}
// 		}
// 	}

// 	if (arr.length >= 1) {
// 		return false;
// 	}
// 	return true;
// };

function isValid(s) {
	let map = { '(': ')', '[': ']', '{': '}' };
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			arr.push(s[i]);
		} else {
			if (s[i] !== map[arr.pop()]) {
				return false;
			}
		}
	}
	return arr.length >= 1 ? false : true;
}

console.log(isValid('()'));
