// COFFEE QUIZ - PURE JAVASCRIPT VERSION //

const questions = [
  {
    question: "How are you feeling today?",
    options: ["Tired", "Relaxed", "Adventurous"],
  },
  {
    question: "Do you want your drink hot or cold?",
    options: ["Hot", "Cold"],
  },
  {
    question: "Do you like your coffee strong?",
    options: ["Yes", "No"],
  },
];

const results = {
  "Tired-Hot-Yes": {
    name: "Espresso",
    description: "You need a bold pick-me-up shot of caffeine!",
  },
  "Relaxed-Hot-No": {
    name: "Latte",
    description: "Smooth, creamy, and perfect for unwinding.",
  },
  "Relaxed-Hot-Yes": {
    name: "Americano",
    description: "Classic and versatile — a safe choice!",
  },
  "Adventurous-Cold-Yes": {
    name: "Iced Mocha",
    description: "Sweet, bold, and refreshing!",
  },
  "Relaxed-Cold-No": {
    name: "Iced Vanilla Latte",
    description: "Light, refreshing, and chill.",
  },
  "Tired-Cold-Yes": {
    name: "Cold Brew",
    description: "Strong & icy — caffeine with chill vibes.",
  },
  "Adventurous-Hot-Yes": {
    name: "Flat White",
    description: "Smooth, bold and adventurous!",
  },
};

// QUIZ LOGIC //
const quizContainer = document.getElementById("quiz-content");
let currentQ = 0;
let answers = [];

// SHOW QUESTIONS //
function showQuestion() {
  const q = questions[currentQ];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    <div class="options">
      ${q.options
        .map(
          (opt) => `
          <button class="option-button">${opt}</button>
        `
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".option-button").forEach((btn) => {
    btn.addEventListener("click", () => handleAnswer(btn.textContent));
  });
}

// Handle answer //
function handleAnswer(answer) {
  answers.push(answer);
  currentQ++;

  if (currentQ < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// SHOW RESULT //
function showResult() {
  const key = answers.join("-");
  const outcome =
    results[key] || {
      name: "Iced Americano",
      description: "Classic and versatile — a safe choice!",
    };

  quizContainer.innerHTML = `
    <div class="result-card">
      <h2>Your Perfect Coffee:</h2>
      <h3>${outcome.name}</h3>
      <p>${outcome.description}</p>
      <button class="option-button" id="restart">Try Again</button>
    </div>
  `;

  document.getElementById("restart").addEventListener("click", restartQuiz);
}

// RESTART QUIZ //
function restartQuiz() {
  currentQ = 0;
  answers = [];
  showQuestion();
}

document.addEventListener("DOMContentLoaded", showQuestion);