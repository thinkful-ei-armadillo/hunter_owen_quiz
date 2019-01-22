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
const answers = [
  [{a: '2019', correct: true},
    {b: '2018', correct: false},
    {c: '2017', correct: false},
    {d: '2016', correct: false},
    {e: '1982', correct: false}],
  [{a: 'Donald Trump', correct: true},
    {b: 'George W Bush', correct: false},
    {c: 'Obama', correct: false},
    {d: 'Derrick Henry', correct: false},
    {e: 'Adrian Peterson', correct: false}],  
  [{a: '50', correct: true},
    {b: '51', correct: false},
    {c: '49', correct: false},
    {d: '48', correct: false},
    {e: '13', correct: false}],
  [{a: '12', correct: true},
    {b: '14', correct: false},
    {c: '24', correct: false},
    {d: '26', correct: false},
    {e: '11', correct: false}],
  [{a: '2019', correct: true},
    {b: '2018', correct: false},
    {c: '2017', correct: false},
    {d: '2016', correct: false},
    {e: '1982', correct: false}]
];

function createTopPaneHtml() {
  return `
<div class="top-pane">
<h1>Concussion Quiz</h1>
<form class="js-quiz-form">
  <button type="button" class="js-start-button">Start Quiz</button>
</form>
</div>`;
}

function createMidPaneHtml() {
  return `
  <div class="middle-pane">
    <h1 class="js-grade">You have ${STORE.numRight} / ${questions.length} right!</h1>
    <form class="js-submit-form">
      <button type="button" class="js-submit-button">Submit</button>
    </form>
    <form class="js-next-form">
      <button type="button" class="js-next-button">Next</button>
    </form>
  </div>`;
}

function createBottomPaneHtml() {
  return `
<div class="bottom-pane">
    <span class="quiz-question">${questions[STORE.qNum]}</span>
    <form class="js-multiple-choice-form">
        <ul class="choices js-current-choices">
          <li class="q1a">${answers[STORE.qNum][0]}</li>
          <li class="q2a">${answers[STORE.qNum][1]}</li>
          <li class="q3a">${answers[STORE.qNum][2]}</li>
          <li class="q4a">${answers[STORE.qNum][3]}</li>
          <li class="q5a">${answers[STORE.qNum][4]}</li>
      </ul>
    </form>
  </div>`;
}



// potentially pass parameters
function renderQuizApp() {
  renderTopPane();
  renderBottomPane();
}



function renderTopPane() {
  let topPaneHtml = createTopPaneHtml();

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