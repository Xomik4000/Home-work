const result = 2 * 2 + 2; 
console.log(result); //Вернёт 6

const sin = Math.sin(54);
const cos = Math.cos(16);

const result2 = (sin * cos) ** 2;
console.log(Math.round(result2)); // 0

const c = Math.sqrt(13.2 * 71.90);
const d = Math.sqrt(49);
const e = 2.4 / 7 ** 4;

const result3 = (16 * c / e + 3 ** d) * 2 ** 7;
console.log(Math.round(result3)); //63399252

// Второе задание 

const variable1 = 9;
const variable2 = 2;
const variable3 = 16;

const result4 = variable1 % variable2;
const result5 = variable3 % variable2

console.log(result4);
console.log(0 === result4); // нечётное
console.log(result5); 
console.log(0 === result5); // чётное 

// Третье задание 
 let name = '';
 let defaultName = 'Guest';
 const fullName = name || defaultName;
console.log('Hello, ' + fullName + '!' )