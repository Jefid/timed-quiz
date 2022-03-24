//array of objects storing questions and answers

var questions = [
  { question: "Question #1: Javascript is an _______ language?", answers: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"], correct: "Object-Oriented" },

  { question: "Question #2: Which of the following keywords is used to define a variable in Javascript?", answers: ["var", "let", "Both A and B", "None of the above"], correct: "Both A and B" },

  { question: "Question #3: Which of the following methods is used to access HTML elements using Javascript?", answers: ["getElementbdId()", "getElementsByClassName()", "Both A and B", "None of the above"], correct: "Both A and B" },

  { question: "Question #4: Which of the following methods can be used to display data in some form using Javascript?", answers: ["document.write()", "console.log()", "window.alert()", "All of the above"], correct: "All of the above" },

  { question: "Question #5: Upon encountering empty statements, what does the Javascript Interpreter do?", answers: ["Throws an error", "Ignores the statements", "Gives a warning", "None of the above"], correct: "Ignores the statements" },
];

var questionLog = 0;
var playerScore = 0;
var timer,
  counter = 60;
var player = {};

//displays question
function showQuestion() {
  document.getElementById("question").innerHTML =
    questions[questionLog].question;
  document.getElementById("answer-1").innerHTML =
    questions[questionLog].answers[0];
  document.getElementById("answer-2").innerHTML =
    questions[questionLog].answers[1];
  document.getElementById("answer-3").innerHTML =
    questions[questionLog].answers[2];
  document.getElementById("answer-4").innerHTML =
    questions[questionLog].answers[3];
}
//countdown function
function countdown() {
  document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function () {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    if (counter === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}
// //function to end quiz/ enter initials for score
function endGame() {}

//funstion to start quiz
function startGame() {
  var quizScreen = document.getElementById("quizSection");
  var quizInstructions = document.getElementById("quizDirections");
  quizInstructions.classList.add("invisible");
  quizScreen.classList.remove("invisible");
  quizScreen.classList.add("startScreen");
  showQuestion();
}

//click event to submit questions

//currently will say incorrect every time
document.getElementById("answer-1").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    //show correct on result
  } else {
    console.log("incorrect");
    //show result incorrect
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endGame();
  } else {
    showQuestion();
  }
});


document.getElementById("answer-2").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    //show correct on result
  } else {
    console.log("incorrect");
    //show result incorrect
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endGame();
  } else {
    showQuestion();
  }
});




document.getElementById("answer-3").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    //show correct on result
  } else {
    console.log("incorrect");
    //show result incorrect
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endGame();
  } else {
    showQuestion();
  }
});



document.getElementById("answer-4").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    //show correct on result
  } else {
    console.log("incorrect");
    //show result incorrect
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endGame();
  } else {
    showQuestion();
  }
});







//click event to start game
document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("startButton").addEventListener("click", countdown);
