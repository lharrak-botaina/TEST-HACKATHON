



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const images = document.getElementById('img')
const answerButtonsElement = document.getElementById('answer-buttons')
// var Construction = '<img src="images/Story2.png">';
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  
  images.innerHTML= question.img
  
  
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    img: 'Story2.png',
    question: 'What is the correct answer?',
    answers: [
      { text: 'a droit', correct: true },
      { text: 'a gouche', correct: false },
      { text: 'en avant', correct: false }
    ]
  },
  {
    img:'story3.png',
    question: 'Best answer?',
    answers: [
      { text: 'a droit', correct: false },
      { text: 'a gouche', correct: false },
      { text: 'en avant', correct: true }
    ]
  },
  // {
  //   question: 'Is web development fun?',
  //   answers: [
  //     { text: 'Kinda', correct: false },
  //     { text: 'YES!!!', correct: true },
  //     { text: 'Um no', correct: false },
  //     { text: 'IDK', correct: false }
  //   ]
  // },
  // {
  //   question: 'What is 4 * 2?',
  //   answers: [
  //     { text: '6', correct: false },
  //     { text: '8', correct: true }
  //   ]
  // }
]