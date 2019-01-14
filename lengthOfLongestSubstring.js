/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { //abcabcbb
    
  if (s.length <= 0) {
      return 0
  }   
    
 
  let longVal = 1
  
  for(let i = 0; i < s.length; i++) {     //b
    
    const localMap = {}
    localMap[s.charCodeAt(i)]=1   //a
    for (let j = i+1; j < s.length; j++ ) { //cab
      if (localMap.hasOwnProperty(s.charCodeAt(j))) { //
        break;
      } else {
        localMap[s.charCodeAt(j)] = 1   //ca
      }
    }
        const keysArr = Object.keys(localMap) //
        if (longVal < keysArr.length) {
          longVal = keysArr.length
        }
  }
  
  return longVal
    
};
