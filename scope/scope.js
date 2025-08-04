function showLocalVariable() {
    const localVariable = "Я локальная переменная"
    console.log(localVariable);
}

//console.log(localVariable);
/*
произошла ошибка, переменная  localVariable is not defined, не определенна,
т.к она находится в другой области видимости(функциональной), а мы пытаемся вызвать её глобально
 */ //Первое задание

 if (true) {
    const blockVariable = "Я в блоке"
 } 

//console.log(blockVariable);
 /*
произошла ошибка, переменная  blockVariable is not defined, не определенна,
т.к она находится в другой области видимости(блочной), а мы пытаемся вызвать её глобально
 */ //Второе задание

// Hoisting(поднятие) это когда js поднимает наверх все объявленные переменные и функции,
// а потом начинает выполнять сам код.

// пример с var

console.log(userName); // undefined
//т.к var поднимается с инициализацией undefined
var userName = 'Саша'

// console.log(name);// ReferenceError: Cannot access 'name' before initialization
// // const и let тоже поднимаются, но не инициализируется. они находятся во временной мёртвой зоне,
// // до тех пор, пока не будут инициализированны
// const name = 'Саша'


hello()

function hello() {
    console.log('Привет');
}
/*Обычные функции полностью поднимаются, поэтому их можно вызывать до их объявления.
Стрелочные функции и функциональные выражения можно вызвать, только после их объявления
*/ //Третье задание