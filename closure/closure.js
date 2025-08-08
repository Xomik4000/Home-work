function greet() {
    const name = 'Саша'
    return function() {
        console.log(`Привет ${name}`);
    }
}

const greet1 = greet()
greet1() //Первое задание

function createCounter () { 
    let count = 0
    function increment() {
        count++
        return count
    }

    function counterValue() {
        const value = `Count is ${count}`
        return console.log(value);
    }

    return [increment, counterValue]
}

const [increment, counterValue] = createCounter()
counterValue()
increment()
increment()
increment()
counterValue() //Второе задание

function fibonacciNumbers() {
    let a = 0;
    let b = 1;
    return function(n) {
        for (let i = 0; i < n; i++) {
            let temp = a //1
            a = b // 2 
            b = temp + b // 3  i = 2
        }
        return a;
    }
}

const fibonacci = fibonacciNumbers()
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(50)); // третье задание

