// 📍 handling collision of keys
class HashTable {
    constructor(size = 50) {
        this.keyMap = new Array(50);
    }
    simpleHashFunc(key, maxValue) {
        // console.log(key,maxValue);
        let sumOfAsciiCodes = 0;
        for (let i = 0; i < key.length; i++) {
            // console.log(key[i],key.charCodeAt(i));
            let asciiCode = key.charCodeAt(i);
            sumOfAsciiCodes += asciiCode;
        };
        // console.log(sumOfAsciiCodes);
        return sumOfAsciiCodes % maxValue;
    }
    set(key,value){
        const hashCode = this.simpleHashFunc(key, this.keyMap.length);
        if(!this.keyMap[hashCode]){
            this.keyMap[hashCode] = [];
        }
        // console.log(hashCode);
        this.keyMap[hashCode].push([key,value]);
        // console.log('value',value,'set at index',hashCode);
    }
    get(key){
        const hashCode = this.simpleHashFunc(key, this.keyMap.length);
        // console.log(hashCode);
        // console.log('value at index', hashCode, "is",this.keyMap[hashCode]);
        // return this.keyMap[hashCode];
        for(let arr of this.keyMap[hashCode]){
            if(arr[0]==key){
                return arr[1];
            }
        };
        return undefined;
    };
};
let hashTable1 = new HashTable();
hashTable1.set('name','Divyanshu');
hashTable1.set('amne','Chinu');
// - before handling collision
// console.log(hashTable1.get('amne')); // it logs Chinu   
// console.log(hashTable1.get('name')); // it also logs Chinu!
// - name was set to Chinu due to collision of keys
// - to solve this problem
// - we will keep an array of values at a particular index (hashCode index)   
// - after handling collision
// console.log(hashTable1.get('amne'));  
// console.log(hashTable1.get('name'));
// - both of the above lines will log :
// - [ [ 'name', 'Divyanshu' ], [ 'amne', 'Chinu' ] ]
// - after handling collision and modifying the get function
console.log(hashTable1.get('amne')); // logs Chinu
console.log(hashTable1.get('name')); // logs Divyanshu
console.log(hashTable1.get('mane')); // logs undefined

// 📍 initial implementation
// class HashTable {
//     constructor(size = 50) {
//         this.keyMap = new Array(50);
//     }
//     simpleHashFunc(key, maxValue) {
//         // console.log(key,maxValue);
//         let sumOfAsciiCodes = 0;
//         for (let i = 0; i < key.length; i++) {
//             // console.log(key[i],key.charCodeAt(i));
//             let asciiCode = key.charCodeAt(i);
//             sumOfAsciiCodes += asciiCode;
//         };
//         // console.log(sumOfAsciiCodes);
//         return sumOfAsciiCodes % maxValue;
//     }
//     set(key,value){
//         const hashCode = this.simpleHashFunc(key, this.keyMap.length);
//         // console.log(hashCode);
//         this.keyMap[hashCode] = value;
//         console.log('value',value,'set at index',hashCode);
//     }
//     get(key){
//         const hashCode = this.simpleHashFunc(key, this.keyMap.length);
//         // console.log(hashCode);
//         console.log('value at index', hashCode, "is",this.keyMap[hashCode]);
//         return this.keyMap[hashCode];
//     }
// };

// let hashTable1 = new HashTable();
// hashTable1.set('name','Divyanshu');
// console.log(hashTable1.get('name'));