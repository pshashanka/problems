/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    if(lists.length <= 0) {
        return null
    }
    
    let node = lists[0]
    
    for (i=1; i < lists.length; i++) {
        node = merge(node, lists[i])
    }
    
    return node
};

var merge = function(list1, list2) {
    
    if(list1 && !list2) {
        return list1
    }
    
    if(!list1 && list2) {
        return list2
    }
    
    
    let head = new ListNode();
    let temp = head
    
    while(list1 && list2) {
        
//         if(!list1.val) {
//            list1 = list1.next 
//            continue;
//         }
        
//         if(!list2.val) {
//            list2 = list2.next
//             continue;
//         }        
        
        if(list1.val <= list2.val) {
            temp.next = list1
            list1 = list1.next
        } else {
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }
    
    while(list1) {
        temp.next = list1
        list1 = list1.next  
        temp = temp.next
    }
    
    while(list2) {
        temp.next = list2
        list2 = list2.next
        temp = temp.next
    }
    
    return head.next
}

