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


var introEl = document.querySelector('#intro');
var questionEl = document.query('#questions');
var timerEl = document.querySelector('#timer');
var inputEl = document.querySelector('#input-init');
var startQuizBtn = document.querySelector('#start-btn');

var timeRemains = 75

function countDown() {
    timerEl.textContent=timeRemains
    timeRemains--
    
}


function startGame() {

}

startQuizBtn.addEventListener("click", startGame)

