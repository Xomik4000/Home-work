const num = 43; //number
console.log(typeof num);

const bigInt = 9007199254740993n ;
console.log(typeof bigInt);

const str = "привет"; //string
console.log(typeof str);

const deliciousApple = true; //boolean
console.log(typeof deliciousApple);

let age;
console.log(typeof age); //undefined

const userName = null;
console.log(typeof userName); //object - баг JS

const game = {
    price: 5000,
    genre: "shooter", 
    grade: 10
}
console.log(typeof game); // object


/*Второе задание*/


const a = 42;
const b = a;

console.log(a);
console.log(b);

let c = 42;
let d = c;

d = c + 1;

console.log(c);
console.log(d); // Хранение данных по значению

const e = [1, 2];
const f = e;

console.log(e);
console.log(f);

const g = [1, 2, 3];
const h = g;

h.push(4);

console.log(g);
console.log(h);

const i = [1, 2, 3];
const j = i;

console.log( i === j);

const k = [1, 2];
const l = [1, 2];

console.log( k === l);
// Хранение данных по ссылке