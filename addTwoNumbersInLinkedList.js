/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let prev = head;
    let hasCarryOn = false;
    while(l1 || l2) {
        let val = 0
        
        if (l1) {
            val += l1.val;
        }
        
        if (l2) {
            val += l2.val;
        }
        
        if(hasCarryOn) {
            val += 1;
            hasCarryOn = false;
        }
        
        if(val >= 10) {
            val -= 10;
            hasCarryOn =  true;
         }
        
        let temp = new ListNode(val);
        prev.next = temp;
        prev = temp;
        
        if (l1) {
            l1 = l1.next;
        }
        
        if (l2) {
            l2 = l2.next;
        }
        
    }
    
    if(hasCarryOn) {
        let temp = new ListNode(1);
        prev.next = temp;
    }
    
    return head.next;
};

