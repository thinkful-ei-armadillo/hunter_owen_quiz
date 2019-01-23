/* eslint-disable no-console */
/* global $ */
'use strict';

// on first load, only render top panel
// press start, display questions[0], answers[0]
// select choice
// feedback, numRight/Wrong updated
// press next, new question shown
// so on
// at the end, display start, numRight/Wrong

const STORE = {
  qNum: null,
  numRight: 0,
  numWrong: 0,
  choiceId: null,
  randomOrder: []
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
    {a: '2018', correct: false},
    {a: '2017', correct: false},
    {a: '2016', correct: false},
    {a: '1982', correct: false}],
  [{a: 'Donald Trump', correct: true},
    {a: 'George W Bush', correct: false},
    {a: 'Obama', correct: false},
    {a: 'Derrick Henry', correct: false},
    {a: 'Adrian Peterson', correct: false}],  
  [{a: '50', correct: true},
    {a: '51', correct: false},
    {a: '49', correct: false},
    {a: '48', correct: false},
    {a: '13', correct: false}],
  [{a: '12', correct: true},
    {a: '14', correct: false},
    {a: '24', correct: false},
    {a: '26', correct: false},
    {a: '11', correct: false}],
  [{a: '7', correct: true},
    {a: '13', correct: false},
    {a: '4', correct: false},
    {a: '12', correct: false},
    {a: '24', correct: false}]
];

function createTopPaneHtml() {
  return `
<h1>Concussion Quiz</h1>
<form class="js-quiz-form">
  <button type="button" class="js-start-button">Start Quiz</button>
</form>`;
}

function createMiddlePaneHtml() {
  return `
   <h1 class="js-grade">You have ${STORE.numRight} / ${STORE.qNum} right! You have ${STORE.numWrong} incorrect.</h1>`;}

function createBottomPaneHtml() {
  return `
    <form class="js-multiple-choice-form">
      <input type="submit" class="js-submit-button">
      <span class="quiz-question">${questions[STORE.qNum]}</span>
      <ul class="choices js-current-choices">
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[0] ? 'selected' : ''}" id="${STORE.randomOrder[0]}">
          <input type="radio" id="${STORE.randomOrder[0]}" name="choice" value="${answers[STORE.qNum][STORE.randomOrder[0]].a}" required>
          ${answers[STORE.qNum][STORE.randomOrder[0]].a}
          </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[1] ? 'selected' : ''}" id="${STORE.randomOrder[1]}">
          <input type="radio" id="${STORE.randomOrder[1]}" name="choice" value="${answers[STORE.qNum][STORE.randomOrder[1]].a}">
          ${answers[STORE.qNum][STORE.randomOrder[1]].a}
          </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[2] ? 'selected' : ''}" id="${STORE.randomOrder[2]}">
          <input type="radio" id="${STORE.randomOrder[2]}" name="choice" value="${answers[STORE.qNum][STORE.randomOrder[2]].a}">
          ${answers[STORE.qNum][STORE.randomOrder[2]].a}  
          </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[3] ? 'selected' : ''}" id="${STORE.randomOrder[3]}">
        <input type="radio" id="${STORE.randomOrder[3]}" name="choice" value="${answers[STORE.qNum][STORE.randomOrder[3]].a}">
        ${answers[STORE.qNum][STORE.randomOrder[3]].a}
        </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[4] ? 'selected' : ''}" id="${STORE.randomOrder[4]}">
        <input type="radio" id="${STORE.randomOrder[4]}" name="choice" value="${answers[STORE.qNum][STORE.randomOrder[4]].a}">
        ${answers[STORE.qNum][STORE.randomOrder[4]].a}
        </li>
        </ul>
    </form>`;
}

function createBottomPaneHtml2() {
  return `
    <form class="js-multiple-choice-results">
      <button type="button" class="js-next-button">Next</button>
      <span class="quiz-question">${questions[STORE.qNum]}</span>
      <ul class="choices js-current-choices">
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[0] ? 'selected' : ''} ${STORE.randomOrder[0] === 0 ? 'correct' : ''}" id="${STORE.randomOrder[0]}">${answers[STORE.qNum][STORE.randomOrder[0]].a}
        </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[1] ? 'selected' : ''} ${STORE.randomOrder[1] === 0 ? 'correct' : ''}" id="${STORE.randomOrder[1]}">${answers[STORE.qNum][STORE.randomOrder[1]].a}
          </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[2] ? 'selected' : ''} ${STORE.randomOrder[2] === 0 ? 'correct' : ''}" id="${STORE.randomOrder[2]}">${answers[STORE.qNum][STORE.randomOrder[2]].a}
        </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[3] ? 'selected' : ''} ${STORE.randomOrder[3] === 0 ? 'correct' : ''}" id="${STORE.randomOrder[3]}">${answers[STORE.qNum][STORE.randomOrder[3]].a}
        </li>
        <li class="js-choice ${STORE.choiceId === STORE.randomOrder[4] ? 'selected' : ''} ${STORE.randomOrder[4] === 0 ? 'correct' : ''}" id="${STORE.randomOrder[4]}">${answers[STORE.qNum][STORE.randomOrder[4]].a}
        </li>
        </ul>
    </form>`;
}

