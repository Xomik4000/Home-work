'use strict'

function sum(a, b) {
    // x = a + b // ReferenceError: x is not defined
    const x = a + b
    console.log(x)
}

sum(1, 2) //первое задание

function myFunction(a, b) { //SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a, b)
}

myFunction(1, 2) //второе задание

function showThis() {
    console.log(this) 
}

showThis()//в консоли будет undefined в строгом режиме,
//  а в не строгом оно бы указывало на глобальный объект window.
//Третье задание



delete Object.prototype.toString; 
