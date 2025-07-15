const questions = [
    {
        type: 'multiple',
        question: '1. Как называлась первая игра ?',
        options: ['Тише едешь - дальше будешь', 'Живи или умри', 'Фигуры', 'Замри'],
        correct: 0
    },
    {
        type: 'multiple',
        question: '2. Сколько денег получает победитель игры ?',
        options: ['45.6 миллиардов вон', '49.6 миллиардов вон', '45 миллиардов вон', '50 миллиардов вон'],
        correct: 0
    },
    {
        type: 'multiple',
        question: '3. Под каким номером был Сон Ги-Хун?',
        options: ['069', '456', '001', '426'],
        correct: 1
    },
    {
        type: 'input',
        question: '4. Во второй игре какую фигуру выбрал Сон Ги-Хун?',
        correct: 'зонтик'
    },
    {
        type: 'multiple',
        question: '5. Сколько игроков выжило после первой игры?',
        options: ['Больше половины(228+)', 'Меньше половины(228-)'],
        correct: 1
    },
    {
        type: 'multiple',
        question: '6. Сколько Випов приезжало на игру?',
        options: ['8', '5', '6', '7'],
        correct: 1
    },
    {
        type: 'multiple',
        question: '7.Сколь игр было сыграно?',
        options: ['4', '5', '6', '7'],
        correct: 2
    },
    {
        type: 'input',
        question: '8. Кто убирает трупы выбывших игроков после игр?',
        correct: 'круги'
    }
]
const questionContainer = document.getElementById('questionContainer')
const startButton = document.getElementById('startButton')
const reloadButton = document.getElementById('reloadButton')
const result = document.getElementById('result')

startButton.addEventListener('mouseover', () => {
    startButton.classList.add('js-hover-highlight')
})

startButton.addEventListener('mouseout', () => {
    startButton.classList.remove('js-hover-highlight')
})

reloadButton.addEventListener('mouseover', () => {
    reloadButton.classList.add('js-hover-highlight')
})

reloadButton.addEventListener('mouseout', () => {
    reloadButton.classList.remove('js-hover-highlight')
})

let currentIndex = 0;
let correctCount = 0;

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    result.style.display = 'none';
    result.textContent = '';
    questionContainer.innerHTML = ''
    currentIndex = 0;        
    correctCount = 0; 
    showQuestion();
});

reloadButton.addEventListener('click', () => {
    correctCount = 0;
    correctCount = 0;
    result.style.display = 'none';
    result.textContent = '';
    reloadButton.style.display = 'none';
    startButton.style.display = 'block'
    questionContainer.innerHTML = '';
})


function showQuestion() {
    questionContainer.innerHTML = '';

    if (currentIndex >= questions.length) {
        result.style.display = 'block'
        result.style.textAlign = 'center'
        result.textContent = `Вы ответили правильно на ${correctCount} из 8 вопросов`
        reloadButton.style.display = 'block';
        return;
    }

    const q = questions[currentIndex];

    const questionBlock = document.createElement('div');
    questionBlock.className = 'questionBlock';

    const title = document.createElement('h3');
    title.textContent = q.question
    questionBlock.appendChild(title)

    if (q.type === 'multiple') {
        const list = document.createElement('ul')
        list.style.display = 'flex'
        list.style.flexDirection = 'column'
        list.style.alignItems = 'center'

        q.options.forEach((optionText, index) => {
            const item = document.createElement('li');
            item.textContent = optionText;
            item.classList.add('answer')

            item.addEventListener('mouseover', () => {
                 item.classList.add('js-hovered-answer')
            })

            item.addEventListener('mouseout', () => {
                item.classList.remove('js-hovered-answer')
            })

            item.addEventListener('click', () => {
                if (index === q.correct) {
                    alert('Правильно!')
                    correctCount++
                } else {
                    alert('Неправильно!')
                }

                currentIndex++
                showQuestion()
            })

            list.appendChild(item)
        })

        questionBlock.appendChild(list);
    } else if (q.type === 'input') {
        const input = document.createElement('input');
        input.classList.add('myInput');
        input.placeholder = 'Введите ответ';
        questionBlock.appendChild(input);

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const value = input.value.trim().toLowerCase();
                if (value === q.correct.toLowerCase()) {
                    alert('Правильно!');
                    correctCount++
                } else {
                    alert('Неправильно!')
                }
                currentIndex++
                showQuestion()
            }
        })
    }

    questionContainer.appendChild(questionBlock)
}


