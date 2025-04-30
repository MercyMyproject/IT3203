const quizData = [
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
            { text:"a. preventing attacks", correct: true},
            { text:"b. protecting sensitive data", correct: true},
            { text:"c. implementing website", correct: false},
            { text:"d. a and b", correct: false}  
            ],
    },
    
    {
        Question: "How to practice web application security?",
        { text: "a. enforce authorization", correct: true},
        { text: "b. unsecure website", correct: false},
        { text: "c. using unecrypted website", correct: false},
],
    },
    {
        Question:"Fill in the blank, what is web application security requirements?",
        { text: "Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS)", correct: true},

],
    },
   ]; 

    
  
 // Select the HTML elements

const questionContainer = document.querySelector(".questions");
const resultsContainer = document.querySelector(".results");
const restartButton = document.querySelector("#restart");
const totalSpan = document.querySelector("#total");
const correctSpan = document.querySelector("#correct");

// Define variables
let currentQuestionIndex = 0;
let numCorrect = 0;

// Function to populate the HTML with question and answer options

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.answers.map(answer => `
                <li>
                    <button class="answer-btn">${answer.text}</button>
                </li>
            `).join("")}
        </ul>
    `;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", checkAnswer);
    }); 
}

// Function to check the selected answer
function checkAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = quizData[currentQuestionIndex].answers.find(answer => answer.text === selectedButton.textContent).correct;
    if (isCorrect) {
        numCorrect++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        showResults();
    } else {
        showQuestion();
    }
}

// Function to display the final quiz results
function showResults() {
    questionContainer.style.display = "none";
    resultsContainer.style.display = "block";
    totalSpan.textContent = quizData.length;
    correctSpan.textContent = numCorrect;
}

// Add event listener to restart the quiz
restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0



