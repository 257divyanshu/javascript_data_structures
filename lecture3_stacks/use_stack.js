import Stack from "./stack.js";
const stack1 = new Stack();

// testing 1
// console.log(stack1); // Stack { items: [] }
// console.log(stack1.items); // []

// testing 2
// stack1.push(21);
// stack1.push(22);
// console.log(stack1.peek());
// console.log(stack1.size());
// console.log(stack1.isEmpty());
// stack1.pop();
// console.log(stack1.peek());
// console.log(stack1.size());
// console.log(stack1.isEmpty());
// stack1.pop();
// console.log(stack1.peek());
// console.log(stack1.size());
// console.log(stack1.isEmpty());

console.log(stack1.items); // this is accessible!
// - this is problematic
// - solution : make the items a private member
// - after making items a private member, the above line of code will log undefined
// - what we did just now is called ENCAPSULATION