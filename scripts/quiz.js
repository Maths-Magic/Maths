const quizData = [
  { q: "2 + 3 = ?", answer: 5 },
  { q: "6 - 4 = ?", answer: 2 },
  { q: "3 × 2 = ?", answer: 6 },
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
  document.getElementById("quiz-container").innerHTML = `
    <h3>${q.q}</h3>
    <input id="quizAnswer" type="number" placeholder="?" readonly />
    <p id="quizResult"></p>
  `;

  const pad = document.createElement("div");
  pad.id = "numPad";
  pad.style.display = "grid";
  pad.style.gridTemplateColumns = "repeat(3, 60px)";
  pad.style.justifyContent = "center";
  pad.style.gap = "10px";
  const buttons = ["1","2","3","4","5","6","7","8","9","0","C","OK"];

  buttons.forEach(b => {
    const btn = document.createElement("button");
    btn.textContent = b;
    if (b === "C") btn.onclick = () => document.getElementById("quizAnswer").value = "";
    else if (b === "OK") btn.onclick = checkAnswer;
    else btn.onclick = () => document.getElementById("quizAnswer").value += b;
    pad.appendChild(btn);
  });

  document.getElementById("quiz-container").appendChild(pad);
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("quizAnswer").value);
  if (userAnswer === quizData[current].answer) {
    score++;
    document.getElementById("quizResult").textContent = "✅ Correct!";
  } else {
    document.getElementById("quizResult").textContent = "❌ Try again.";
  }
  current++;
  setTimeout(loadQuiz, 1500);
}

window.onload = loadQuiz;
