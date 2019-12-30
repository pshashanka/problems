
function mergeArrays(arr1: number[], arr2: number[]): number[] {

  console.log(arr1, arr2)
  

  if (!arr2 || arr2.length == 0) {
    return arr1
  } else if (!arr1 || arr1.length == 0) {
    return arr2
  } else if (arr2[0] < arr1[0]) {
    return mergeArrays(arr2, arr1)
  } 

  const ele = arr1.shift() 
  if (!ele) {
    return arr1
  }
  return [ele].concat(mergeArrays(arr1, arr2))
}


console.log(mergeArrays([1,2, 4, 5], [3,4, 6, 7]))
