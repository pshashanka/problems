
function permutation(str) {
    
  if (str.length <= 1) {
    return [str]
  }
  
  if (str.length == 2 ) {
    return [str[0] + str[1], str[1]+str[0]]
  }
  
  const strArr = str.split('') // [a,b,c]
  const output = {}
  for (let i = 0; i < strArr.length; i++) {
    const chArr = strArr.splice(i,1)  // [a], [b,c], [b], [a,c]
    
    const resultArr = permutation(strArr.join('')) //[bc, cb], [ac, ca]
    
    for (let j = 0; j < resultArr.length; j++) {
      output[chArr[0] + resultArr[j]] = true    //[abc, acb], [bac, bca]
    }
    
    strArr.splice(i,0, chArr[0])
  }
  
  return Object.keys(output)
}


console.log(permutation('a'))
console.log(permutation('ab'))
console.log(permutation('abc'))
console.log(permutation('aab'))
console.log(permutation('abcd'))
