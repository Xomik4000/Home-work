//дз
const inputs = document.querySelectorAll('input')
const saveButton =  document.getElementById('saveSettings');
const result = document.getElementById('result')
console.log(inputs)

saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    let userData = {}
    inputs.forEach(input => {
        const key = input.name;
        const value = input.value;
        userData[key] = value
    })
    localStorage.setItem('userData', JSON.stringify(userData))
})

document.addEventListener('DOMContentLoaded', () => {
    const saveUserData = JSON.parse(localStorage.getItem('userData'))
    if (saveUserData) {
        result.textContent = JSON.stringify(saveUserData, null, 2)
    } else {
        result.textContent = null
    }
})
//Первое задание

let expenses = [
    { description: 'продукты', sum: 4000, date: new Date("2025-11-28") },
    { description: 'шоппинг', sum: 10000, date: new Date("2025-11-28") },
    { description: 'мобильная связь', sum: 1000, date: new Date("2025-11-28") }
]

localStorage.setItem('expenses', JSON.stringify(expenses))
console.log(JSON.parse(localStorage.getItem('expenses')))

function removeItem(key) {
    return window.localStorage.removeItem(key);
}
removeItem('expenses')
console.log(JSON.parse(localStorage.getItem('expenses')))
//Второе задание

const activeTimeElement = document.getElementById('activeTime')

let activeSeconds = 0

function updateActiveTime() {
    activeSeconds += 1
    activeTimeElement.textContent = activeSeconds
    sessionStorage.setItem('activeTime', activeSeconds)
}

setInterval(updateActiveTime, 1000) // третье задание

