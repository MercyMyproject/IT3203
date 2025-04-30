const quizData = [
    
    {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
     answer: "Paris"
    },
    {
      Question: "What is web application?",
        Answers: [
            { text: "a.the practice of protecting web applications from cyber threats",correct: true},
            { text: "b.building websites", correct: false},
            { text: "c. upgrading software", correct: false},
            ],
    },
    {
      Question: "When is web application security needed?",
        Answer:[
            { text:"a. sometimes", correct: false},
            { text:"b. always", correct: true},
            { text:"c. never", correct: false},
            ],
    },
    
    {
     Question: "Why web application security is crucial? select all that apply", 
        Answer:[
            { text:"a. preventing attacks", correct: true},
            { text:"b. protecting sensitive data", correct: true},
            { text:"c. implementing website", correct: false},
            { text:"d. a and b", correct: false}  
            ],
    },
    
    {
        Question: "How to practice web application security?",
        Answer:[
        { text: "a. enforce authorization", correct: true},
        { text: "b. unsecure website", correct: false},
        { text: "c. using unecrypted website", correct: false},
],
    },
    {
        Question:"Fill in the blank, what is web application security requirements?",
        Answer:[
        { text: "Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS)", correct: true},

],
    },
   ]; 
        
//select html elements

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();

