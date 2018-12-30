let func = () => {};
const NUM = 45;
let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

console.log(arrB.includes(8));
console.log('new Set(arrB) is ', new Set(arrB));

import Person from './js/m1';
let p1 = new Person('p1');
p1.sayName();
