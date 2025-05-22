// ⏸️ 54:00 (leetcode question : search insert position)

// 📍 common use cases of arrays:
// - for storing all our orders placed on a particular e-commerce application
// - for storing all our friends on a social media platform
// - for storing videos in a playlist

// 📍 multi dimensional array
// - array inside array
// - array of array
// - e.g. for storing scores of each player of two teams who played a cricket match
// let twoDArray = [
//     [1,2,3],
//     [4,5,6]
// ];
// console.log(twoDArray);
// let threeDArray = [
//     [
//         [1,2,3],
//         [4,5,6]
//     ],
//     [
//         [7,8,9],
//         [10,11,12]
//     ]
// ];
// console.log(threeDArray);
// console.log(threeDArray[0]);
// console.log(threeDArray[0][0]);
// console.log(threeDArray[0][0][0]);

// 📍 commong array methods
// - push : add one at the end of the array
// let lordsNames = ["Krishna","Keshav","Govind","Madhav"];
// console.log(lordsNames);
// lordsNames.push("Gopal");
// console.log(lordsNames);
// - pop() : removes the last element (also returns it)
// let lordsNames = ["Krishna","Keshav","Govind","Madhav"];
// console.log(lordsNames);
// let lastElement = lordsNames.pop();
// console.log(lordsNames);
// console.log(lastElement);
// - shift : removes the first element
// let lordsNames = ["Krishna","Keshav","Govind","Madhav"];
// let firstElement = lordsNames.shift();
// console.log(lordsNames);
// console.log(firstElement);
// - unshift() : adds one to the start of an array
// let lordsNames = ["Krishna","Keshav","Govind","Madhav"];
// lordsNames.unshift("Gopal");
// console.log(lordsNames);
// - map() : apply a function to every element
// let lordsNames = ["Krishna","Keshav","Govind","Madhav"];
// lordsNames.map((name)=>{console.log(name,"ji");})

// 📍 iterating over an array
// - iterating means going over elements of an array one by one
// - using for loop
// let arr1 = ["Krishna","Keshav","Govind","Madhav","Gopal"];
// for (let i = 0; i<arr1.length; i++) {
//     console.log(arr1[i]);
// }
// - using for of loop
// let arr1 = ["Krishna","Keshav","Govind","Madhav","Gopal"];
// for (let name of arr1) {
//     console.log(name);
// }
// - using forEach loop
// let arr1 = ["Krishna","Keshav","Govind","Madhav","Gopal"];
// arr1.forEach((name)=>{console.log(name)})

// 📍 accessing elements of arrays
// - using bracket notation and indices
// - indices start from 0
// - using destructuring assignment
// let lordsName = ["Krishna","Keshav","Govind"];
// let [name1, name2, name3] = lordsName;
// console.log(name1);
// console.log(name2);
// console.log(name3);

// 📍 array type
// - arrays in javascript can keep elements of different data types
// - so arrays in javascript are heterogenous
// let arr1 = ["Krishna",21,true,[],{}];
// console.log(arr1);
// - strongly typed languages generally don't support heterogenous arrays

// 📍 ways to initialize an array
// - using square bracket notation
// - using the Array constructor (new Array())
// example:
// let arr1 = new Array();
// arr1[3] = 4;
// console.log(arr1); // [ <3 empty items>, 4 ]
// example:
// let lordsName = new Array("Krishna","Keshav","Govind");
// console.log(lordsName);
// - using new Array(n).fill()
// example:
// let arr1 = new Array(5).fill(0); // [ 0, 0, 0, 0, 0 ]
// console.log(arr1);
// - using Array.of()
// example:
// let arr1 = Array.of("Krishna","Keshav","Govind");
// console.log(arr1);
// - using Array.from()
// let arr1 = Array.from("Krishna");
// console.log(arr1);
// using sparse array : array with empty slots
// let arr1 = [4,,,7] // [ 4, <2 empty items>, 7 ]
// console.log(arr1);
// - using spread operator
// let arr0 = ["Govind","Keshav","Madhav"];
// let arr1 = ["Krishna",...arr0]; // [ 'Krishna', 'Govind', 'Keshav', 'Madhav' ]
// console.log(arr1);

// 📍 array example - object
// let myData = {
//     firstName: "Divyanshu",
//     lastName: "Sahu",
//     age: "21 years 10 months"
// }
// console.log(myData);
// let classData = [
//     {
//         firstName: "Divyanshu",
//         lastName: "Sahu",
//         age: "21 years 10 months"
//     },
//     {
//         firstName: "firstName1",
//         lastName: "lastName1",
//         age: "age1"
//     },
//     {
//         firstName: "firstName2",
//         lastName: "lastName2",
//         age: "age2"
//     },
//     {
//         firstName: "firstName3",
//         lastName: "lastName3",
//         age: "age3"
//     }
// ];
// console.log(classData);

// 📍 array example - number
// let myScore = 42;
// console.log(myScore);
// let classScore = [42,92,93,94,95];
// console.log(classScore);

// 📍 array example - string
// let lordsName = "Krishna";
// console.log(lordsName);
// let lordsNames = ['Krishna','Keshav','Govinda'];
// console.log(lordsNames);

// 📍 what is an array?
// - array is a collection of items
// - array can hold multiple items
// - it is the most used data structure
// - most of the programming languages have built in support for arrays