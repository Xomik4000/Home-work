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
            if (method === 'DELETE') {
                return true
            }

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



const postURL = 'https://jsonplaceholder.typicode.com/posts'
const answer = document.getElementById('answer')

document.getElementById('loadForm').addEventListener('submit', (e) => {
    e.preventDefault()

    const inputs = document.querySelectorAll('input')
    let dataForms = {}
    const allowedKeys = ['userId', 'title', 'body']
    inputs.forEach(input => {
        const key = input.name;
        if (allowedKeys.includes(key)) {
            dataForms[key] = input.value
        }
    })
    sendRequest('POST', postURL, dataForms)
        .then(data => {
            console.log(data)
            for (const key in data) {
                let postParagrapg = document.createElement('p')
                postParagrapg.textContent = key + ': ' + data[key]
                answer.appendChild(postParagrapg)
            }
        })
        .catch(error => console.error('Ошибка:', error))
}) //первое задание


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
                listItem.id = post.id
                listItem.textContent = `ID: ${post.id} - ${post.title}`

                const deleteButton = document.createElement('button')
                deleteButton.textContent = 'удалить пост'
                deleteButton.addEventListener('click', () => deletePost(post.id))

                listItem.appendChild(deleteButton)
                postList.appendChild(listItem)
            })
        })
        .catch(error => console.error('Ошибка:', error))
}) //второе задание

function deletePost(id) {
    sendRequest('DELETE', `${postURL}/${id}`)
        .then(() => {
            console.log(`пост ${id} удалён`)

            const postItem = document.getElementById(id)
            if (postItem) {
                postItem.remove()
            }
        })
        .catch(error => console.error('Ошибка:', error))
}
//третье задание

const userURL = 'https://jsonplaceholder.typicode.com/users'
const updatedUser = document.getElementById('updatedUser')


document.getElementById('loadFormUsers').addEventListener('submit', (e) => {
    e.preventDefault()

    const inputs = e.target.elements
    console.log(inputs)
    let dataForms = {}
    const allowedKeys = ['name', 'email']
    allowedKeys.forEach(key => {
        if (inputs[key].value.trim() !== '') {
            dataForms[key] = inputs[key].value;
        }
    })
    const userId = inputs.id.value 
    sendRequest('PUT', `${userURL}/${userId}`, dataForms)
        .then(data => {
            console.log('Пользователь обновлён:', data)
            updatedUser.innerHTML = '';
            for (const key in data) {
                let postParagrapg = document.createElement('p')
                postParagrapg.textContent = key + ': ' + data[key]
                updatedUser.appendChild(postParagrapg)
            }
            const userItem = document.getElementById(`user-${data.id}`)
            if (userItem) {
                userItem.textContent = `ID: ${data.id} - ${data.name} - ${data.email}`
            }
        })
        .catch(error => console.error('Ошибка:', error))
}) // PUT запрос

const patchedUser = document.getElementById('patchedUser')

document.getElementById('patchUserForm').addEventListener('submit', (e) => {
    e.preventDefault()

    const inputs = e.target.elements;
    const userData = {
        email: inputs.email.value
    }
    const userId = inputs.id.value
    fetch(`${userURL}/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            patchedUser.innerHTML = `ID: ${data.id}, Email: ${data.email}`
        })
        .catch(error => console.error('Ошибка:', error))
}) //PUTCH запрос
//четвёртое задание