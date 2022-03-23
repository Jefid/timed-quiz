//array of objects storing questions and answers
var questions = [
    {question: "",
    answers:["", "", "", ""],
    correct: ""},

    {question: "",
    answers:["", "", "", ""],
    correct: ""},

    {question: "",
    answers:["", "", "", ""],
    correct: ""},

    {question: "",
    answers:["", "", "", ""],
    correct: ""},

    {question: "",
    answers:["", "", "", ""],
    correct: ""}]


var questionLog = 0;
var playerScore = 0;
var timer, counter = 60;
var player = {};

//displays question
function showQuestion() {
    getElementById("question").text(questions[questionLog].question)
    getElementById("answer-1").text(questions[questionLog].answers[0])
    getElementById("answer-2").text(questions[questionLog].answers[1])
    getElementById("answer-3").text(questions[questionLog].answers[2])
    getElementById("answer-4").text(questions[questionLog].answers[3])
}

function countdown() {
    $("#counter").text(counter);
    timer = setInterval(function() {
        counter--;
        $("#counter").text(counter);
        if (counter === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}