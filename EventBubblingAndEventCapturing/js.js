// document.getElementById('parent').addEventListener('click', () => console.log('parent clicked'))
// document.getElementById('child').addEventListener('click', () => console.log('child clicked'))

// document.getElementById('child').addEventListener('click', (e) => {
//     console.log('child clicked')
//     e.stopPropagation()
// })

// document.getElementById('parent').addEventListener('click', () => console.log('parent clicked'))

// document.getElementById('child').addEventListener('click', (e) => {
//     alert('first handler')
//     e.stopImmediatePropagation()
// })

// document.getElementById('child').addEventListener('click', () => alert('second handler'))

// document.getElementById('list').addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         console.log('Item clicked:', e.target.textContent)
//     }
// })

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



// first.addEventListener('click', showTag, true)
// second.addEventListener('click', showTag, true)
// third.addEventListener('click', showTag, true)


// function showTag(e) {
//     console.log(e.eventPhase + ' : ' + e.currentTarget. tagName + ' от ' + e.target.tagName)
// }

// const buttons = document.querySelectorAll('.btn');

// const handleClick = (e) => {
//     console.log('target >', e.target)
//     console.log('currentTarget >', e.currentTarget)
//     console.log( e.target === e.currentTarget)
// }

// window.addEventListener('click', () => console.log('window click'))

// buttons.forEach(button => {
//     button.addEventListener('click', handleClick)
// })