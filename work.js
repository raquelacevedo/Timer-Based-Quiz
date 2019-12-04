
// Variables

//non buttons
var quizContainer = document.getElementById("quiz-area");
var quizLaunch = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var quizComplete = document.getElementById("quiz-complete");
var questionEl = document.getElementById("question-title");
var answerDisplay = document.getElementById("answers-display");
var endQuizScreen = document.getElementById("quiz-end-title");
var submitScore = document.getElementById("submit-initials");
var highscoresDisplay = document.getElementById("highscores");
var leaderboardInitials = document.getElementById("initials-div");
var leaderboardScore = document.getElementById("score-div");
var returnToQuiz = document.getElementById("return-quiz");
var highscoresLink = document.getElementById("score-leaderboard");
var timer1 = document.getElementById("time-spent");
var startTime = 75;
var highscores = [];
var scoreNames = [];

//buttons
var buttonStart = document.getElementById("start-btn");
var buttonChoices = document.getElementById("answer-buttons");
var ans1 = document.getElementById("btn-1");
var ans2 = document.getElementById("btn-2");
var ans3 = document.getElementById("btn-3");
var ans4 = document.getElementById("btn-4");



// Code for the timer - initialize at 75 sec and countdown to 0
function timerCountdown() {
    var timerInterval = setInterval(function() {
        startTime--;
        timer1.textContent = startTime + " seconds remaining";

        if(startTime === 0 | qInterval === questions.length) {
            clearInterval(timerInterval);
            sendMessage();
            return;
        }
    }, 1000);
}

function sendMessage() {
    timer1.textContent = "Time's up!";
}

// Display questions to user
function launchQuiz() {
    quizLaunch.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQuestion();    
} 

var qInterval = 0;

function showQuestion() {
    if (qInterval === questions.length | startTime === 0) {
        endQuizScreen.classList.remove("hide");
        questionContainer.classList.add("hide");
        var score = startTime;
        alert("Your score is " + score);
        highscores.push(score);

        
    } else {
        questionEl.innerText = questions[qInterval].title;
        ans1.innerHTML = questions[qInterval].choices[0];
        ans2.innerHTML = questions[qInterval].choices[1];
        ans3.innerHTML = questions[qInterval].choices[2];
        ans4.innerHTML = questions[qInterval].choices[3];
    }
}

function selectAnswer() {

    if (event.target.textContent === questions[qInterval].answer) {
        alert("That's correct!");
    }  else {
        alert("That's incorrect!");
        startTime = startTime - 10;
    } 
}

// Start Quiz button begins quiz and initializes the timer

buttonStart.addEventListener("click", function() {
    timerCountdown();
    launchQuiz();
});

// Event listener for when a user clicks on their answer

buttonChoices.addEventListener("click", function() {
    selectAnswer();
    qInterval++;
    showQuestion();

});

//Submit score to local storage
submitScore.addEventListener("click", function() {
    alert("Your initials have been submitted!");
    var scoreInitials = document.getElementById("enter-intials").value;

    var playerScore = {
        initials: [scoreInitials],
        score: [highscores]
    }

    console.log(playerScore);

    function populateStorage () {
        localStorage.setItem("player score", JSON.stringify(playerScore));
        localStorage.setItem("initials", JSON.stringify(scoreInitials));
    }

    populateStorage(playerScore);
    
})

// Look at highscores

highscoresLink.addEventListener("click", function() {

    highscoresDisplay.classList.toggle("hide");
    quizLaunch.classList.add("hide");
    endQuizScreen.classList.add("hide");
    highscoresLink.classList.toggle("hide");
    returnToQuiz.classList.toggle("hide");

    var scoreList = JSON.parse(localStorage.getItem("playerScore"));
    console.log(scoreList);
    leaderboardInitials.append.textContent = scoreList.initials;
    leaderboardScore.append.textContent = scoreList.highscore;

})

returnToQuiz.addEventListener("click", function () {
    highscoresLink.classList.toggle("hide");
    returnToQuiz.classList.toggle("hide");
    quizLaunch.classList.toggle("hide");
    highscoresDisplay.classList.toggle("hide");
})
