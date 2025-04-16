<div id="quiz"></div>
<button id="submit">Get Results</button>
<div id="results"></div>

function generatequiz(questions, quizContainer, resultsContainer, submitButton){
function showQuestions(questions, quizContainer){
//
}
function showResults(questions, quizContainer, resultsContainer){
//
}
showQuestions(questions, quizContainer);
//
submitButton.onClick = function(){
showResults(questions, quizContainer, resultsContainer);
}
}

var myQuestions = [ 
{
question: "What is Web application Security?",
answers: {
a:'is the parctice of protecting web applications from cyber threats',
b:'building websites',
c: 'upgrading software',
},
correctAnswer: 'a'
},
{
question: "When is web application security needed?",
answers: {
a:'Sometimes',
b:'Always', 
c:"Never',
},
correctAnswer: 'b'
},
{
question: "Why web application security is crucial?",
answers: {
a:'preventing attacks',
b:'protecting senstive data',
c: 'implementing website',
d:'a and b',
},
correctAnswer: 'd'
},
{
question:"How to practice Web application security?",
answers:{
a:'Enforce Authorization',
b:'unsecure website',
c:'using unencrypted website',
},
correctAnswer: 'a'
},
{
question: "Fill in the blank, what is web application secuirty requirements?',
answer:{
correctAnswer:'Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS).'
},
];

function showQuestions, (questions, quizContainer){
//
var output =[];
var answers;
//
for(var i=0; i<questions.length; i++){
//
answers = [];
//
for(letter in questions[i].answers){
//
answers.push(
'<label>'
+'<input type="radio" name="question'+i+'" value="'+letter+'">'
+ letter + ':'
+ questions[i].answers[letter]
+'</labels>'
);
}
//
output.push(
'<div class="question">' + questions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
);
}
//
quizContainer.innerHTML = output.join('');
}
//
showQuestions(questions, quizConainer);

function showResults(questions, quizContainer, resultContainer){
//

var answerContainers = quizContainer.querySelectorAll('.answers');
  //
  var userAnswer = '';
  var numCorrect = 0;
  //
  for(var i=0; i<questions.length; i++){
    //
    if(userAnswer===questions[i].correctAnswer){
      //
      numCorrect++;
      //
      answerContainers[i].correctAnswer){
        //
        numCorrect++;
        //
        answerContainers[i].style.color = 'lightgreen';
      }
      //
      else{
      //
      answerContainers[i].style.color = 'red';
    }
  }
  //
  resultsContainer.innerHtml = numCorrect + 'out of' + questions.length;
}
//
submitButton.onclick = function(){
  showResults(questions,quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
//
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

