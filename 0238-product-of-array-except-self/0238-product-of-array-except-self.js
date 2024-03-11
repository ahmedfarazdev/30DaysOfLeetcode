/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
        let result = new Array(n).fill(1);
        let current = 1;
        for(let i = 0; i < n; i++) {
            result[i] *= current;
            current *= nums[i];
        }
        current = 1;
        for(let i = n - 1; i >= 0; i--) {
            result[i] *= current;
            current *= nums[i];
        }
        return result;
};