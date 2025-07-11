const startButton = document.getElementById('startButton')
const reloadButton = document.getElementById('reloadButton')
const questions = document.getElementsByClassName('questionText')
const answers = document.querySelectorAll('.answer')
const result = document.getElementById('result')
const conclusion = document.querySelector('.conclusion')

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

answers.forEach(answer => {
    answer.addEventListener('mouseover', () => {
        answer.classList.add('js-hovered-answer')
    })

    answer.addEventListener('mouseout', () => {
        answer.classList.remove('js-hovered-answer')
    })
})

function questionAndAnswers(index, hiddenElem) {
    questions[index].style.display = 'flex'
    questions[index].style.flexDirection = 'column'
    questions[index].style.alignItems = 'center'
    hiddenElem.style.display = 'none'
}

startButton.addEventListener('click', () => {
    questionAndAnswers(0, startButton)
})

let correctAnswers = 0;

for (let i = 0; i < questions.length - 1; i++) {
    const clickableAnswers = questions[i].querySelectorAll('.answer');

    clickableAnswers.forEach(answer => {
        answer.addEventListener('click', () => {
            const isCorrect = answer.dataset.correct === 'true';

            if (isCorrect) {
                correctAnswers++;
                alert('ПРАВИЛЬНО!')
            } else {
                alert('НЕПРАВИЛЬНО!')
            }

            questionAndAnswers(i + 1, questions[i])
        })
    })
}


for (let i = 0; i < questions.length - 1; i++) {
    const input = questions[i].querySelector('.myInput')

    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const value = input.value.trim().toLowerCase();
                let correct = false

                if(i === 3 && value === 'зонтик'){
                    correct = true
                }

                if (i === 7 && value === 'круги'){
                    correct = true
                }
                if (correct) {
                    correctAnswers++;
                    alert('ПРАВИЛЬНО!')
                } else {
                    alert('НЕПРАВИЛЬНО!')
                }

                questionAndAnswers(i + 1, questions[i])
                
                if (i === 7) {
                    result.textContent = `Вы ответили правильно на ${correctAnswers} из 8 вопросов`
                }
            }
        })
    }    
}








