/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    const INT_MIN = -1 * 2147483648
    const INT_MAX = 2147483647
    const ZERO = '0'.charCodeAt(0)
    const NINE = '9'.charCodeAt(0)
    let num = ''
    let sign = ''
    let val = 0    
    let index = 0;
    for(;index < str.length && str[index] == ' '; index++){}
    

    
    if(str[index] == '+' || str[index] == '-' ) {
        sign = str[index];
        index += 1
    }    
    
    if(str.charCodeAt(index) < ZERO || str.charCodeAt(index) > NINE ) {
        return 0;
    }    
    
    for (let i =index; i < str.length; i++) {

        if(str.charCodeAt(i) >= ZERO 
             && str.charCodeAt(i) <= NINE){
            num += str[i]
            continue;
        } else {
            break
        }         
        
    }
    
  for(let i = 0; i < num.length; i++) {
    val += num[i] * Math.pow(10, ((num.length - 1) - i))
  }
  
  if(sign === '-' && val > 0) {
    val *= -1
  }
  
  if (val < INT_MIN) {
    val = INT_MIN
  }
  
  if (val > INT_MAX) {
    val = INT_MAX
  }
    
    return val;
    
};
