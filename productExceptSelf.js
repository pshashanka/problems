/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prod = []
    
    prod[0] = 1;
    for (let i = 1; i < nums.length ;i++) {
        prod[i] = nums[i-1] * prod[i-1]
    }
  
    let temp = 1;
    for (let i = nums.length - 1; i >= 0 ;i--) {
       prod[i] *= temp
       temp *= nums[i]
    }  
    
    return prod
};
