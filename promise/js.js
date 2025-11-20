// const myPromise = new Promise((resolve, reject) => {
//     const success = true
//     if (success) {
//         resolve('Опрация завершена успешно')
//     } else {
//         reject('Произошла ошибка')
//     }
// })

// myPromise
//     .then((result) => {
//         console.log(result);
//     },)
//     .catch((error) => {
//         console.log('ошибка:', error);
//     })
//     .finally(() => {
//         console.log('Выполняюсь всегда');
//     })

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Данные загружены')
//     }, 2000)
// })

// fetchData
//     .then((data) => {
//         console.log(data); //данные загружены
//         return 'Обработка данных' 
//     })
//     .then((processData) => {
//         console.log(processData);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     })

// const promise1 = Promise.resolve('Промис 1 выполнен');
// const promise2 = Promise.reject('Промис 2 выполнен');
// Promise.all([promise1, promise2])
//     .then((results) => {
//         console.log(results); // ['Промис 1 выполнен', 'Промис 2 выполнен']
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });

// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Промис 1 выполнен'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Промис 2 выполнен'));
// Promise.race([promise1, promise2])
//     .then((result) => {
//         console.log(result); // 'Промис 1 выполнен'
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });

// const promise1 = new Promise((reject) => setTimeout(reject, 100, 'Промис 1 отклонён'));
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Промис 2 отклонён'));
// const promise3 = new Promise((reject) => setTimeout(reject, 300, 'Промис 3 отклонён'));
// Promise.allSettled([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results);
        
//         results.forEach((result) => {
//             if (result.status === 'fulfilled') {
//                 console.log('Выполнено:', result.value);
//             } else {
//                 console.log('Отклонено:', result.reason);
//             }
//         });
//     });

// console.log('Request data...');
// setTimeout(() => {
//     console.log('Preparing...');
    
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modifided = true;
//         console.log('Data received', backendData);
//     }, 2000)
// }, 2000)


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing...');

//          const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p
//     .then((data) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 resolve(data)
//             }, 2000)
//         })
//     })
//     .then((clientsData) => {
//         clientsData.fromPromise = true
//         return clientsData
//     })
//     .then((data) => {
//         console.log('Modified:', data);
//     })
//     .catch((error) => {
//         console.log('error:', error);
//     })
//     .finally(() => {
//         console.log('Finally');
//     })


// const sleep = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// // sleep(2000).then(() => console.log('After 2 sec'))
// // sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('All promises');
//     })

// Promise.race([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('Race promises');
//     })



const user1 = {
    name: 'Саша',
    age: 25
}


// function getUserData1(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(user)
//         }, 2000)
//     })
// }

// getUserData1(user1)
//     .then((userData) => {
//     console.log('Имя пользователя:', userData.name);
//     console.log('Возраст пользователя:', userData.age);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     }) //Первое задание


// function getUserData2(users, ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(users)
//         }, ms)
//     })
// }

// const user2 = {
//     name: 'Оля',
//     age: 23
// }

// Promise.all([getUserData2(user1, 3000), getUserData2(user2, 5000)])
//     .then((userData) => {
//         userData.forEach((data) => {
//             console.log('Имя пользователя:', data.name);
//             console.log('Возраст пользователя:', data.age);
//         })
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     }) //Второе задание


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