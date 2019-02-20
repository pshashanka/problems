/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = capacity;
    this.cache = {}
    this.accessCounter = {}
    this.counter = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.hasOwnProperty(key)) {
        this.accessCounter[key] = this.counter++;
        return this.cache[key]
    }
    
    return -1;
};

LRUCache.prototype.ensureCapacity = function() {
    
    const keys = Object.keys(this.cache)

    if(keys.length < this.size) {
        return;
    }
    
    const sorted = keys.sort((a,b) => this.accessCounter[a] - this.accessCounter[b]) 
    const keyToDelete = sorted[0];
    delete this.cache[keyToDelete];
    delete this.accessCounter[keyToDelete];
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    if(!this.cache.hasOwnProperty(key)) {
       this.ensureCapacity();
    }
    
    
    this.cache[key] = value;
    this.accessCounter[key] = this.counter++;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
