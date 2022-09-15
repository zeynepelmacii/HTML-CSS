const quizData = [
    {
        question: "What is my favourite meal?",
        a: "Mac and Cheese",
        b: "Hamburger",
        c: "Pasta",
        d: "Pizza",
        correct: "b",
    },
    {
        question: "Who is my favourite singer?",
        a: "Pink Floyd",
        b: "Radiohead",
        c: "Tom Odell",
        d: "Lana Del Rey",
        correct: "c",
    },
    {
        question: "which language i am learning currently?",
        a: "English",
        b: "Spanish",
        c: "French",
        d: "Turkish",
        correct: "b",
    },
    {
        question: "how many percent do i like JavaScript?",
        a: "75",
        b: "25",
        c: "100",
        d: "50",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
