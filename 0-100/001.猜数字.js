/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
// var game = function (guess, answer) {
//     let count = 0;
//     for (let i = 0; i < 3; i++) {
//         if (guess[i] === answer[i]) {
//             count++
//         }
//     }
//     return count;
// };

// var game = function (guess, answer) {
//     let count = 0;
//     guess.forEach((i, index) => {
//         if (i === answer[index]) count++
//     })
//     return count;
// };

var game = function (guess, answer) {
    return guess.filter((i, index) => i === answer[i]).length
};