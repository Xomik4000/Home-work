const header = document.getElementById('header')
header.innerText = 'Привет Мир!'  //Первое задание

const title = document.querySelector('.title')
title.style.backgroundColor = 'red'
title.style.color = 'yellow' //Второе задание

const newElement = document.createElement('p');
newElement.innerText = 'DOM - Document Object Model';
document.body.appendChild(newElement) //третье задание

function removeToElement(element) {
    const id = document.getElementById(element);
    id.remove()
    return id
}
removeToElement('link') //Четвёртое задание

const items = document.getElementsByClassName('item')
if (items[2]) {
    console.log(items[2] + ' ' + 'элемент найден');
} else {
    console.log('Элеменет не найден');
}
const link = items[2].querySelector('a')
link.setAttribute('href', 'https://translate.yandex.ru/translator')
console.log(link.getAttribute('href')); //Пятое задание

const newElement1 = document.createElement('div');
newElement1.innerText = 'Новый элемент'
newElement1.classList.add('text');
document.body.appendChild(newElement1) //шестое задание

newElement1.classList.toggle('text')
console.log(newElement1.className === 'text'); //Седьмое задание
