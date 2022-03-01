/************************************************* callback ******************************************************/

// 1. write your own function which takes a callback

const cb = length => console.log(`OMG! Your name is {length} characters long`);

const strLength = (name, callback) => {
    const nameLength = name.length;
    callback(nameLength);
}

strLength('Shahbaz', cb);

// 2. function which takes two callbacks

const thanosKills = () => console.log('Give my macbook to my sister');
const thanosLeaves = () => console.log('Yay! I am alive!');

const willThanosKillMe = (name, thanosKills, thanosLeaves) => {
    name.length % 2 === 0 ? thanosLeaves : thanosKills;
}

willThanosKillMe('Shahbaz', die, alive);

// 3. write a function that takes a message and a delay and print that message after the delay.

setTimeout(()=>console.log('some message'), 2000);

// 4. Predict the output

// Q1.

setTimeout(() => console.log('A'), 0)
setTimeout(() => console.log('C'), 0)
setTimeout(() => console.log('B'), 0)

// Answer: A, C, B

// Q2.

setTimeout(() => console.log('A'), 1000)
setTimeout(() => console.log('B'), 400)
setTimeout(() => console.log('C'), 1300)

// Answer: B, A, C

// Q3.

console.log('A')
setTimeout(() => console.log('B'), 0)
console.log('C')

// Answer: A, C, B

// write a function which takes a message and time. The function should print that message every X interval.

const printRegularly = (message, delay) => {
    setInterval(()=>console.log(message), delay);
}

printRegularly('newMessage', 2000)

