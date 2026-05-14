type User = {
  name: string;
  age: number;
};

type Admin = {
  privileges: string[];
};

type AdminUser = User & Admin;

const person: AdminUser = {
  name: "Alex",
  age: 25,
  privileges: [
    "добавление новых постов",
    "просмотор видео",
    "добавление новых пользователей",
  ],
};
// первое задание

type Color = "red" | "green" | "blue";

function setColor(color: Color): string {
  return `Цвет: ${color}`;
}

console.log(setColor("red"));
console.log(setColor("green"));
console.log(setColor("blue"));
//Второе задание

interface Car {
  brand: string;
  model: string;
}

interface ElectricCar extends Car {
  batteryCapacity: number;
}

const car: ElectricCar = {
  brand: "Tesla",
  model: "X",
  batteryCapacity: 98,
}; //третье задание
