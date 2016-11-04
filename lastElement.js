
const last = (...elems) => {

  if (elems.length <= 0 ) {
    return null
  }
  //
  // if (elems.length === 1) {
  //   const k = elems[0]
  //
  //   if (typeof k === 'object') {
  //     const keys = Object.keys(k)
  //     return k[keys.length - 1]
  //   } else {
  //     const prim = new String(k)
  //     const val = prim.charAt(prim.length - 1)
  //     return (typeof k === 'string') ? val : Number(val)
  //   }
  //
  // }
  //
  // return elems.pop()
  const last = elems[elems.length - 1];
	return last[last.length - 1] || last;

}

last() === null ? console.log('pass') : console.log('fail')
last( [1,2,3,4] ) == 4 ? console.log('pass') : console.log('fail')
last( "xyz" )  === 'z' ? console.log('pass') : console.log('fail')
last( 1,2,3,4 )  == 4 ? console.log('pass') : console.log('fail')
last( "z" )  === 'z' ? console.log('pass') : console.log('fail')
last(12345) === 5 ? console.log('pass') : console.log('fail')
