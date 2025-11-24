// async function fetcData1() {
//     return 'Данные загружены'
// }

// console.log(fetcData1());

// fetcData1()
//     .then(data => console.log(data))

// async function fetcData2() {
//     const data = await new Promise(resolve => setTimeout(resolve, 2000, 'Данные загружены'))
//     console.log(data);
// }

// fetcData2()

// async function loadData1(url) {
//     const response = await fetch(url); //ждём
//     const data = await response.json(); //ждём
//     return data
// }

// loadData1('https://api.example.com/user')
//     .then(data => console.log('Данные загружены:', data))
//     .catch(error => console.log('Ошибка загрузки данных:', error))

// async function loadData(url) {
//     try {
//         const response = await fetch(url); //ждём
//         if (!response.ok) {
//             throw new Error('Ошибка сети');
//         }

//         const data = await response.json(); //ждём
//         console.log('Данные загруженны:', data);
//     } catch (error) {
//         console.log('Ошибка:', error.message);
//     }
// }

// loadData('https://api.example.com/user')

// const one = () => Promise.resolve('One!')

// async function myFunc() {
//     console.log('In function');
//     const res = await one()
//     console.log(res);
// }

// console.log('Before function');
// myFunc();
// console.log('Оаофо')
// console.log('After function');

// async function fetcMultipleData() {
//     try {
//         const [data1, data2] = await Promise.all([
//             fetch('')
//                 .then(response => response.json()),
//             fetch('')
//                 .then(response => response.json())
//         ]);
//         console.log('Данные1:', data1);
//         console.log('Данные2:', data2);
//     } catch (error) {
//         console.log('Ошибка:', error.message);
//     }
// }

// fetcMultipleData()


// async function getStarWarsMovie(id) {
//   const response = await fetch(`https://swapi.dev/api/films/${id}/`)
//   console.log('ответ получен', response)
//   // *1

//   return response.json()
// }

// const movies = getStarWarsMovie(1).then((movie) => {
//   console.log(movie.title)
//   // *2
// })

// console.log('результат вызова функции', movies)
// // *3

// function getMainActorProfileFromMovie(id) {
//   return fetch(`https://swapi.dev/api/films/${id}/`)
//     .then((movieResponse) => {
//       return movieResponse.json()
//     })
//     .then((movie) => {
//       const characterUrl = movie.characters[0].split('//')[1]
//       return fetch(`https://${characterUrl}`)
//     })
//     .then((characterResponse) => {
//       return characterResponse.json()
//     })
//     .catch((err) => {
//       console.error('Произошла ошибка!', err)
//     })
// }

// getMainActorProfileFromMovie(1).then((profile) => {
//   console.log(profile)
// })

// async function getMainActorProfileFromMovie(id) {
//   try {
//     const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`)
//     const movie = await movieResponse.json()

//     const characterUrl = movie.characters[0].split('//')[1]
//     const characterResponse = await fetch(`https://${characterUrl}`)
//     return characterResponse.json()
//   } catch (err) {
//     console.error('Произошла ошибка!', err)
//   }
// }

// getMainActorProfileFromMovie(1).then(
//   (profile) => {console.log(profile)}
// )

// const delay = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms))
// }

// delay(2000).then(() => console.log('2 seconds'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
//     .then(data => console.log('Data:', data))
//     .catch(error => console.error(error)) //С помощью промисов

// async function fetchAsyncTodos() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(2000)
//         const response =  await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch (error) {
//         console.error(error)
//     } finally {
//         console.log('afa')
//     }
// }

// fetchAsyncTodos()


//ДЗ

 async function delay(ms) {
    const data = await new Promise(resolve => setTimeout(resolve, ms, 'Задержка завершена'))
    console.log(data)
} 

delay(2000) // первое задание

async function fetcAsyncUsers(url) {
    try {
        const response = await fetch(url);
        const data = await response.json()
        console.log(`Имя: ${data.name}, email: ${data.email}, адресс: ${data.address.street}. ${data.address.suite} `)
    } catch (e) {
        console.error(e)
    }
}

fetcAsyncUsers('https://jsonplaceholder.typicode.com/users/1')