//дз

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then(response => {
            if (response.ok){
                return response.json()
            } else {
                return response.json()
                    .then(error => {
                        const e = new Error('Что-то пошло не так')
                        e.data = error
                        throw e
                    })
            }
        })
}



const requestURL = 'https://jsonplaceholder.typicode.com/users'

document.getElementById('loadForm').addEventListener('click', (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('input')
    let dataForms = {}
    const allowedKeys = ['userId', 'header', 'text']
    inputs.forEach(input => {
        const key = input.name;
        if (allowedKeys.includes(key)) {
            dataForms[key] = input.value
        }
    })
    sendRequest('POST', requestURL, dataForms)
        .then(data => {
            console.log(data)
            for (const key in data) {
                let postParagrapg = document.createElement('p')
                postParagrapg.textContent = key + ': ' + data[key]
                document.body.appendChild(postParagrapg)
            }
        })
        .catch(error => console.error('Ошибка:', error))
}) //первое задание

const postURL = 'https://jsonplaceholder.typicode.com/posts'

document.getElementById('loadPost').addEventListener('click', (e) => {
    e.preventDefault()
    fetch(postURL)
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            const postList = document.getElementById('postList')
            postList.innerHTML = ''
            posts.forEach(post => {
                const listItem = document.createElement('li')
                listItem.textContent = `ID: ${post.id} - ${post.title}`
                postList.appendChild(listItem)
            })
        })
        .catch(error => console.error('Ошибка:', error))
}) //второе задание

