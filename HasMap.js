class Hashmap {
    constructor(size = 16){
        this.size = size; // Size of the hash table
        this.table = new Array(this.size); // Array to hold the buckets
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



}