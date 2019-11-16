
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxarea = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = (j - i) * Math.min(height[i], height[j])
            if (area > maxarea) {
                maxarea = area
            }
        }
    }
    return maxarea;
};



// 两个指针 0 ,len-1  maxarea 谁小移谁指针 , 找出最大面积
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let maxarea = 0;
    while (start !== end) {
        let capacity = Math.min(height[start], height[end]) * (end - start)
        if (capacity > maxarea) {
            maxarea = capacity
        }
        if (height[start] > height[end]) {
            end--
        } else {
            start++
        }

    }
    return maxarea;
}



maxArea([10, 8, 7, 32, 9, 7])