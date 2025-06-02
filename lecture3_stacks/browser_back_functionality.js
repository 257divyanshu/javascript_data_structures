import Stack from './stack.js';

//  📍 iteration 2 (issues fixed)

import promptSync from 'prompt-sync';
const prompt = promptSync();

const stack1 = new Stack();

let exit = false;

while (!exit) {

    console.log(`Please select one of the below choices
    1. Press 1 to add new domain
    2. Press 2 to see the current domain
    3. Press 3 to go back
    4. Press 4 to exit
`);

    const userChoice = parseInt(prompt('Your choice: '));
    console.log('You selected:', userChoice);

    switch (userChoice) {
        case 1:
            const domainName = prompt(`Please providethe new domain : `);
            stack1.push(domainName);
            console.log(domainName, "added! ✅");
            break;
        case 2:
            let currentDomain = stack1.peek();
            if (currentDomain) {
                console.log('current domain :', currentDomain);
            }
            else {
                console.log("sorry, you don't have any domain!");
            };
            break;
        case 3:
            try {
                stack1.pop();
                let currentDomain = stack1.peek();
                if (currentDomain) {
                    console.log('current domain :', currentDomain);
                }
                else {
                    console.log("sorry, you don't have any domain now, the one you deleted was the last domain!");
                };
            }
            catch (e) {
                console.log("sorry, you don't have any domain!");
            };
            break;
        case 4:
            exit = true;
            break;
    }

};

// - having multi-line pompt text is causing problems
// - either use a single line prompt text
// - or log the prompt text beforehand and then use the prompt() function


//  📍 iteration 1 (causing issues)

// import promptSync from 'prompt-sync';

// const prompt = promptSync();
// const userChoice = parseInt(prompt(`Please select one of the below choices
//     1. Press 1 to add new domain
//     2. Press 2 to see the current domain
//     3. Press 3 to go back
//     4. Press 4 to exit
// `));

// console.log(userChoice);