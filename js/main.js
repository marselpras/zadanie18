// arrray

const qBase = [
    {
        question: 'Какой сейчас год?',
        a: '1000',
        b: '2000',
        c: '2001',
        d: '2021',
        answer: 'd'
    },
    {
        question: 'Самый распространенный язык программирования?',
        a: 'java script',
        b: 'java',
        c: 'python',
        d: 'c++',
        answer: 'c'
    },
    {
        question: 'Как расшифровывается аббревиатура HTML?',
        a: 'hello to media line',
        b: 'hypertext media language',
        c: 'hypertext markup language',
        d: 'hydro throne mobile loft',
        answer: 'c'
    },
    {
        question: 'Когда приходит Дед Мороз?',
        a: 'никогда',
        b: 'он и не уходил',
        c: 'в ночь перед Рождеством',
        d: 'в Новогоднюю ночь',
        answer: 'd'
    },
];


// select
const question     = document.getElementById('question');
const questionA    = document.getElementById('guess_a');
const questionB    = document.getElementById('guess_b');
const questionC    = document.getElementById('guess_c');
const questionD    = document.getElementById('guess_d');
const submitBtn    = document.getElementById('submit');
const result       = document.getElementById('result');
const radioButtons = document.querySelectorAll("input[type='radio']");


// variables
let currentQuestion = 0;
let score = 0;


// initial load
loadQuestion();


// =========== Functions ===============

function loadQuestion() {
    // set text from array
    // to corresponding HTML elements
    question.innerText = qBase[currentQuestion].question;
    questionA.innerText = qBase[currentQuestion].a;
    questionB.innerText = qBase[currentQuestion].b;
    questionC.innerText = qBase[currentQuestion].c;
    questionD.innerText = qBase[currentQuestion].d;
}

function getSelectedRadioButtons() { 
    let answer;
    // for each radio button in collection
    // if checked
    // set id to variable answer
    // return variable answer
    radioButtons.forEach((radioBtn) => {
        if (radioBtn.checked) {
            answer = radioBtn.id;
        }
    });
    return answer;
}

function deselectRadioButtons() { 
    // for each radio button in collection
    // set checked state to false 
    radioButtons.forEach((radioBtn) => radioBtn.checked = false);
}


// events
submitBtn.addEventListener('click', () => {
    const answer = getSelectedRadioButtons();
    // get selected radio button
    // if selected
    // if selected element equal to current array answer
    // increment variable score
    // increment variable currentQuestion
    // check array length
    // get result
    if(answer) {
        if (answer === qBase[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < qBase.length) {
            loadQuestion();
        } else {
            document.getElementById('question').innerHTML = "Поздравляю! Вы набрали "+score+" очков!"
        }
    }
});