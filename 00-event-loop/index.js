const fs = require('fs');

console.log('Начало работы');

setTimeout(() => {
  console.log('setTimeout 1 happened');
  Promise.resolve().then(() => console.log('timeout promise resolve'))
}, 0);
setTimeout(() => {console.log('setTimeout 2 happened')}, 0)
setTimeout(() => {console.log('setTimeout 3 happened')}, 0)

fs.readFile(__filename, (err, file) => {console.log('file reading')});

setImmediate(() => {console.log('setImmediate happened')});

new Promise(resolve => {resolve('promise happened 1')}).then(console.log)
new Promise(resolve => {resolve('promise happened 2')}).then(console.log)
new Promise(resolve => {resolve('promise happened 3')}).then(console.log)
new Promise(resolve => {resolve('promise happened 4')}).then(console.log)

process.nextTick(() => {console.log('nextTick happened 1')});
process.nextTick(() => {console.log('nextTick happened 2')});
process.nextTick(() => {console.log('nextTick happened 3')});

console.log('Конец файла');

/*
    ┌───────────────────────────┐
 ┌─>│           timers          │
 │  └─────────────┬─────────────┘
 │  ┌─────────────┴─────────────┐
 │  │     pending callbacks     │
 │  └─────────────┬─────────────┘
 │  ┌─────────────┴─────────────┐
 │  │       idle, prepare       │
 │  └─────────────┬─────────────┘
 │  ┌─────────────┴─────────────┐
 │  │           poll            │
 │  └─────────────┬─────────────┘
 │  ┌─────────────┴─────────────┐
 │  │           check           │
 │  └─────────────┬─────────────┘
 │  ┌─────────────┴─────────────┐
 └──┤      close callbacks      │
    └───────────────────────────┘
*/

// Q - process.nextTick
// Bluebird - configurable, setImmediate