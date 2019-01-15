/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    if (words.length <= 0) {
        return []
    }

    let localLength = words[0].length
    let localStringArr = [words[0]]
    let globalArr = []
    
    for (let i = 1; i < words.length; i++) {
        const word = words[i]
        if (localLength + word.length < maxWidth) {
            localStringArr.push(' '+word)
            localLength += word.length + 1
        } else {
            globalArr.push(localStringArr)
            localStringArr = [word]
            localLength = word.length
        }
    }
    globalArr.push(localStringArr)
    let adjusted = []
    for (let i=0; i < globalArr.length - 1; i++) {
      globalArr[i] = justify(globalArr[i], globalArr[i].join('').length, maxWidth)
    }
    let last = globalArr.pop()
    last = last.join(' ')
    last += getSpaces(maxWidth - last.length)
    globalArr.push(last)
    
    return globalArr
};


function justify(localStringArr, localLength, maxWidth) {
  
  if (localStringArr.length <= 1) {
    return localStringArr[0]
  }
  
  const maxSpaces = maxWidth - localLength;
  const spaces = Math.floor(maxSpaces / (localStringArr.length - 1));
  const rem =( maxSpaces % (localStringArr.length - 1)) > 0? 1 : 0;  

  let str = ''
  let spacesStr = getSpaces(spaces)
  for(let i = 0; i < localStringArr.length; i++) {
    str += localStringArr[i] 
    
    if (i < localStringArr.length - 1) {
      str += spacesStr
    }
  }
    
  return str; 
}


function getSpaces(spaces){
  let spacesStr = ''
  for(let j = 0; j < spaces; j++ ){
    spacesStr += ' '
  }
    return spacesStr
}
