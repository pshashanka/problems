/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const obj = {}
    
    nums.forEach((v) => {
        if (v > 0) {
            obj[v]= v
        }
    })
    
    let index = 1
    let found = false
    for (k in obj) {
        if (index != k) {
            found = true
            break
        }
        index++
    }
    
    return index
    
};
