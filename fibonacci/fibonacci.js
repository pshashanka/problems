

const fibonacci = (num) => {

  const _ar = [0]

	for (let i = 1; i < num; i++) {
		_ar.push(_ar.length > 1 ? _ar[_ar.length - 1] + _ar [_ar.length - 2] : 1)
	}

  return _ar.join(', ')	
}


console.log( fibonacci(10) === '0, 1, 1, 2, 3, 5, 8, 13, 21, 34') //true