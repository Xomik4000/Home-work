function hasEvenNumber(arr) {
    let foundEven = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 === 0) {
            foundEven = true;
        } 
    }
    return foundEven;
}

console.log(hasEvenNumber([128, 35, 47, 503])); //Первое задание

function calculateAverage(numbers) {
    //debugger; 
    let sum = 0;
    for (let i = 0; i <= numbers.length - 1; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(calculateAverage([2, 4, 6])); //Второе задание, ошибка была в цикле, в условии. Он выдавал NaN, т.к undefined  + NaN = NaN

function findLargestNumber (arr) {
    const largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
        // console.log(i, arr[i])
    }
    return largest
}

console.log(findLargestNumber([-10, -20, -30])); //Третье задание 
