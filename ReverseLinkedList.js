function reverse(head) {
  let node = head,
      previous,
      tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = tmp;
  }

  return previous;
}

/**
* Recursive solution
**/
var reverseList = function(head, previous) {
    
    if(!head) {
        return previous || head;
    }
    
    const temp = head.next;
    head.next = previous;
    return reverseList(temp, head);       
};
