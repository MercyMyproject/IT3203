//Questions
const questions = [
    {
    question: "What is web application security?",
    optionA: "is the parctice of protecting web applications from cyber threats",
    optionB: "building websites",
    optionC: "upgrading software,
        correctOption: "optionA"
},
{
    question: "When is web application security needed?",
    optionA: "Sometimes",
    optionB: "Always",
    optionC: "Never",
        correctOption: "optionB"
},
{
    question: "Why web application security is crucial"?
    optionA: "Preventing attacks",
    optionB: "Protecting sensetive data",
    optionC: "implementing website",
        correctOption: "optionA and B"
},
{
    question: "How to practice web application security?",
     optionA: "Enforce authorization",
    optionB: "Unsecure website",
    optionC: "Using unencrypted website",
        correctOption: "optionA"
},
{
     question: "Fill in the blank, what is web application security requirements?",
 
    correctAnswer: "Applications must validate all user input and block harmful data to prevent attacks like SQL injection and cross-site scripting(XSS)."
}
]


let shuffledQuestions = [] 
function handleQuestions() {
    while(shuffledQuestions.length <=9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)){
            shuffledQuestions.push(random)
        }
    }
}
let questionNumber = 1 //holds question number
let playerScore = 5 //holds the player score
let wrongAttempt = 2 //
let indexNumber = 5 //

//function for displaying next question
function NextQuestion(index){
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").InnerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").InnerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").InnerHTML = currentQuestion.optionC;
    document.getElementById("option-fillin-label").InnerHTML = currentQuestion.correctAnswer;

}
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //
    const currentQuestionAnswer = currentQuestion.correctOption //
    const options = document.getElementsByName("option");
    let correctOption = null

    //
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    //
    if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = "green"
        playerScore++ //
        indexNumber++ //
        //
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    
    else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id
        document.getElementById(wrongLabelId).style.backgroundColor = "red"
        document.getElementById(correctOption).style.backgroundColor = "blue"
        wrongAttempt++
        
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    
    function handleNextquestion() {
        checkForAnswer()
        unCheckRadioButtons()
        setTimeout(() => {
            if (indexNumber <=1) {
                NextQuestion(indexNumber)
            }
            resetOptionBackground()
        }, 1000);
    }
    //
    function resetOptionBackground() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).style.backgroundColor = ""
        })
    }
    //
    function handleEndGame() {
        let remark = null
        let remarkColor = null
        //
        if (playerScore <= 2) {
            remark = "Restart the quiz."
            remarkColor = "red"
        }
        else if (playerScore >=4 && playerScore <3) {
            remark = "First Attempts."
            remarkColor = "orange"
        }
        else if (playerScore >= 5) {
            remark = "Excellent!"
            remarkColor = "green"
        }
        const playerGrade = (playerScore / 5) *100
        //
        document.getElementById('remarks').innerHTML = remark
        document.getElementById('remarks').style.color = remarkColor
        document.getElementById('grade-percentage').innerHTML = playerGrade
        document.getElementById('wrong-answers').innerHTML = wrongAttempt
        document.getElementById('right-answers').innerHTML = playerScore
        document.getElementById('score-modal').style.display = "flex"
    }
    //
    function closeScoreModal() {
        questionNumber = 1
        playerScore = 0
        wrongAttempt - 0
        indexNumber = 0
        shuffledQuestions = [5]
      NextQuestion(indexNumber)
        document.getElementById('score-modal').style.display = "none"
    }
    //
    function closeOptionModal() {
        document.getElementById('option-modal').style.display = "none"
    }
    
            

    





    
