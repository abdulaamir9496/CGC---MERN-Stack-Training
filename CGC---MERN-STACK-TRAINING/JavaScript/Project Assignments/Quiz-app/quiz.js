// **What it does:**  
// - `quizData` is an **array of objects, where each object represents a quiz question.
// - Each question object contains:
//   - `question`: The question to be displayed.
//   - `a`, `b`, `c`, `d`: The available options.
//   - `correct`: The correct answer (matching the input `id` like "c").

const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    }
];

//2. Selecting HTML Elements
// What it does:  
// - Uses `document.getElementById()` and `document.querySelectorAll()` to select the following elements:
const quiz = document.getElementById("quiz");   //   - **`quiz`**: The main quiz container.
const answerEls = document.querySelectorAll(".answer");   //   - **`answerEls`**: All the radio buttons (options).
const questionEl = document.getElementById("question");   //   - **`questionEl`**: The `<h2>` where the question is displayed.
const a_text = document.getElementById("a_text");   //`a_text`**: Spans for displaying the answer choices.
const b_text = document.getElementById("b_text");   //`b_text`**: Spans for displaying the answer choices.
const c_text = document.getElementById("c_text");   //`c_text`**: Spans for displaying the answer choices.
const d_text = document.getElementById("d_text");   //`d_text`**: Spans for displaying the answer choices.
const submitBtn = document.getElementById("submit");   //   - **`submitBtn`**: The "Submit" button.


// Why it’s useful:  
// - These variables allow you to **manipulate the DOM** (change questions, check selected answers, etc.).

let currentQuiz = 0;
let score = 0;
//What it does:  
// - **`currentQuiz`**: Keeps track of the **current question index** (starts at 0 for the first question).
// - **`score`**: Stores the **number of correct answers**.

//Why it’s useful:  
// - Helps track the user's **progress** and **score** as they navigate through the quiz.

//4. Load the First Quiz
loadQuiz();

// What it does:
// - Calls the `loadQuiz()` function to **initialize the quiz** by loading the first question.
//5. `loadQuiz()` Function
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//What it does: 
// 1. **`deselectAnswers()`**: Clears any previously selected option.
// 2. **`const currentQuizData = quizData[currentQuiz];`**: Loads the current question object.
// 3. **Updates the DOM**: Displays the question and options.

// Why it’s useful:
// - Ensures the **correct question and options** are shown when the quiz starts or moves to the next question.

//6. `getSelected()` Function
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

//  What it does: 
// 1. Loops through each option (using `forEach` on `answerEls`).
// 2. Checks if the option is **selected** (`answerEl.checked`).
// 3. Returns the **`id`** of the selected option (e.g., "a", "b", "c", or "d").

// Why it’s useful:  
// - Allows the program to **capture the user's selection** and verify if it's correct.


//7. `deselectAnswers()` Function
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
// What it does:  
// - Loops through all options and **unchecks** them.

//Why it’s useful:  
// - Ensures no options remain **pre-selected** when a new question loads.


//8. Handle Submit Button Click
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                            <button onclick="location.reload()">Reload</button>`;
        }
    }
});

// What it does:  
// 1. **Gets the selected answer:**  
//    - Calls `getSelected()` to retrieve the user’s choice.

// 2. **Checks correctness:**  
//    - Compares the user's selection with `quizData[currentQuiz].correct`.
//    - If correct, **increments the score**.

// 3. **Load next question or finish the quiz:**  
//    - If there are more questions, **call `loadQuiz()`**.
//    - If not, **display the score and a reload button**.

// Why it’s useful:  
// - Handles the **main quiz logic**: validating answers, updating scores, and handling the quiz's completion.
