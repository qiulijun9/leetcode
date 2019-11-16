
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const map = {}
    function getNum(num) {
        let newNum = 0;
        while (num > 0) {
            newNum += Math.pow(num % 10, 2)
            num = Math.floor(num / 10)
        }
        if (map[newNum]) return;
        map[newNum] = true
        getNum(newNum)
    }
    getNum(n)
    if (getNum[1]) return true
    return false
};