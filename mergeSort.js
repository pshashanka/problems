let inversions = 0
const merge = (left, right) => {
    let leftIndex = 0
    let rightIndex = 0
    const merged = []
    while ((leftIndex < left.length) && (rightIndex < right.length)) {
        if (left[leftIndex] <= right[rightIndex]) {
            merged.push(left[leftIndex])
            leftIndex++
        } else {
            merged.push(right[rightIndex])
            rightIndex++
            inversions += (left.length - leftIndex) 
        } 
    }

    return merged.concat(left.slice(leftIndex), right.slice(rightIndex))
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const middle = arr.length / 2

    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))

}

// Complete the countInversions function below.
function countInversions(arr) {
    inversions = 0
    result = mergeSort(arr)
    console.log("Sorted: ", result)
    return inversions
}


let testArr = [-1, 0, -2, 3,5,4,9,7]
console.log("merge sort result: ", mergeSort(testArr))
testArr = [1, 1, 1, 2, 2]
console.log(countInversions(testArr))

testArr = [2, 1, 3, 1, 2]
console.log(countInversions(testArr))
