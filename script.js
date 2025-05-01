const quizData = [
    
    {
    question: "What is web application?",
    options: ["the practice of protecting web applications from cyber threats", "building websites", "upgrading software"],
    answer: "the practice of protecting web applications from cyber threats"
    },
    {
    Question: "When is web application security needed?",
    options: ["sometimes", "always", "never"],
    answer: "always"
    },
    {
      Question: "Why web application security is crucial? select all that apply?",
      options: ["preventing attacks", "protecting sensitive data", "implementing website"],
      answer: "preventing attacks","protecting sensitive data"
    }, 
    {
     Question: "How to practice web application security",
      options: ["enforce authorization", "unsecure website", "using unecrypted website"],
      answer: "enforce authorization"
    },
    {
        Question:"Fill in the blank, what is web application security requirements?",
        options:[""],
        answer: "Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS)"
    },
   ]; 
        
//select html elements

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const submitButton = document.getElementById("restart");

  
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

 // Restart the quiz
        restartBtn.addEventListener('click', () => {
            // Reset variables
            currentQuestion = 0;
            score = 0;
            timeLeft = 30;
            timerEl.textContent = timeLeft;
            
  function showResult() {
    quiz.innerHTML = `
      <h3>Quiz Completed!</h3>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();

