class Hashmap {
    constructor(size = 16){
        this.size = size; // Size of the hash table
        this.bucket = new Array(this.size); // Array to hold the buckets
    }
    // hash function takes a key and produces a hash code
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    } 

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value
                return;
            }
        }

        bucket.push([key, value]); // Add new key-value pair
        this.size++;

        // Check load factor and resize if necessary
        if (this.size / this.buckets.length > this.loadFactor) {
            this._resize();
        }
    }
    // Get method to retrieve values by key
    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) {
                return v; // Return the value if key is found
            }
        }
        return null; // Return null if key is not found
    }
    // check if the hashmap has a particular key
    has(key){
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (const [k] of bucket){
            if (k=== key) {
                return true;
            }
        }
        return false;
    }
    remove(key){
        const index = this.hash(key);
        const bucket = this.buckets[index]
        for (let i=0; i<bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1) // remove 1 item starting from i
                this.size--;
                return true;
            }
        }
        return false;
    }
    length() {
        return this.size;
    }
    clear(){
        this.buckets = Array.from({ length: this.buckets.length }, () => []); // Reset buckets
        this.size = 0; // Reset size to 0
    }
    keys(){
        const allKeys = [];
        for(const bucket of this.buckets){
            for(const key of bucket){ // get each bucket's key
                allKeys.push(key); // push the key to the allkeys array
            }
        }
        return allKeys;
    }
    values(){
        const allValues = [];
        for(const bucket of this.buckets){
            for (const [, value] of bucket) {
                allValues.push(value); // Collect each value
            }
        }
        return allValues;
    }
}