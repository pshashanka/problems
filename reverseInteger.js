/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const highInt32 = Math.pow(2,31)
    if((x < (-1*highInt32)) || (x > (highInt32 - 1))) {
        return 0;
    }      

    let k = x;
    let result = 0;
    while (k != 0) {
        const rem  = k % 10;
        k = parseInt(k / 10);
        result = (result*10) + rem
    }
    
    if(isNaN(result)) {
        result = 0;
    }
    
    if ((result < (-1*highInt32)) || (result > (highInt32 - 1))) {
        return 0;
    }    
    
    return  result;
};
