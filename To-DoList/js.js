const form = document.querySelector('.my-form');
const input = document.querySelector('.my-input');
const todoList = document.querySelector('.todo-list')
const filterAll = document.getElementById('filter-all');
const filterCompleted = document.getElementById('filter-completed');
const filterPending = document.getElementById('filter-pending')

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (task.completed) {
        li.classList.add('completed')
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked)
        task.completed = checkbox.checked;
        saveTask()
    })

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = task.title;

    const actions = document.createElement('div')
    actions.className = 'todo-actions'

    const reminderBtn = document.createElement('button');
    reminderBtn.title = 'Установить напоминание';

    const img = document.createElement('img')
    img.src = './reminder.png'
    img.alt = 'Напоминание';
    img.style.width = '20px';
    img.style.width = '20px';

    reminderBtn.appendChild(img);

    reminderBtn.addEventListener('click', () => {
        let seconds = prompt('Сколько секунд потратить на задачу?', '60')
        seconds = parseInt(seconds)

        if (!isNaN(seconds) && seconds > 0) {
            setTimeout(() => {
                alert(`Время вышло! Проверь задачу: ${task.title}`)
            }, seconds * 1000)
        } else {
            alert('Введите корректное число секунд.')
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => {
        li.remove()
        tasks = tasks.filter(t => t !== task);
        saveTask()
    })

    actions.appendChild(reminderBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    todoList.appendChild(li);
}

function addTask(taskText, completed = false) {
    const task = {
        title: taskText,
        completed: completed
    }
    tasks.push(task);
    saveTask();
    renderTask(task)
}

function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

tasks.forEach(task => renderTask(task))

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = input.value.trim();
    
    if (taskText) {
        addTask(taskText)
    }

    if (taskText === '') {
        alert('Строка не может быть пустой')
    }

    input.value = ''
})

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        data.slice(0, 5).forEach(task => {
            if (!tasks.some(t => t.title === task.title)) {
                addTask(task.title, task.completed);
            }
        })
    })
    .catch(error => console.error('Ошибка при загрузке задач', error))

filterAll.addEventListener('click', () => filterTasks('all'));
filterCompleted.addEventListener('click', () => filterTasks('completed'));
filterPending.addEventListener('click', () => filterTasks('pending'));


function filterTasks(filter) {
    todoList.innerHTML = '';

    if (filter === 'all') {
        tasks.forEach(task => renderTask(task))
        return;
    } else if (filter === 'completed') {
        tasks.filter(task => task.completed).forEach(task => renderTask(task))
        return;
    } else if (filter === 'pending') {
        tasks.filter(task => !task.completed).forEach(task => renderTask(task))
        return
    }
}