/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let sorted = nums.sort((x, y) => x - y);
    for (let index = 0; index <= nums.length - 1; index += 2){
        if(sorted[index] !== sorted[index+1]){
            return sorted[index];
        }
    }
    return sorted[nums.length -1];
};