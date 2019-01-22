'use strict';

// on first load, only render top panel
// press start, display questions[0], answers[0]
// select choice
// feedback, numRight/Wrong updated
// press next, new question shown
// so on
// at the end, display start, numRight/Wrong

const STORE = {
  qNum: 0,
  numRight: 0,
  numWrong: 0
};

// questions[i] corresponds with answers[i]
const questions = [
  'What year is it?',
  'Who is the current US President?',
  'How many states are there in the US?',
  'How many months are in the year?',
  'How many days are in the week?'
];

// answers[i] has all multiple choice answers for the question
const answers = {
  q1a: [{a: '2019', correct: true},
    {b: '2018', correct: false},
    {c: '2017', correct: false},
    {d: '2016', correct: false},
    {e: '1982', correct: false}],
  q2a: [{a: 'Donald Trump', correct: true},
    {b: 'George W Bush', correct: false},
    {c: 'Obama', correct: false},
    {d: 'Derrick Henry', correct: false},
    {e: 'Adrian Peterson', correct: false}],  
  q3a: [{a: '50', correct: true},
    {b: '51', correct: false},
    {c: '49', correct: false},
    {d: '48', correct: false},
    {e: '13', correct: false}],
  q4a: [{a: '12', correct: true},
    {b: '14', correct: false},
    {c: '24', correct: false},
    {d: '26', correct: false},
    {e: '11', correct: false}],
  q5a: [{a: '2019', correct: true},
    {b: '2018', correct: false},
    {c: '2017', correct: false},
    {d: '2016', correct: false},
    {e: '1982', correct: false}]
};

// potentially pass parameters
function renderQuizApp() {
  renderTopPane();
  renderBottomPane();
}

function renderTopPane() {
// render start, next, correct/incorrect, submit
}

function renderBottomPane() {
// question text, multiple choice
  //extension: have a randomSeed array, [1, 2, 3, 4, 5], with random order every time
  //render answers in the order dictated by array
  //this way, correctness is still associated with individual answer, 
  //not with the order it was rendered on the page
// if qNum > questions.length
  // renderEndScreen();
}




function handleStartButton() {
// start quiz button will also reset quiz, bring us to Q1
// reset numRight, numWrong, set qNum = 1
}

function handleNextButton() {
  // validate that an answer has been given?
  // check current values of numRight/numWrong vs past values, ensure there has been a change
  // display next question in bottom pane
  // display next set of multiple choice options
}

function handleSubmitButton() {
// submit button will display question and selected answer
// if wrong, red highlight on selection, green highlight on correct
// display "You are wrong/ You are right" in TopPane
// update numRight, numWrong, qNum
}

function handleChoice() {
// toggle boolean that answer was selected
// css wise maybe heavier border
}




function handleQuizApp() {
  // DOM ready function
  renderQuizApp();
  handleStartButton();
  handleNextButton();
  handleSubmitButton();
  handleChoice();
} 

handleQuizApp();
// if less than 100% right, direct to
// https://www.webmd.com/g00/brain/concussion-traumatic-brain-injury-symptoms-causes-treatments?i10c.ua=1&i10c.encReferrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3d&i10c.dv=20