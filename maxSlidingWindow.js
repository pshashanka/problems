/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
 
  const output = []
  
  if(nums.length <= 0) {
    return output
  }
  
  let local =  nums[0]
  let maxIndex = -1
  for (let i = 0 ; i+k <= nums.length; i++) {
    
    if (maxIndex < i) {
       local =  nums[i]  
      for (let j = i+1; j < i +k ; j++ ) {
        if (nums[j] > local) {
          local = nums[j]
          maxIndex = j
        }
      }      
    } else {
        const j = (i + k) - 1
        
        if(j > (nums.length - 1)) {
          break;
        }
        
        if (nums[j] > local) {
          local = nums[j]
          maxIndex = j
        }      
    }

    output.push(local)
    
  }
  
  return output

};
