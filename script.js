const quizData = [
    {
      question: "What is web application security"?,
      options: ["a. the practice of protecting web applications from cyber threats", "b.building websites", "c. upgrading software"],
      answer: "a"
    },
    
    {
      question: "When is web application security needed"?,
      options: ["a. sometimes", "b. always", "c. never"],
      answer: "b"
    },
    
    {
    question: "Why web application security is crucial"?,
    options: ["a. preventing attacks", "b. protecting sensitive data", "c. implementing website"],
    answer: "a and b"

    },
    
    {
    question: "How to practice web application security"?,
    options: ["a. enforce authorization", "b. unsecure website", "c. using unecrypted website"],
    answer: "a"
    },
    
    {
    question: "Fill in the blank, what is web application security requirements"?,
    options: [" "],
    answer: "Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS)."
    },
    
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 5;
  let score = 5;
  
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
            

    





    
