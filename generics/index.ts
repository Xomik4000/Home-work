function merge<T, U>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

const person = {
  name: "Саша",
};

const details = {
  age: 25,
};

const results = merge(person, details);
console.log(results); //Первое задание

interface Dictionary<T> {
  [key: string]: T;
}

function addItem<T>(dictionary: Dictionary<T>, key: string, value: T): void {
  dictionary[key] = value;
}

function removeItem<T>(dictionary: Dictionary<T>, key: string): void {
  delete dictionary[key];
}

const users: Dictionary<string> = {};

addItem(users, "user1", "Саша");
addItem(users, "user2", "Анна");

console.log(users);

removeItem(users, "user2");

console.log(users); //второе задание

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(condition);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

console.log(evenNumbers);

const words = ["apple", "hi", "banana"];

const longWords = filterArray(words, (word) => word.length > 3);

console.log(longWords); //Третье задание
