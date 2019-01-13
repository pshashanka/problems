/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let trap = 0
    
    if (height.length <= 1) {
        return trap;
    }
   
    let total = 0
    for (let i =1; i < height.length; i++ ){
      const leftMax = Math.max(...height.slice(0,i))
      const rightMax = Math.max(...height.slice(i, height.length))
      const wB = Math.min(leftMax, rightMax)
      const waterTrapped = wB - height[i]
      if(waterTrapped > 0) {
        total += waterTrapped
      }      
    }  

    
    
    
    return total
};
