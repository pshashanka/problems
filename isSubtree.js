var isSubtree = function(s, t) {
    if (s === null && t === null) {
        return true
    }   
    
    if (s === null && t != null) {
        return false
    } 
    
    return isEqualTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);   
};


var isEqualTree = function(sub, t) {
    if (sub === null && t === null ) {
        return true
    }
    
    if ((sub === null && t!= null) || (sub != null && t === null)) {
        return false
    }    
    
    if (sub.val === t.val) {
        return isEqualTree(sub.left, t.left) && isEqualTree(sub.right, t.right);
    }
    
    return false;
}
