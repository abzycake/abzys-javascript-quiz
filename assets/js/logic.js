let currentQuestionIndex = 0;
let timeLeft = 60; 
let timerInterval;
let finalScore = 0;

// grabs the questions from the array declared in questions.js
const questions = window.questions;

// DOM elements
const startScreen = document.getElementById("start-screen");
const questionsContainer = document.getElementById("questions");
const timeDisplay = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");
const feedbackElement = document.getElementById("feedback");

// function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // changes the question
  const questionTitleElement = document.getElementById("question-title");
  questionTitleElement.textContent = currentQuestion.question;

  // changes the answer options
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function () {
      checkAnswer(choice);
    });

    choicesContainer.appendChild(choiceButton);
  });
}

// function to start the quiz
function startQuiz() {
  // resets the timer, score and question number
  currentQuestionIndex = 0;
  timeLeft = 60;
  finalScore = 0;

  startScreen.classList.add("hide");
  questionsContainer.classList.remove("hide");

  // starts the timer
  timerInterval = setInterval(function () {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);

  // displays the first question
  displayQuestion();
}

// function to validate the correct answer
function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    feedbackElement.textContent = "Correct!";
    playSound("correct.wav");
    finalScore += 10; // increments score if answer is correct
  } else {
    feedbackElement.textContent = "Incorrect!";
    playSound("incorrect.wav");
    // plays incorrect sound
    if (timeLeft > 10) {
      timeLeft -= 10; // subtracts 10 seconds for incorrect answer
    } else {
      timeLeft = 0; // making sure time does not go negative due to the subtraction
    }
  }

  setTimeout(function () {
    feedbackElement.textContent = "";
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
}

// function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  questionsContainer.classList.add("hide");
  endScreen.classList.remove("hide");

  // validating that the final score is a positive integer
  finalScore = Math.max(0, finalScore);
  finalScoreElement.textContent = finalScore;
}

// function to play sound effects
function playSound(soundFile) {
  const audio = new Audio(`./assets/sfx/${soundFile}`);
  audio.play();
}

// event listener for the "Start Quiz" button
document.getElementById("start").addEventListener("click", startQuiz);

// event listener for the submit button
document.getElementById("submit").addEventListener("click", function () {
    const initials = document.getElementById("initials").value.trim();
    if (initials !== "") {
      // saves score locally
      const newScore = {
        initials: initials,
        score: finalScore,
      };
  
      // grabs existing scores locally
      let existingScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
      // adding new scores
      existingScores.push(newScore);
  
      // sorting high scores from high to low
      existingScores.sort((a, b) => b.score - a.score);
  
      // ensuring only 5 high scores can be saved
      existingScores = existingScores.slice(0, 5);
  
      // updating scores locally
      localStorage.setItem("highScores", JSON.stringify(existingScores));
  
      // redirecting to the high score page
      window.location.href = "highscores.html";
    }
  });
  
