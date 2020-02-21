class Node {
    constructor(key=null, val = null) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    
    isEqual(node) {
        return (!node && this.key === node.key)
    }
    
    toString = () => ('key :' + this.key + ', value: ' + this.val);
}

class DList {
    constructor() {
        this.head = new Node('HEAD');
        this.tail = new Node('TAIL');
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    put(key, val) {
       const node = new Node(key, val);
       this.adjustNode(node);
       return node;
    } 
    
    adjustNode(node) {
        
        if(node.prev) {
            node.prev.next = node.next;
        }
        
        if(node.next) {
            node.next.prev = node.prev;
        }
        
        node.next = this.tail;
        node.prev = this.tail.prev;
        
        this.tail.prev.next = node;
        this.tail.prev = node;
        console.log(' now ', this.head.next.toString())
        return node;
    }
    
    deleteLast() {
        const node = this.head.next;
        this.head.next = node.next;
        node.next.prev = this.head;
        return node.key;
    }
    
    
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.nodeMap = new Map();
        this.nodeList = new DList();
        this.count = 0;
    }
    
    get(key) {
        console.log('get', key)
        if(this.nodeMap.has(key)) {
            let node = this.nodeMap.get(key);
            node = this.nodeList.adjustNode(node);
            this.nodeMap.set(key, node);
            return node.val;
        }
        
        return -1;
    }
    
    put(key, value) {
        console.log('put', key)
        
        if(this.nodeMap.has(key)) {
            let node = this.nodeMap.get(key);
            node.val = value;
            node = this.nodeList.adjustNode(node);
            this.nodeMap.set(key, node);
            return;
        }        
        
        if(this.count >= this.capacity) {
            const key = this.nodeList.deleteLast();
            console.log(key , ' deleting')
            this.nodeMap.delete(key);
            --this.count;
        }

        const node = this.nodeList.put(key, value);
        this.nodeMap.set(key, node);
        ++this.count;        
    }
}