// potentially pass parameters
function renderQuizApp() {
  if (STORE.qNum === null) { 
    renderTopPane();    
  }
  else if (STORE.qNum < questions.length) {
    renderTopPane();
    renderMiddlePane();
    renderBottomPaneQuestion();
    console.log('rendering panes');
  }
  else if (STORE.qNum >= questions.length) {
    renderTopPane();
    renderMiddlePane();
    $('.js-bottom-pane').empty();
  }
}

function renderTopPane() {
  let paneHtml = createTopPaneHtml();
  $('.js-top-pane').html(paneHtml);
  // render start
}

function renderMiddlePane() {
  let paneHtml = createMiddlePaneHtml();
  $('.js-middle-pane').html(paneHtml);
  // render start, next, correct/incorrect, submit
}

function renderBottomPaneQuestion() {
  let paneHtml = createBottomPaneHtml();
  // console.log(answers[STORE.qNum][0].a);
  $('.js-bottom-pane').html(paneHtml);
  
  //extension: have a randomSeed array, [1, 2, 3, 4, 5], with random order every time
  //render answers in the order dictated by array
  //this way, correctness is still associated with individual answer, 
  //not with the order it was rendered on the page

// if qNum > questions.length
  // renderEndScreen();
}

function renderBottomPaneResults() {
  let paneHtml = createBottomPaneHtml2();
  // console.log(answers[STORE.qNum][0].a);
  $('.js-bottom-pane').html(paneHtml);
}

function randomizeChoiceOrder() {

  let nums = [0, 1, 2, 3, 4];
  let randomNums = [];
  let i = nums.length;
  let j = 0;

  while(i--) {
    j = Math.floor(Math.random() * (i + 1));
    randomNums.push(nums[j]);
    nums.splice(j,1);
  } 
  return randomNums;
  //do something with ranNum
}

function handleStartButton() {
// start quiz button will also reset quiz, bring us to Q1
// reset numRight, numWrong, set qNum = 0
  $('.js-top-pane').on('click', '.js-start-button', () => {
    STORE.randomOrder = randomizeChoiceOrder();
    STORE.qNum = 0;
    STORE.numRight = 0;
    STORE.numWrong = 0;
    renderQuizApp();
  });
}

function handleNextButton() {
  $('.js-bottom-pane').on('click', '.js-next-button', () => {
    STORE.qNum ++;
    STORE.choiceId = null;
    renderQuizApp();
  });
  // display next question in bottom pane
  // display next set of multiple choice options
}

function handleSubmitButton() {
  $('.js-bottom-pane').on('submit', '.js-multiple-choice-form', (event) => {
    event.preventDefault();
    // console.log($(event.target.choice).val());
    // validateEntry();
    console.log(`the answer you chose is index ${STORE.choiceId} in the answer array`);
    gradeAnswer();
    // could render different bottom pane template which only shows answer results
    // important is not have submit button in this other bottom pane template
    renderBottomPaneResults();
  });
  // validate that an answer has been given?
  // check current values of numRight/numWrong vs past values, ensure there has been a change
// submit button will display question and selected answer
// if wrong, red highlight on selection, green highlight on correct
// display "You are wrong/ You are right" in TopPane
// update numRight, numWrong, qNum
}

// this function replaced by taking advantage of required attribute in form submission
// function validateEntry() {
//   if (STORE.choiceId !== null) {
//     console.log(true);
//   }
//   else {
//     console.log(false);
//   }
// }

function gradeAnswer() {
  if (STORE.choiceId === 0) {
    STORE.numRight ++;
  }
  else {
    STORE.numWrong ++;
  }
  // console.log(STORE.numRight);
}

function handleChoice() {
  $('.js-bottom-pane').on('click', '.js-choice', function(event) {
    console.log(`setting selectedId to ${$(event.target).attr('id')}`);
    let selectedId = $(event.target).attr('id');
    STORE.choiceId = parseInt(selectedId, 10);
    // renderQuizApp();
  });
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