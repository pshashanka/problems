

const f = (parent, string) => {
 
  const charSum = (str,start = 0, end = str.length) => {
	let sum = 0

	for (let i = start; i < end; i++) {
		sum += str.charCodeAt(i)
	}

	return sum    	
  }

  let strSum = charSum(string) 
  let count = 0

  for (let i  = 0; i < parent.length; i++) {
  	const __ksum = charSum(parent, i, i + string.length)
  	count += (strSum === __ksum) ? 1 : 0
  }

  return count
}



console.log(f('AdnBndAndBdaBn', 'dAn') == 4) // 4 ("Adn", "ndA", "dAn", "And")
console.log(f('AbrAcadAbRa', 'cAda') == 2) // 2