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



}