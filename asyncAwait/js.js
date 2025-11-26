
//ДЗ

 async function delay(ms) {
    const data = await new Promise(resolve => setTimeout(resolve, ms, 'Задержка завершена'))
    return data
} 

delay(2000)
    .then((message) => console.log('Сообщение получено:', message)) // первое задание

async function fetcAsyncUsers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (e) {
        console.error('Ошибка при получении данных:', e)
        throw error
    }
}

fetcAsyncUsers('https://jsonplaceholder.typicode.com/users/1')
    .then(user => console.log(`Имя: ${user.name}, email: ${user.email}, адресс: ${user.address.street}. ${user.address.suite} `))
    .catch(error => console.error('Произошла ошибка:', error)) // Второе задание