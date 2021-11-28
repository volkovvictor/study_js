'use strict';

// 1-е задание

let num = 269;
let sum = 1;

num  += '';
console.log(num.length);

for(let i = 0; i < num.length; i++) {
   sum *= num[i];
   sum = sum**3;
}

console.log(String(sum).slice(0, 2));