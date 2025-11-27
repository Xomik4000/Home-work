

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')


first.addEventListener('click', () => console.log('первый'))
second.addEventListener('click', () => console.log('второй') )
third.addEventListener('click', () => console.log('третий')) //Первое задание


second.addEventListener('click', e => e.stopPropagation()) //Второе задание


const button = document.getElementById('btn')
const myForm = document.getElementById('myForm')
const maxLength = 20


myForm.addEventListener('input', () => {
    const inputs = myForm.querySelectorAll('input')
    inputs.forEach(input => {
        const value = input.value
        if (value.length > maxLength) {
            console.log(`Длина строки не должна превышать 20 символов, сейчас ${value.length}`)
        }
    })
}) //третье задание


