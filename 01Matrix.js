/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    
    
    for (let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] != 0) {
                const adj = adjTopLeftValues(row, col, matrix);
                matrix[row][col] = adj + 1;
            }
        }
    }
    
    console.log('stage 1', matrix)
    
    for (let row = matrix.length - 1; row >= 0; row--) {
        for(let col = matrix[row].length - 1; col >= 0; col--) {
            if(matrix[row][col] != 0) {
                const adj = adjBotRightValues(row, col, matrix);
                matrix[row][col] = adj + 1;
            }
        }
    }    
    
    return matrix;
};


const adjTopLeftValues = (row, col, matrix) => {
    let top, left;
    const max = Number.MAX_SAFE_INTEGER;

    top = row > 0 ? matrix[row - 1][col] : max;
    left = col > 0 ? matrix[row][col - 1] : max;

    return Math.min(left, top);
}


const adjBotRightValues = (row, col, matrix) => {
    let right, bottom;
    const max = Number.MAX_SAFE_INTEGER;

    right = col < (matrix[row].length - 1) ? matrix[row][col + 1] : max;
    bottom = row < (matrix.length - 1) ? matrix[row + 1][col] : max;
    
    return Math.min(matrix[row][col] - 1,right, bottom);
}

