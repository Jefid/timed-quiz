//array of objects storing questions and answers

var questions = [
  { question: "Question #1", answers: ["a", "b", "c", "d"], correct: "a" },

  { question: "Question #2", answers: ["A", "B", "C", "D"], correct: "B" },

  { question: "Question #3", answers: ["a", "b", "c", "d"], correct: "c" },

  { question: "Question #4", answers: ["a", "b", "c", "d"], correct: "c" },

  { question: "Question #5", answers: ["a", "b", "c", "d"], correct: "d" },
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
  showQuestion();
}

//click event to submit questions

//currently will say incorrect every time
document.getElementById("answers").addEventListener("click", function () {
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
