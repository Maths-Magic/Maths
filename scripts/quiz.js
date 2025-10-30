const quizData = [
  { q: "2 + 3 = ?", options: [4, 5, 6], answer: 5 },
  { q: "5 - 2 = ?", options: [2, 3, 4], answer: 3 },
  { q: "3 × 2 = ?", options: [5, 6, 7], answer: 6 },
];
let current = 0;
let score = 0;
function loadQuiz() {
  if (current >= quizData.length) {
    document.getElementById("quiz-container").innerHTML =
      `<h3>Your Score: ${score}/${quizData.length}</h3>`;
    return;
  }
  const q = quizData[current];
  const options = q.options.map(
    (opt) => `<button onclick="checkAnswer(${opt})">${opt}</button>`
  ).join(" ");
  document.getElementById("quiz-container").innerHTML = `
    <h3>${q.q}</h3>
    ${options}
  `;
}
function checkAnswer(selected) {
  if (selected === quizData[current].answer) score++;
  current++;
  loadQuiz();
}
window.onload = loadQuiz;