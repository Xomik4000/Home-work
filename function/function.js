function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\s.,!?;:()]/g, '')
    const reversed = cleaned.split('').reverse().join('')
    return cleaned === reversed
}

console.log(isPalindrome('око')); // первое задание

function findShortWord(sentence) {
    const words = sentence.toLowerCase().split(/\s+/)
    let shortest = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i]
        }
    }
    return shortest
}
 console.log(findShortWord('как у тебя дела')); // второе задание


function createPhoneNumber(input) {
    const digits = input.toString().replace(/\D/g, '')

    if (digits.length !== 9) {
        return 'Ошибка'
    }

    const part1 = digits.slice(0, 3)
    const part2 = digits.slice(3, 6)
    const part3 = digits.slice(6)

    return `8 (${part1}) ${part2}-${part3}`
}

console.log(createPhoneNumber(123456789)); //Третье задание

function minAndMaxNumber (arr) {
    const minNumber = Math.min(...arr)
    const maxNumber = Math.max(...arr)
    return `Максимальное чило: ${maxNumber}; Минимальное число: ${minNumber}`
}

const arr = [213, 312, 343, 234, 11, 2, 4, 5555, 455, 234]

console.log(minAndMaxNumber(arr)); //Четвёртое задание

function bubbleSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}

const test = [12, 23232, 554, 767621, 23221, 4233423, 232342, 121111, 33, 1, 433, 23, 44, 66, 33]
console.log(bubbleSort(test)); // пятое задание
