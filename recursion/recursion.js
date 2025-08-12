function sumArray(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + sumArray(arr.slice(1))
}

console.log(sumArray([1, 2, 3, 4, 5])); //Первое задание

function maxArray([first, ...rest]) {
    if (rest.length === 0) {
        return first
    }
    const maxRest = maxArray(rest)
    if (first > maxRest) {
        return first
    } else {
        return maxRest
    }
}

console.log(maxArray([8, 2, 6, 9, 5])); // Второе задание


function fibonacciNumbers(n) {
  return n <= 1 ? n : fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2)
} 
console.log(fibonacciNumbers(10)); //Четвёртое задание
