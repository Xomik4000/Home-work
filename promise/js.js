
const user1 = {
    name: 'Саша',
    age: 25
}


function getUserData1(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user)
        }, 2000)
    })
}

getUserData1(user1)
    .then((userData) => {
    console.log('Имя пользователя:', userData.name);
    console.log('Возраст пользователя:', userData.age);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    }) //Первое задание


function getUserData2(users, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users)
        }, ms)
    })
}

const user2 = {
    name: 'Оля',
    age: 23
}

Promise.all([getUserData2(user1, 3000), getUserData2(user2, 5000)])
    .then((userData) => {
        userData.forEach((data) => {
            console.log('Имя пользователя:', data.name);
            console.log('Возраст пользователя:', data.age);
        })
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    }) //Второе задание


function getRandomDelay() {
    const delayMs = Math.random() * 4000 + 1000
    return delayMs
}

function getPromises1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Первый промис ')
        }, getRandomDelay())
    })
}

function getPromises2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Второй промис ')
        }, getRandomDelay())
    })
}

Promise.race([getPromises1(), getPromises2()])
    .then((data) => {
        console.log('Первый выполнился:', data);
    })
// //Третье задание