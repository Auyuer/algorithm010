/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

/**
 * 1. 枚举 双循环 O(n ^ 2)
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let len = height.length
    let j = height.length - 1
    let area = 0
    let max = 0

    for(let i = 0; i < j;) {
        // console.log(height[i], height[j], j , i)
        area = Math.min(height[i], height[j]) * (j - i);
        // console.log(area)
        // debugger
        height[i] < height[j] ? height[i++] : height[j--]

        max = Math.max(max, area)
    }
    // console.log(max)
    return max
};
maxArea([1,8,6,2,5,4,8,3,7,0,0,0])
// @lc code=end

