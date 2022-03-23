//array of objects storing questions and answers

var questions = [
    {question: "Question #1",
    answers:["", "", "", ""],
    correct: ""},

    {question: "Question #2",
    answers:["", "", "", ""],
    correct: ""},

    {question: "Question #3",
    answers:["", "", "", ""],
    correct: ""},

    {question: "Question #4",
    answers:["", "", "", ""],
    correct: ""},

    {question: "Question #5",
    answers:["", "", "", ""],
    correct: ""}]


var questionLog = 0;
var playerScore = 0;
var timer, counter = 60;
var player = {};

//displays question
function showQuestion() {
    console.log(document.getElementById("question").innerHTML);

    document.getElementById("question").innerHTML = (questions[questionLog].question);
    document.getElementById("answer-1").innerHTML = (questions[questionLog].answers[0]);
    document.getElementById("answer-2").innerHTML = (questions[questionLog].answers[1]);
    document.getElementById("answer-3").innerHTML = (questions[questionLog].answers[2]);
    document.getElementById("answer-4").innerHTML = (questions[questionLog].answers[3]);
};
//countdown function
function countdown() {
    document.getElementById("counter").innerHTML = (counter);
    timer = setInterval(function() {
        counter--;
        getElementById("counter").text(counter);
        if (counter === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}
// //function to end quiz/ enter initials for score
function endGame(){

}
//funstion to start quiz
function startGame(){
    var quizScreen= document.getElementById("quizSection");
    var quizInstructions= document.getElementById("quizDirections");
    quizInstructions.classList.add("invisible");
    quizScreen.classList.remove("invisible");
    showQuestion();
}

//need to have a click event to check questions 
document.getElementById("startButton").addEventListener("click", startGame);
