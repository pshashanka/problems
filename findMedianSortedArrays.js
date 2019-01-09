function merge(left, right) {
  let leftIndex = 0
  let rightIndex = 0
  const output = []
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      output.push(left[leftIndex++])
    } else {
      output.push(right[rightIndex++])
    }
  }
  

  return output.concat(left.splice(leftIndex), right.splice(rightIndex))
}

var findMedianSortedArrays = function(nums1, nums2) {
    const combined = merge(nums1,nums2)
    const mid = Math.ceil(combined.length / 2)
    const left = combined.splice(0, mid)
    const right = combined
    console.log(left, right)
     
    if (left.length == right.length) {
      return ((left.pop() + right.shift()) / 2)
      
    } 
  
    return left.pop()
    
};



const arr1 = [1,2]
const arr2 = [3,4]
console.log(findMedianSortedArrays(arr1,arr2))
