const button = document.getElementById('myButton')
button.addEventListener('click', function() {
    button.textContent = 'Клавиша'
}) //Первое задание

button.addEventListener('mouseover', () => {
    console.log('Навёлся');
    button.style.width = '200px'
}) //Второе задание

document.getElementById('myInput').addEventListener('keyup', (e) => {
    console.log('Отпущена клавиша:' + e.key );
}) //Третье задание

document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Успешная отправка формы');
}) //Четвёртое задание


const button1 = document.getElementById('myButton1');

button1.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')    
})//Пятое задание


