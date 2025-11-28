// // сохранение данных
// localStorage.setItem('username', 'JohnDoe');

// //извлечение данных
// const userName = localStorage.getItem('username')
// console.log(userName)

// // удаление данных
// localStorage.removeItem('username')
// const userName2 = localStorage.getItem('username')
// console.log(userName2)

// // очистка хранилища
// localStorage.clear()

// //примеры использовнаия sessionStorage:

// // сохранение данных
// sessionStorage.setItem('sessionId', 'abc123')

// //извлечение данных
// const sessionID = sessionStorage.getItem('sessionId')
// console.log(sessionID)

// // удаление данных
// sessionStorage.removeItem('sessionId')
// const sessionID2 = sessionStorage.getItem('sessionId')
// console.log(sessionID2)

// // очистка хранилища
// sessionStorage.clear()

// const user = {
//     name: 'Sasha',
//     age: 25
// }

// // Преобразуем объект в JSON-строку и сохраняем
// localStorage.setItem('user', JSON.stringify(user))

// // Извлекаем JSON-строку и преобразуем обратно в объект
// const user1 = JSON.parse(localStorage.getItem('user'))

// console.log(user1.name)
// console.log(user1.age)

// const themeSelect = document.getElementById('theme');
// const saveButton =  document.getElementById('saveSettings');

// Загрузка сохраненной темы при загрузке страницы

// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         themeSelect.value = savedTheme
//         document.body.className = savedTheme
//     }
// })

// Сохранение темы при нажатии кнопки
// saveButton.addEventListener('click', () => {
//     const selectedTheme = themeSelect.value;
//     localStorage.setItem('theme', selectedTheme);
//     document.body.calssName = selectedTheme;
// })



// let visitCount = sessionStorage.getItem('visitCount')

// if (visitCount) {
//     visitCount = Number(visitCount) + 1;
// } else {
//     visitCount = 1;
// }

// sessionStorage.setItem('visitCount', visitCount) //"1"

// document.getElementById('visitCount').textContent = visitCount //1

// const myNumber = 25

// localStorage.removeItem('number')

// console.log(localStorage.getItem('number'))

// localStorage.setItem('number', myNumber)

// console.log(localStorage.getItem('number'))

// localStorage.clear()

const object = {
    name: 'Alex',
    age: 20
}

// localStorage.setItem('person', JSON.stringify(object))

// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person.name = 'Sanya'

// console.log(person)

// window.addEventListener('storage', (e) => {
//     console.log(e)
// })

// localStorage.setItem('temp', Date.now().toString())
// window.onstorage = () => {}





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

const starTime = Date.now()

const activeTime = document.getElementById('activeTime')

function updateActiveTime() {
    const now = Date.now()
    const diffMs = now - starTime;
    const diffSec = Math.floor(diffMs / 1000)

    activeTime.textContent = diffSec
    sessionStorage.setItem('count', diffSec)
}

setInterval(updateActiveTime, 1000)