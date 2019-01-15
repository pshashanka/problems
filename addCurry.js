

function add(n) {
    const addNext = function(x) {
        return add(n+x)
    }
    
    addNext.valueOf = addNext.toString = function() {
        return new String(n)
    }
    
    return addNext;
}


console.log(add(1)(2)(3)(4))
