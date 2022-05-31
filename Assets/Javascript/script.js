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
// Questions Variable
var questionEl = document.querySelector('#questions');
// Timer Variable
var timerEl = document.querySelector('#timer');
// Input Variable for Scoreboard w/ Initials
var inputEl = document.querySelector('#input-init');
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
    solution: "Cascading Stylesheet"
},
// Question 2 w/ answers
{   title:"What is the abbreviation of Hypertext Markup Language?",
    answers:["HTML", "CSS", "JS", "None of the above"],
    solution: "HTML"
},
// Question 3 w/ answers
{  title:"What must you do before using Bootstrap in your projects?",
    answers:["Add a reset CSS file", "Setup your HTML file", "Add the Bootstrap Library link to your HTML", "All of the above"],
    solution: "All of the above"
},
// Question 4 w/ answers
{  title:"How does CSS give priority to elements inside the file?",
    answers:["IDs have less precedence than Elements", "Universal Selector has precedence over all", "IDs have the highest precedence", "None of the above"],
    solution: "IDs have the highest precedence"
}

]

var index=0

// Timer Countdown Function
function countDown() {
    timerEl.textContent=timeRemains
    timeRemains--
}

// startGame Function
function startGame() {
    questionEl.classList.remove("hide");
    introEl.classList.add("hide");
    clockID = setInterval(countDown,1000);
    displayQuestions();
}

// displayQuestions Function
function displayQuestions() {
    titleEl.textContent=question[index].title
    answer1El.textContent = question[index].answers[0]
    answer2El.textContent = question[index].answers[1]
    answer3El.textContent = question[index].answers[2]
    answer4El.textContent = question[index].answers[3]
}

// nextQuestion Function
function nextQuestion() {
    index++
    displayQuestions()

}

// Clicking an answer leads to the next question
answer1El.addEventListener("click", nextQuestion)
answer2El.addEventListener("click", nextQuestion)
answer3El.addEventListener("click", nextQuestion)
answer4El.addEventListener("click", nextQuestion)

// start of game by clicking the start button
startQuizBtn.addEventListener("click", startGame)
