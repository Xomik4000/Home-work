//дз
const inputs = document.querySelectorAll('input')
const saveButton =  document.getElementById('saveSettings');
const result = document.getElementById('result')
console.log(inputs)
const userData = {}

saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    inputs.forEach(input => {
        const key = input.name;
        const value = input.value;
        userData[key] = value
    })
    localStorage.setItem('userData', JSON.stringify(userData))
    const saveUserData = JSON.parse(localStorage.getItem('userData'))
    if (saveUserData) {
        result.textContent = JSON.stringify(saveUserData, null, 2)
    } else {
        result.textContent = null
    }
})
//Первое задание

const expenses = [
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

