const hashMap = require('./HashMap.js')
const test = new hashMap(16, 0.75);

test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

 // Overiding should normally occur here since capacity is exceeded
 test.set('LionColar', 'lionColor');
 test.set('moon', 'silver')

 test.print;

// You can also test other methods
console.log(`Value for 'name': ${test.get("banana")}`);
console.log(`Does the map have 'apple'? ${test.has("gray")}`);