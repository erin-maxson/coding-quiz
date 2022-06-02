//Step 1: Display start page - title and paragraph with start button
//Step 2: Timer will start when the start button is clicked on the start page, total timer is 75 seconds w/ 15 seconds for each question
//Step 3: Display question with 4 clickable answers on question page, show question page only
//Step 4: Start page is hidden, only displaying the question page
//Step 5: After click, show the status of "Correct!" or "Wrong!" based on answer
//Step 5a: Wrong answers should decrease the timer by 15 seconds. If you answer correctly, there is no penalty on the clock.
//Step 6: After all questions are answered, you will be presented with the high score page to add your initials alongside previous high scores and hit submit button to save it in local storage.
//Step 6a: Timer should be stopped when all questions are answered.
//Step 6b: Time leftover should become your score at the end.
//Step 6c: When you hit submit, it should add your score and initials to local storage.

// Intro Variable
var introEl = document.querySelector('#intro');
// High Score Variable
var highScore = document.querySelector('#high-score');
// Questions Variable
var questionEl = document.querySelector('#questions');
// Timer Variable
var timerEl = document.querySelector('#timer');
// Input Dashboard Variable for Scoreboard w/ Initials
var inputEl = document.querySelector('#input-init');
// Information Input
var enterInputEl = document.querySelector('enter-init');
//Save Input
var saveEl = document.querySelector('save');
// Score Dashboard Variable
var scoreBoardEl = document.querySelector('#score-dashboard');
// Title Variable
var titleEl = document.querySelector('#title');
// Answer #1 Variable
var answer1El = document.querySelector('#answer1');
// Answer #2 Variable
var answer2El = document.querySelector('#answer2');
// Answer #3 Variable
var answer3El = document.querySelector('#answer3');
// Answer #4 Variable
var answer4El = document.querySelector('#answer4');

// Start Quiz Button Selector
var startQuizBtn = document.querySelector('#startbtn');

// Timer Settings
var timeRemains = 75
var clockID = []

// Question functions
var question = [ {
// Question 1 w/ answers
    title: "What does the abbreviation CSS stand for?",
    answers: ["Coding Student Strategies", "Cascading Stylesheet", "HTML", "C++ Stylesheets"],
    correct: answer2El
},
// Question 2 w/ answers
{   title:"What is the abbreviation of Hypertext Markup Language?",
    answers:["HTML", "CSS", "JS", "None of the above"],
    correct: answer1El
},
// Question 3 w/ answers
{   title:"What must you do before using Bootstrap in your projects?",
    answers:["Add a reset CSS file", "Setup your HTML file", "Add the Bootstrap Library link to your HTML", "All of the above"],
    correct: answer4El
},
// Question 4 w/ answers
{   title:"How does CSS give priority to elements inside the file?",
    answers:["IDs have less precedence than Elements", "Universal Selector has precedence over all", "IDs have the highest precedence", "None of the above"],
    correct: answer3El
}

]

var index=0

// nextQuestion Function
function nextQuestion() {
    index++
    displayQuestions()
}

function checkAnswer(button) {
    if (button.target===question[index].correct) {
        answer1El
        nextQuestion()
    }

    else {
        timeRemains -=15
    }

}

// Timer Countdown Function
// function countDown() {
//     clearInterval(clockID)
    
//     if
    
//     else {
//     timerEl.textContent=timeRemains
//     timeRemains--
// }
// }

// startGame Function
function startGame() {
    questionEl.classList.remove("hide");
    introEl.classList.add("hide");
    clockID = setInterval(countDown,1000);
    displayQuestions();
}

// displayQuestions Function
function displayQuestions() {
    titleEl.textContent = question[index].title
    answer1El.textContent = question[index].answers[0]
    answer2El.textContent = question[index].answers[1]
    answer3El.textContent = question[index].answers[2]
    answer4El.textContent = question[index].answers[3]
}

// Clicking an answer leads to the next question
answer1El.addEventListener("click", checkAnswer)
answer2El.addEventListener("click", checkAnswer)
answer3El.addEventListener("click", checkAnswer)
answer4El.addEventListener("click", checkAnswer)

// View Dashboard -- Hide Questions, Make Scoreboard & Input section visible
function viewDashboard() {
    scoreBoardEl.classList.remove("hide");
    inputEl.classList.remove("hide");
    questionEl.classList.add("hide");
}


// function timerScore () {
    
// }

function inputInitials () {
    enterInputEl.length();
}

function displayScore () {
    scoreBoardEl.textContent()
}

// saveEl.addEventListener("click", inputScore)

// start of game by clicking the start button
startQuizBtn.addEventListener("click", startGame)
