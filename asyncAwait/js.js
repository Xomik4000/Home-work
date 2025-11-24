
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

fetcAsyncUsers('https://jsonplaceholder.typicode.com/users/1') // Второе задание