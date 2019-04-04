/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const cache = {}
var getRow = function(rowIndex) {
    const data=[]
    for(let col = 0; col <= rowIndex; col++) {
        data.push(pascal(rowIndex, col))
    }
    
    return data;
};

const pascal = function(row, col) {
    if(col == 0 || row == col) {
        return 1
    }
    
    const key = row+':'+col
    
    if(cache[key]) {
        return cache[key];
    }
    
    const val = pascal(row - 1, col -1) + pascal(row - 1, col);
    cache[key] = val;
    return val;
}
