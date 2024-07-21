const questions = [
    {question:"Which is largest animal in the world",
    answer:[
        {text:"Shark",correct:false},
        {text:"Blue Whale",correct:true},
        {text:"Elephant",correct:false},
        {text:"Giraffe",correct:false},
    ]
    },
    {question:"What animal is the national symbol of Australia?",
    answer:[
        {text:"Kangaroo",correct:true},
        {text:"Koala ",correct:false},
        {text:"Emu",correct:false},
        {text:"Crocodile",correct:false},
    ]
    },
    {question:"Hitler's party is known as:",
    answer:[
        {text:"Labour Party",correct:false},
        {text:"Ku-Klux-Klan",correct:false},
        {text:"Democratic Party",correct:false},
        {text:"Nazi Party",correct:true},
    ]
    },
    {question:"How many bones are in the body of an adult human?",
    answer:[
        {text:"330",correct:false},
        {text:"206",correct:true},
        {text:"250",correct:false},
        {text:"210",correct:false},
    ]
    },  
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    console.log(selectedBtn.dataset);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();