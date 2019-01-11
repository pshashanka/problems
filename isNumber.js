var isNumber = function(s) {
  const str = s.trim()   
  
  if(str.length <= 0) {
      return false
  }
  
  const num = new Number(str) 
  return !isNaN(num)    
};
