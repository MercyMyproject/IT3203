const quizData = [
    {
      question: "What is web application security?",
      options: ["a. the practice of protecting web applications from cyber threats", "b.building websites", "c. upgrading software"],
      answer: "a"
    },
    
    {
      question: "When is web application security needed?",
      options: ["a. sometimes", "b. always", "c. never"],
      answer: "b"
    },
    
    {
    question: "Why web application security is crucial?",
    options: ["a.preventing attacks", "b.protecting sensitive data", "c.implementing website", "d. a and b"],
    answer: "d"

    },
    
    {
    question: "How to practice web application security?",
    options: ["a.enforce authorization", "b.unsecure website", "c.using unecrypted website"],
    answer: "a"
    },
    
    {
    question: "Fill in the blank, what is web application security requirements?",
    options: ["                                  "],
    answer: "Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS)."
    },
    
  ];
  
  let currentQuestion = 0;
        let score = 0;
        let timeLeft = 30;
        let timerInterval;
        const timerEl = document.getElementById('time');
        const questionEl = document.querySelector('.question');
        const optionsEl = document.querySelector('.options');
        const resultEl = document.querySelector('.result');
        const scoreEl = document.getElementById('score');
        const restartBtn = document.querySelector('.restart-btn');

        // Function to load the question
        function loadQuestion() {
            if (currentQuestion >= quizData.length) {
                endQuiz();
                return;
            }
            clearInterval(timerInterval);
            timeLeft = 30;
            timerEl.textContent = timeLeft;
            startTimer();
            const currentQuiz = quizData[currentQuestion];
            questionEl.textContent = currentQuiz.question;
            optionsEl.innerHTML = ''; // Clear previous options
            currentQuiz.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsEl.appendChild(button);
            });
        }

        // Check the answer
        function checkAnswer(selectedOption) {
            if (selectedOption === quizData[currentQuestion].answer) {
                score++;
                }
            currentQuestion++;
            loadQuestion();
        }

        // Start the timer
        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }, 1000);
        }

        // End the quiz and show the results
        function endQuiz() {
            clearInterval(timerInterval);
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            resultEl.style.display = 'block';
            scoreEl.textContent = score;
            restartBtn.style.display = 'block';
        }

        // Restart the quiz
        restartBtn.addEventListener('click', () => {
            // Reset variables
            currentQuestion = 0;
            score = 0;
            timeLeft = 30;
            timerEl.textContent = timeLeft;

            // Reset the display
            questionEl.style.display = 'block';
            optionsEl.style.display = 'flex'; // Ensure options are displayed correctly
            resultEl.style.display = 'none';
            restartBtn.style.display = 'none';

            // Load the first question
            loadQuestion();
        });

        // Initialize the quiz with the first question
loadQuestion();

    





    
