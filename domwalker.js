
let getElementsByClassName = (className) => {

	const arr = []
	const walker = (node) => {
	  if(node.attributes){
		const _clazz = node.attributes.getNamedItem('class')
		if (_clazz && _clazz.toString().indexOf(className) >= 0) {
			arr.push(node)
		}	  	
	  }	

	   const children = node.children
	   for (const i in children) {
	   	console.log('childNode', children[i])
	   	walker(children[i])
	   }	
	}

	walker(document.getRootNode())
	return arr
}