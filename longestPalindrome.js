/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestPalindrome = ''
    
    if(s.length <= 1) {
        longestPalindrome = s;
        return longestPalindrome;
    }
    
    for (let i=0; i < s.length; i++) {
        for (let j = s.length - 1 ;(j >= i) && (j - i >= longestPalindrome.length); j--) {
            if(s[i] === s[j]) {
                const substr = s.substring(i,j+1)
                if(substr.length >= longestPalindrome.length && isPalindrome(substr) ) {
                    longestPalindrome = substr;
                }
            }
        }
    }
    
    return longestPalindrome
};


const isPalindrome = function(s) {
    return s === s.split('').reverse().join('')
}
