const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById(restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;
const questions = [
  {
    questions: "What is Web application Security?",
    answer:[
      {text:"a. is the parctice of protecting web applications from cyber threats",
correct: true},
        {text:"b.building websites",correct:false},
          {text:"c.upgrading software",correct:false},
      ],
  },
  {
    questions: "When is web application security needed?",
    answer:[
      {text:"a. sometimes", correct: false},
      {text:"b. always", correct: true},
      {text:"c. never", correct: false},
      ],
  },
  {
    
